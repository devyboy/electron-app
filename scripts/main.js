const {app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

let win;

// Create the window and hide it

function createWindow() {
    win = new BrowserWindow({
        width: 588,
        height: 390,
        backgroundColor: '0FFF',
        icon: path.join(__dirname, "../img/icon.ico"),
        show: false,
        frame: false,
        resizable: false,
    });

// Load the HTML file

    win.loadURL(url.format({
        pathname: path.join(__dirname, "../index.html"),
        protocol: "file:",
        slashes: true
    }));

// Show the file and focus it once its done loading

    win.webContents.on('did-finish-load', ()=>{
        win.show();
        win.focus();
    });

// Opens dev tools

    //win.webContents.openDevTools();

// Removes the default menu

    win.setMenu(null);

// Sets window to null when closed    

    win.on("closed", () => {
        win = null;

    });
}

app.on("ready", createWindow);

// Keep app open in background on OSX 

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
});
