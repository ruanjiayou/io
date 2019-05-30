const path = require('path');
const FileHeader = require('../index');
const dir = path.join(__dirname, 'file-signature');
const assert = require('assert');

describe('根据文件头获取文件信息', function () {
  it('正常头和扩展名', async () => {
    let dll = FileHeader.getInfo(`${dir}/dll.dll`);
    assert.deepEqual(dll.extension, 'dll');
    let doc = FileHeader.getInfo(`${dir}/doc.doc`);
    assert.deepEqual(doc.extension, 'doc');
    let gif = FileHeader.getInfo(`${dir}/gif.gif`);
    assert.deepEqual(gif.extension, 'gif');
    let jpg = FileHeader.getInfo(`${dir}/jpg.jpg`);
    assert.deepEqual(jpg.extension, 'jpg');
    let ogg = FileHeader.getInfo(`${dir}/ogg.ogg`);
    assert.deepEqual(ogg.extension, 'ogg');
    let pdf = FileHeader.getInfo(`${dir}/pdf.pdf`);
    assert.deepEqual(pdf.extension, 'pdf');
    let png = FileHeader.getInfo(`${dir}/png.png`);
    assert.deepEqual(png.extension, 'png');
    let rar = FileHeader.getInfo(`${dir}/rar.rar`);
    assert.deepEqual(rar.extension, 'rar');
    let htpasswd = FileHeader.getInfo(`${dir}/htpasswd`);
    assert.deepEqual(htpasswd.extension, '');
  });
})

