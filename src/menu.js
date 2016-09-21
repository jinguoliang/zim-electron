// 菜单
var {remote,ipcRenderer} = require('electron')
var {Menu, MenuItem, dialog} = remote;
var signals = require('./ipcsignal.js')
var markdown = require('./markdown.js')

function createNewFile() {
  var option =
            { title:"Open",
              properties: ['openDirectory'],
              defaultPath:'~',
            };
  dialog.showOpenDialog(option);
}

function openFile() {
  var filter = [
    {name: 'Markdown', extensions: ['md']},
  ];
  console.log(filter)
  console.log("hello " + markdown.MARKDOWN_EXT)
  var option =
            { title:"Open",
              defaultPath:'~',
              filters: filter,
            };

  dialog.showOpenDialog(option, function (fileName) {
    console.log(fileName);
    ipcRenderer.send(signals.openfile, fileName[0]);
  });
}

const tmpl =
[
  {
    label: '文件',
    submenu: [
      {
        label: '新建',
        click: function () {
          // ipcRenderer.send(signals.new-file)
          createNewFile()
        }
      },
      {
        label: '打开',
        click: function () {
          // ipcRenderer.send(signals.new-file)
          openFile()
        }
      }
    ]
  },
  {
    label: '帮助',
    submenu: [
      {
        label: '关于',
        click: function () {
          ipcRenderer.send(signals.about)
        }
      }
    ]
  }
];
var menu = Menu.buildFromTemplate(tmpl)
Menu.setApplicationMenu(menu)
