var express = require('express');
var OPC = new require('./opc');
var client = new OPC('localhost', 7890);

var app = express();

app.use(express.static('assets'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/accelerometer.html', function (req, res) {
   res.sendFile( __dirname + "/" + "accelerometer.html" );
})

app.get('/process_get', function (req, res) {
  response = req.query.target;
   target = parseInt(req.query.target, 10);
   x=0;
   console.log(response);
   res.sendFile( __dirname + "/" + "accelerometer.html" );
})

var target = 25, i=1, x=0;

function draw() {

  //if(x<1){

    for ( i = 0; i < 60; i++) {
      client.setPixel(i, 0,0,0);
    }

/*    for ( i = 0; i < target-2; i++) {
        client.setPixel(i, 255*.15, 255*.15, 255*.15);
    }*/
    
    
    //for ( i = target-2; i < target+3; i++) {
        //client.setPixel(i, 255, 128, 0);
        //console.log('on: '+i);

    client.setPixel(target, 255, 128, 0);
/*    setTimeout(function() { 
      client.setPixel(target-1, 255, 128, 0);
      client.setPixel(target+1, 255, 128, 0);
      client.writePixels();
    }, 800);
    setTimeout(function() { 
      client.setPixel(target-3, 255, 128, 0);
      client.setPixel(target+3, 255, 128, 0);
      client.writePixels();
    }, 1600);
    setTimeout(function() { 
      z=1;
      setInterval(function() { 
        for ( i = target-3; i < target+4; i++) {
          client.setPixel(i, 255*z, 128*z, 0*z);
          client.writePixels();
        }
        if(z===1){z=0.8} else{z=1};
        console.log("z: "+z);
      }, 500);
    }, 2500);*/


    //}

 /*  

  for ( i = target-5; i < target; i++) {
    client.setPixel(i, 255, 128, 0);
  }

    for ( i = target-6; i < target-5; i++) {
      client.setPixel(i, 255*.6, 128*.6, 0*.6);
    }
    
    for ( i = target; i < target+1; i++) {
      client.setPixel(i, 255*.6, 128*.6, 0*.6);
    }*/

    //client.setPixel(target, 255, 128, 0);

    client.writePixels();

    x=1;
  //}
}

setInterval(draw, 100);


var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
})