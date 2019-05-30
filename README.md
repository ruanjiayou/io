# header-helper
[![npm](https://img.shields.io/npm/dm/header-helper.svg)](https://npmjs.org/package/header-helper)
[codecov-image](https://img.shields.io/codecov/c/github/ruanjiayou/header-helper.svg?style=flat-square)
[codecov-url](https://codecov.io/gh/ruanjiayou/header-helper)
[![Build Status](https://travis-ci.org/ruanjiayou/header-helper.svg)](https://travis-ci.org/header-helper)
> 项目中的扩展名不带前面的点(test.jpg => 拓展名jpg)

## 安装
`npm i header-helper -S`

## 使用
```js
const headerhelper = require('header-helper');
const info = headerHelper.getInfo('path-to-file');
/**
 * info: 
 * {
 *   extension: 'jpg',
 *   mime: 'image/jpeg',
 *   type: 'image',
 *   description: 'JPEG images'
 * }
 */
```

## 其他成员
- ext2mime()
- mime2ext()
- path2ext()
- path2mime()
- extensions: 所有extension的Set集合

## TODO:
- file-signature完善,extensions拆分为单个

## 参考
http://www.garykessler.net/library/file_sigs.html 
https://www.cnblogs.com/WangAoBo/p/6366211.html
https://www.file-extensions.org/extensions/common-file-extension-list