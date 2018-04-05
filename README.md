# header-helper
就方法不行,改用参考:https://github.com/leahciMic/file-signature

# 有时候靠后缀名识别文件比靠谱.根据文件头识别文件
- fileHeader.extension(path) 根据文件路径返回后缀名
- fileHeader.ext2mime(ext)   根据后缀名返回mime类型
- fileHeader.ext2header(ext) 根据后缀名返回文件头
- fileHeader.header2ext(header)
- fileHeader.mime2ext(mime)
```
fileHeader.extention('d:/test.png')  ---> 'png'
fileHeader.ext2mime('png') ---> 'image/png'
fileHeader.ext2header('png') ---> '89504E47'
fileHeader.header2ext('FFD8FF') ---> 'jpg'
fileHeader.mime2ext('image/png') --> 'png'
```
安装及使用
```
npm install header-helper -s

const fileHeader = requier('header-helper');
fileHeader.extension('d:/website/package.json')
```
## TODO:
signature-data的完善和测试的补充