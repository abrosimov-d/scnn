const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 1920, height: 1080,     webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    //mainWindow.setFullScreen(true);
    mainWindow.setMenu(null);
    mainWindow.webContents.openDevTools();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
