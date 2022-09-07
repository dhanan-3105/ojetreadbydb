var mysql = require('mysql');
var data="";
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.setHeader('content-type','application/json');
   res.setHeader('Access-Control-Allow-Origin', 'http://192.168.99.100:9000/listemployees');  
   res.setHeader('Access-Control-Allow-Origin', 'http://192.168.99.100:8000');  

   var con = mysql.createConnection({
    host: "172.100.100.100",
    user: "root",
    password: "admin",
    database: "pythonlogin"
   });
  con.connect(function(err) {
  if (err) throw err;
    con.query("SELECT * FROM accounts", function (err, result, fields) {
    if (err) throw err;
     data=JSON.stringify(result); 
     console.log(data);
	 res.end (data.toString());
  });
  });
    

   });


var server = app.listen(9000, "0.0.0.0",function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s",host, port);

})
