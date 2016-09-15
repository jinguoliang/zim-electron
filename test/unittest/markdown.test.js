var assert = require('assert')

var fs = require('fs');
var front = require('hexo-front-matter');

describe('hexo-front-matter', function () {
  it('parse header of md file', function () {
 	var data = fs.readFileSync('test/data/test_has_front.md', 'utf-8');
	d = front.parse(data);
	// assert.equal(d.title, '[hello <hello')
	assert.equal(d.title, 'hello hello')
  })
})
