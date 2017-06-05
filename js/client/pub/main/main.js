"use strict";

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: memory
 * Filename: main.js by jimmie
 * Created: 2017-05-31 @ 21:09
 * Product of: Memory
 * // -------------------------------------------------
 * Make sure this file is part of its proper namespace
 * and project before moving on.
 * // -------------------------------------------------
 * Code-tags conventionally should be used (See below) :
 * TODO - Something that someone need to do.
 * DOING - Self remind for what you are doing.
 * CONSIDER - Reminder to consider a change or addition.
 * BUG - The below section of a code cause a bug.
 * FIXME - The below section of code need to be fixed.
 * HACK - The below section of code is a workaround.
 * XXX - Any notation important enough to consider implementing.
 * CLARIFY - Very incomprehensible section of code below.
 *
 * Created by jimmie on (2017-05-31).
 *
 * Repository link: https://github.com/jimmiehansson/memory.git
 */

/**
 * DOING: Only legacy/non-custom libraries
 * imported here.
 */
//require('@glimpse/glimpse').init();
const electron = require("electron");
const {app, BrowserWindow} = electron;
const path = require("path");
const url = require("url");

let win;

app.on("ready", () => {

    /**
     * DOING: Pluck width and height of the primary display
     * to launch the window in proper size.
     * See width, minWidth, height, minHeight
     * New since version Electron 1.6.2 API
     */
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;

    win = new BrowserWindow({
        title: "Memorinja (Memory game)",
        minWidth: 1024,
        minHeight: 650,
        width: 1024, //width * 0.4,
        height: 650,
        resizable: true,
        frame: true,
        transparent: false,
        vibrancy: "dark",
        skipTaskbar: true,
        movable: true,
        kiosk: false,
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    }));

    /**
     * CONSIDER: Enable the developer tools
     * at launch by default.
     */
    //win.webContents.openDevTools();

    win.on("closed", () => {
        win = null;
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});