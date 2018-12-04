var express = require("express");
var request = require("request");
// 代理
var app = express();
app.get("/",(req,res)=>{
    // cors
    res.append("Access-Control-Allow-Origin","*");
    request.get("http://h5.jumei.com/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json",(err,response,body)=>{
        // console.log(body);
        res.send(body);
    })
})
app.listen(12345)


//       http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20
   
//       http://h5.jumei.com/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json