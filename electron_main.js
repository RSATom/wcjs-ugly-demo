// compatible with both Electron 0.x and 1.x
try {
  var BrowserWindow = require("browser-window");
} catch(err) {
  var BrowserWindow = require("electron").BrowserWindow;
}

// compatible with both Electron 0.x and 1.x
try {
  var app = require("app");
} catch(err) {
  var app = require("electron").app;
}

if(process.platform == 'win32')
  process.env['VLC_PLUGIN_PATH'] = require('path').join(__dirname, 'node_modules/webchimera.js/plugins');

app.on("ready", function() {
  var win = new BrowserWindow({
      webPreferences: {
          nodeIntegration: true
      }
  });
  win.toggleDevTools();
  win.loadURL("file://" + __dirname + "/index.html");
})
