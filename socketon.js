var app=require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//app.get('/Sotuken_node/', function(req, res){
  //res.sendfile('index.html');
//});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.sockets.on('connection', function (socket){
 
  socket.on('test', function (msg){ 		
	console.log('Listen!');
    });
});
