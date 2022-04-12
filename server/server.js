// express 모듈 불러오기
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');


// express 객체 생성
const app = express();
const api = require('./api/api');
const users = require('./controller/users');

app.use('/api', api);
app.use('/users',users);
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now()
  });
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`서버가동 ${port}`);
});

