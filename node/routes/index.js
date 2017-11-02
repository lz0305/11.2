var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var con=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"jieke"
});

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  console.log(req.body)
    var title=req.body.a;
    var date=req.body.b;
    var peo=req.body.c;
    var nei=req.body.d;
    var xuanze=req.body.e;
  con.query(`INSERT INTO news(uid,title,time,people,content) VALUES(${xuanze},'${title}','${date}','${peo}','${nei}')`,function () {
      res.send("成功了")
  })
});
router.get("/all",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*")
    con.query("SELECT uid,title,time FROM news",function (err, rows, fields) {
        res.send(rows)
    })
})

module.exports = router;
