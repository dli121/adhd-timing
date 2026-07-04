const { app, BrowserWindow, nativeTheme } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1080,
    height: 740,
    minWidth: 720,
    minHeight: 560,
    title: "工作计时",
    backgroundColor: nativeTheme.shouldUseDarkColors ? "#111318" : "#f3f4f6",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
