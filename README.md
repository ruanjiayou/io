```
原先把包发到了npm header-helper,现在git中改名为file-info了,最后又改为了io
```

## TODO:
signature-data的完善和测试的补充
格式应该是
{
  hex: 'FFD8FFDB',
  extension: 'jpg',
  type: 'image',
  description: ''
}
要做的是:filepath或buffer->得到拓展名.剩下的交给mime模块
Trailer
http://www.garykessler.net/library/file_sigs.html 
https://www.cnblogs.com/WangAoBo/p/6366211.html
https://www.file-extensions.org/extensions/common-file-extension-list