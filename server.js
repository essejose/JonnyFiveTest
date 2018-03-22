var express = require('express');
var five = require('johnny-five');

var app = express();

var board = new five.Board({port:"COM3"});



board.on("ready",function(){
    led = new five.led(13);

})

app.post('/api/led/ligar', function(req,res){
    led.on();
    res.send("Led ligado");

});


app.post('/api/led/desligar', function(req,res){
    led.off();
    res.send("Led ligado");

});

app.listen(3000);
console.log('Servidor rodando')