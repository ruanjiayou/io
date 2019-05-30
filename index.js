const fs = require('fs');
const Path = require('path');
const MIME = require('mime');
const SignatureDatas = require('./signature-data');
const extensions = new Set();

SignatureDatas.forEach(data => {
  data.extensions.forEach(extension => {
    extensions.add(extension);
  });
});

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
const getInfo = (filepath) => {
  let res = {
    extension: '',
    description: '',
    mime: 'application/octet-stream',
    type: 'other'
  };
  let ext = path2ext(filepath)
  let fileHeader = _getFileHeader(filepath);
  for (let i = SignatureDatas.length - 1; i >= 0; i--) {
    let signature = SignatureDatas[i];
    if (_bufferIsEqual(fileHeader.slice(0, signature.byteSeq.length), signature.byteSeq)) {
      res.extension = signature.extensions.indexOf(ext) != -1 ? ext : signature.extensions[0];
      res.description = signature.description;
      if (signature.mime) {
        res.mime = signature.mime;
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
  return Path.extname(path).substr(1);
}
/**
 * 根据文件路径获取MIME类型
 * @param {string} path 文件路径
 * @returns {string}
 */
const path2mime = (path) => {
  return MIME.getType(Path.extname(path));
}

module.exports = {
  getInfo,
  ext2mime,
  mime2ext,
  path2ext,
  path2mime,
  extensions
};