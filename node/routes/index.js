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
//添加数据
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
//获取数据
router.get("/all",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    con.query("SELECT * FROM news",function (err, rows, fields) {
        res.send(rows)
    })
});
//删除数据
router.post("/del",function (req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    con.query(`DELETE FROM news WHERE id=${req.body.id}`,function () {
        res.send("删除成功")
    })
});
//修改数据
router.post("/make",function (req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    var title=req.body.a;
    var date=req.body.b;
    var peo=req.body.c;
    var nei=req.body.d;
    var xuanze=req.body.e;
    var id=req.body.f;
    console.log(req.body)
    con.query(`UPDATE news SET title='${title}',time='${date}',people='${peo}',content='${nei}',uid='${xuanze}' WHERE id=${id}`,function () {
        res.send("修改成功")
    })
});
module.exports = router;
