const { app, BrowserWindow, autoUpdater } = require('electron');
const path = require('path');

let curWindow;
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}
const { updateElectronApp } = require('update-electron-app')
updateElectronApp()

// /*New Update Available*/
// autoUpdater.on("update-available", (info) => {
//   curWindow.showMessage(`Update available. Current version ${app.getVersion()}`);
//   let pth = autoUpdater.downloadUpdate();
//   curWindow.showMessage(pth);
// });

// autoUpdater.on("update-not-available", (info) => {
//   curWindow.showMessage(`No update available. Current version ${app.getVersion()}`);
// });

// /*Download Completion Message*/
// autoUpdater.on("update-downloaded", (info) => {
//   curWindow.showMessage(`Update downloaded. Current version ${app.getVersion()}`);
// });

// autoUpdater.on("error", (info) => {
//   curWindow.showMessage(info);
// });

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  curWindow = mainWindow;

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
