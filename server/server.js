// express 모듈 불러오기
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');


// express 객체 생성
const app = express();
const api = require('./api/api');
const review = require('./api/review');
const users = require('./controller/users');

app.use('/api', api);
app.use('/review', review);
app.use('/users',users);
app.use(bodyParser.json());
app.use(cors());

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`서버가동 ${port}`);
});

