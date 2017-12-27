const fs = require('fs');
const Path = require('path');
const MIME = require('mime');
const data = require('./data');

/**
 * 根据文件路径返回文件的后缀名,文件不存在或header不是预期的则返回空字符串
 * @param {string} path 文件路径
 * @returns {string} 
 */
function extension(path) {
    const fd = fs.openSync(path, 'r');
    let res = '';
    if (fs.existsSync(path) && !fs.lstatSync(path).isDirectory()) {
        let buff = new Buffer(1);
        let headerHexStr = '';
        let stop = false;
        let pos = 0;
        while (stop==false) {
            fs.readSync(fd, buff, 0, 1, pos);
            headerHexStr += buff[0].toString(16).toUpperCase();
            pos++;
            stop = true;
            for (let k of data.keys()) {
                if (k.startsWith(headerHexStr)) {
                    stop = false;
                    res = header2ext(k);
                }
            }
        }
    }
    return res;
}

/**
 * 根据后缀名返回mime字符串
 * @param {string} ext 文件后缀名,不区分大小写
 * @returns {string} 
 */
function ext2mime(ext) {
    let res = MIME.getType(ext);
    if (res == null) {
        res = '';
    }
    return res;
}

/**
 * 根据后缀名返回文件头hex字符串
 * @param {string} ext 文件后缀名,不区分大小写
 * @returns {string} 
 */
function ext2header(ext) {
    let res = '';
    ext = ext.toLowerCase();
    for (let k of data.keys()) {
        if (ext === data.get(k)) {
            res = k;
            break;
        }
    }
    return res;
}

/**
 * 根据文件头hex字符串返回后缀名
 * @param {string} header 文件头hex字符串
 */
function header2ext(header) {
    let res = data.get(header.toUpperCase());
    if(res == null){
        res = '';
    }
    return res;
}

function mime2ext(mime) {
    let res = '';
    res = MIME.getExtension(mime);
    if (res == null) {
        res = '';
    }
    return res;
}

module.exports = {
    extension,
    ext2mime,
    ext2header,
    header2ext,
    mime2ext
}