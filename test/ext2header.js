const fileHeader = require('../index');
const assert = require('assert');

describe('测试ext2header()', function(){
    it('test', function(){
        assert.equal(fileHeader.ext2header('png'), '89504E47');
        assert.equal(fileHeader.ext2header('pngxx'), '');
    });
});