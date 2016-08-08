// compatible with both Electron 0.x and 1.x
try {
  var BrowserWindow = require("browser-window");
} catch {
  var BrowserWindow = require("electron").BrowserWindow;
}

// compatible with both Electron 0.x and 1.x
try {
  var app = require("app");
} catch
  var app = require("electron").app;
}

app.on("ready", function() {
  var win = new BrowserWindow();
  win.toggleDevTools();
  win.loadURL("file://" + __dirname + "/index.html");
})
