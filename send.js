var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var socket = io.connect('http://172.0.0.1:3000');

socket.emit('test');
console.log("test has been sent.")
