var Application = require('spectron').Application
var assert = require('assert')

var app_path = 'MyApp-linux-x64/MyApp'

console.log(process.cwd())

describe('application launch', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: app_path
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 2) // 菜单也算一个?
    })
  })
})
