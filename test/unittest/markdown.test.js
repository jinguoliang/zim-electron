var assert = require('assert')
var markdown = require('../../src/markdown.js')
var fs = require('fs');


describe('markdown', function () {
  it('load', function (done) {
  	markdown.load('test/data/test_has_front', function(data) {
      assert.equal(data.title, 'hello hello')
      console.log(data._content)
      done()
    })
  })
})
