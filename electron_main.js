var BrowserWindow = require('electron').BrowserWindow
var app = require('electron').app

app.on("ready", function() {
  var win = new BrowserWindow()
  win.toggleDevTools()
  win.loadURL("file://" + __dirname + "/index.html")
})
