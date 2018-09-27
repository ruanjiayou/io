const fs = require('fs');
const Path = require('path');
const MIME = require('mime');
const SignatureDatas = require('./signature-data');

/**
 * 获取指定文件的文件头buffer
 * @param {string} path 文件路径
 * @returns buffer
 */
const _getFileHeader = (path) => {
  var fd, buf = new Buffer(256);
  fd = fs.openSync(path, 'r');
  fs.readSync(fd, buf, 0, buf.length, 0);
  fs.closeSync(fd);
  return buf;
}
/**
 * 判断两个buff是否相等
 * @param {buffer} buff1 
 * @param {buffer} buff2 
 * @returns boolean
 */
const _bufferIsEqual = (buf1, buf2) => {
  var i = buf1.length - 1;
  if (buf1.length !== buf2.length)
    return false;
  for (; i >= 0; i--)
    if (buf1[i] !== buf2[i])
      return false;
  return true;
}
/**
 * 获取文件头信息
 * @param 文件头buffer|string
 * @returns 文件头信息json
 */
const getSignature = (fileHeader) => {
  let res = {
    extension: [''],
    description: '',
    mimeType: 'application/octet-stream'
  };
  if (typeof fileHeader === 'string') {
    fileHeader = _getFileHeader(fileHeader);
  }
  for (let i = SignatureDatas.length - 1; i >= 0; i--) {
    let signature = SignatureDatas[i];
    if (_bufferIsEqual(fileHeader.slice(0, signature.byteSeq.length), signature.byteSeq)) {
      res.extension = signature.extension;
      res.description = signature.description;
      if (signature.mimeType.mime) {
        res.mimeType = signature.mimeType.mime;
      }
      break;
    }
  }
  return res;
}
/**
 * 根据后缀名返回mime字符串
 * @param {string} ext 文件后缀名,不区分大小写
 * @returns {string} 
 */
const ext2mime = (ext) => {
  let res = MIME.getType(ext);
  if (res == null) {
    res = '';
  }
  return res;
}
/**
 * 根据mime类型返回拓展名
 * @param {string} mime 
 * @returns {string}
 */
const mime2ext = (mime) => {
  let res = '';
  res = MIME.getExtension(mime);
  if (res == null) {
    res = '';
  }
  return res;
}
/**
 * 根据文件路径获取拓展名
 * @param {string} path 文件路径
 * @return {string}
 */
const path2ext = (path) => {
  return Path.extname(path);
}
/**
 * 根据文件路径获取MIME类型
 * @param {string} path 文件路径
 * @returns {string}
 */
const path2mime = (path) => {
  return MIME.getType(Path.extname(path));
}

const isValidPath = (path) => {
  return /[<>"/?\\*|':]/.test(path);
}
const toValidPath = (path) => {
  return path.replace(/[<>"/?\\*|':]/g, ' ');
}
const isImageExt = (ext) => {
  return ['bmp', 'jpg', 'gif', 'jpeg', 'png'].indexOf(ext.toLowerCase()) !== -1;
}
const isFileExists = (path) => {
  return fs.existsSync(path) && !fs.lstatSync(path).isDirectory();
}
const isFolderExists = (path) => {
  return fs.existsSync(dir) && fs.lstatSync(dir).isDirectory();
}
const readTxt = (path) => {
  let res = '';
  if (isFileExists(path)) {
    try {
      res = fs.readFileSync(path, 'utf-8');
    }
    catch (e) {
      console.log('read error!');
    }
  }
  return res;
}
const writeTxt = (path, str) => {
  try {
    fs.writeFileSync(path, txt);
    return true;
  }
  catch (e) {
    return false;
  }
}
const addTxt = (path, str) => {
  try {
    fs.writeFileSync(path, txt, { flag: 'a+' });
    return true;
  }
  catch (e) {
    return false;
  }
}
const moveFile = (oldpath, newpath) => {
  let dir = path.dirname(newPath);
  try {
    if (!isFolderExists(dir)) {
      mkdirs(dir);
    }
    fs.renameSync(oldPath, newPath);
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }
}
const delFile = (path) => {
  try {
    if (isFileExists(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    return false;
  }
  return true;
}
const delFolder = (path) => {
  if (!isDirExists(path)) {
    return true;
  }
  let files = fs.readdirSync(path);//读取该文件夹
  try {
    files.forEach(function (file) {
      var stats = fs.statSync(path + '/' + file);
      if (stats.isDirectory()) {
        delFolder(path + '/' + file);
      } else {
        fs.unlinkSync(path + '/' + file);
      }
    });
    fs.rmdirSync(path);
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }
}
const clearEmptyFolder = (dir) => {
  let files = fs.readdirSync(dir);
  if (files.length === 0) {
    delFolder(dir);
  }
  for (let i = 0; i < files.length; i++) {
    let file = path.join(dir, files[i]);
    if (isFolderExists(file)) {
      clearEmptyFolder(file);
    }
  }
}
const mkdirs = (dir) => {
  if (dir instanceof Array) {
    dir = dir.join('/');
  }
  dir = dir.replace(/[/]+|[\\]+/g, '/');
  try {
    if (!fs.existsSync(dir)) {
      var pathtmp = '';
      dir = dir.split('/');
      dir.forEach(function (dirname) {
        pathtmp += pathtmp === '' ? dirname : '/' + dirname;
        if (false === isFolderExists(pathtmp)) {
          fs.mkdirSync(pathtmp);
        }
      });
    }
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
}
const eachAsync = async (dir, cb, filter) => {
  if (isFolderExists(dir)) {
    let files = fs.readdirSync(dir);
    for (let i = 0; i < files.length; i++) {
      let file = Path.join(dir, files[i]);
      if (isFolderExists(file)) {
        await eachAsync(file, cb, filter);
      } else {
        let ext = path2ext(file);
        if (filter && filter.indexOf(ext) === -1) {
          return;
        }
        await cb(file);
      }
    }
  }
}


module.exports = {
  getSignature,
  ext2mime,
  mime2ext,
  path2ext,
  path2mime,
  isImageExt,
  isFileExists,
  isFolderExists,
  readTxt,
  writeTxt,
  addTxt,
  moveFile,
  delFile,
  delFolder,
  clearEmptyFolder,
  mkdirs,
  eachAsync
};