/**
  创建一个window, 并加载index.html
*/
var {
  app,
  BrowserWindow,
} = require('electron')

const ipc = require('electron').ipcMain

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
  })
  console.log(`file://${__dirname}/index.html`)
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.openDevTools();
  ipc.on('toggleVisible', function () {
    mainWindow.hide()
  })
})
