const express = require('express');
const router = express.Router();
const db = require('../config/db');
const util = require('util');

router.post('/login', (req, res) => {
db((conn) => {
    console.log("로그인시작")
    const id = req.query.id
    const password = req.query.password
    // 입력된 id 와 동일한 id 가 mysql 에 있는 지 확인
    const sql1 = 'SELECT COUNT(*) AS result FROM users WHERE id = ?'
    conn.query(sql1, id, (err, data) => {
        console.log("로그인 쿼리시작")
        if(!err) {
            console.log("쿼리연결 성공")
            if(data[0].result < 1) {
                console.log("로그인 아이디 검사 성공")
                res.send({ 'msg': '입력하신 id 가 일치하지 않습니다.'})
            } else {
                const sql2 = `SELECT 
                                CASE (SELECT COUNT(*) FROM users WHERE id = ? AND password = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT id FROM users WHERE id = ? AND password = ?)
                                END AS id
                                , CASE (SELECT COUNT(*) FROM users WHERE id = ? AND password = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT password FROM users WHERE id = ? AND password = ?)
                                END AS password`;
                const params = [id, password, id, password, id, password, id, password]
                conn.query(sql2, params, (err, data) => {
                    console.log("비밀번호 쿼리시작")
                    if(!err) {
                        res.send(data[0])
                        console.log("비밀번호 확인 로그인성공")
                    } else {
                        res.send(err)
                        console.log("비밀번호 틀림 로그인실패")
                    }
                })
            }
        } else {
            console.log("쿼리실패")
            res.send(err)
        }
    })
    conn.release();
    })
});

router.post('/register', (req, res) => {
    // console.log(`= = = > req : ${util.inspect(req)}`)
    const id = req.query.id
    const name = req.query.name
    const password = req.query.password
    const sql1 = "INSERT INTO users(id,name,password) VALUES(?,?,?);";
    const params = [id, name, password]

    db((conn) => {
        conn.query(sql1, params, (err) => {
            console.log("쿼리시작")
            if(!err) {
                console.log("가입성공")
                res.send({success: true})
            } else {
                res.send({err:"동일한 아이디가 있습니다."})
                console.log("동일한 아이디가 있습니다.")
            }
        })
        conn.release();
    });
});

// function handleDisconnect() {
//     db.connect(function(err) {              
//       if(err) {                                     
//         console.log('error when connecting to db:', err);
//         setTimeout(handleDisconnect, 2000); 
//       }                                     
//     });                                     
                                            
//     db.on('error', function(err) {
//       console.log('db error', err);
//       if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
//         handleDisconnect();                         
//       } else {                                      
//         throw err;                                  
//       }
//     });
//   }
  
//   handleDisconnect();

module.exports = router;