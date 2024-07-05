"use strict";


const users = {
    id: ["test", "나개발", "eunji"],
    psword: ["1234", "1234", "2134"],
};


//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포홤될 경우 제대로 인식 되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended:true}));


app.use("/", home); //use -> 미들웨어를 등록해주는 메서드

module.exports = app;




// http방식 
//const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type" : "text/hml: charset=utf-8"});
//     console.log(req.url);     //req.url = 루트 경로 이후의 화면
// });

// app.listen(3001, () => {
//     console.log("서버 가동"); 
// });