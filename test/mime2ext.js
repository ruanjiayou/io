const fileHeader = require('../index');
const assert = require('assert');

describe('测试mime2ext()', function () {
    it('test', function () {
        assert.equal(fileHeader.mime2ext('image/png'), 'png');
        assert.equal(fileHeader.mime2ext('pngxx'), '');
    });
});