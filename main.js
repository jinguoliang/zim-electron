var {remote,ipcRenderer} = require('electron')
var {Menu, MenuItem, } = remote;

const tmpl =
[
  {
    label: 'App',
    submenu: [
      {
        label: 'About',
        click: function () {
          ipcRenderer.send('toggleVisible')
        }
      }
    ]
  }
];
var menu = Menu.buildFromTemplate(tmpl)
Menu.setApplicationMenu(menu)
