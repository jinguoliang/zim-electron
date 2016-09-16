var assert = require('assert')
var markdown = require('../../src/markdown.js')
var fs = require('fs');

var testMd = 'test/data/test_has_front';
var testSaveMd = 'test/data/testSaveMd';


describe('markdown', function () {
  describe('load', function () {
    it('async load md with yaml', function (done) {
    	markdown.load(testMd, function(data) {
        assert.equal(data.title, 'hello')
        done()
      })
    })
    it('async save md with yaml', function (done) {
      var data = {
        title: "lala",
        _content: "##helloworld"
      };
      markdown.save(testSaveMd, data,  function (ok) {
        assert.equal(ok, true)
        markdown.load(testSaveMd, function(data) {
          assert.equal(data.title, 'lala')
          done()
        })
      })
    })
    it('async save md with yaml no callback', function (done) {
      var data = {
        title: "lala",
        _content: "##helloworld"
      };
      markdown.save(testSaveMd, data);
      assert.ok(true)
      done()
    })
  })
})
