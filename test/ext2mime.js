const fileHeader = require('../index');
const assert = require('assert');

describe('测试ext2mime()', function () {
    it('test', function () {
        assert.equal(fileHeader.ext2mime('png'), 'image/png');
        assert.equal(fileHeader.ext2mime('pngxx'), '');
    });
});