'use strict';

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: fix
 * Filename: index.js by jimmie
 * Created: 2017-05-29 @ 15:16
 * Product of: WebStorm
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
 * Created by jimmie on (2017-05-29).
 *
 * Repository link: http://jimmie@gitlab.localdomain/connectiontool/fix.git
 */

/**
 * DOING: Import required libraries
 * here to separate from the rest of the code.
 */
const Koa = require('koa');
const IO = require('socket.io');
const http = require('http');


const app = new Koa();


/**
 * Server
 * @type {number}
 */
let server = http.createServer(app.callback());
let port = 3000;
let host = 'localhost';

app.use(require('koa-static')('./public'));

server.on('error',(error) => {
    console.log(error);
});

server.listen(port, host, () => {
    console.log('server listening on http://' + host + port);
});


/**
 * Socket
 */
const io = new IO({
   //namespace : '/'
});

const socket = io.listen(server);

let options = {
    // add any socket opts here
};

socket.on('connection', (sock) => {
    console.log('connected to socket from server');

    sock.on('booger', () => {
       console.log('ate a booger on the server');
    });

    sock.on('disconnect', () => {
        console.log('disconnected from socket on the server');
    });
});


