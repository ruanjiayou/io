const fileHeader = require('../index');
const assert = require('assert');
const path = require('path');

describe('测试extension()', function () {
    it('test', function () {
        let ext = fileHeader.extension('/Users/emcoo-17/Desktop/wechatimg182_720.jpg');
        assert.equal(ext, 'jpg');
    });
});