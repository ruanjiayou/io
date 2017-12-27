const fileHeader = require('../index');
const assert = require('assert');

describe('测试header2ext()', function(){
    it('test', function(){
        assert.equal(fileHeader.header2ext('89504E47'), 'png');
        assert.equal(fileHeader.header2ext('00000000'), '');
    });
});