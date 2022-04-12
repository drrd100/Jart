const express = require('express');
const router = express.Router();
const db = require('../config/db');
const util = require('util');

router.get('/register', (req,res) => {
    db.query("select * from users", (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
            res.send(err);
        }
    })
});

router.post('/register', (req, res) => {
    console.log(`= = = > req : ${util.inspect(req)}`)
   	// id, password 변수로 선언
    const id = req.query.id
    const password = req.query.password
    // 입력된 id 와 동일한 id 가 mysql 에 있는 지 확인
    const sql1 = 'SELECT COUNT(*) AS result FROM users WHERE id = ?'
    db.query(sql1, id, (err, data) => {
        if(!err) {
        	// 결과값이 1보다 작다면(동일한 id 가 없다면)
            if(data[0].result < 1) {
                res.send({ 'msg': '입력하신 id 가 일치하지 않습니다.'})
            } else { // 동일한 id 가 있으면 비밀번호 일치 확인
                const sql2 = `SELECT 
                                CASE (SELECT COUNT(*) FROM users WHERE id = ? AND password = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT id FROM users WHERE id = ? AND password = ?)
                                END AS id
                                , CASE (SELECT COUNT(*) FROM users WHERE id = ? AND password = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT password FROM users WHERE id = ? AND password = ?)
                                END AS password`;
                // sql 란에 필요한 parameter 값을 순서대로 기재
                const params = [id, password, id, password, id, password, id, password]
                db.query(sql2, params, (err, data) => {
                    if(!err) {
                        res.send(data[0])
                    } else {
                        res.send(err)
                    }
                })
            }
        } else {
            res.send(err)
        }
    })
});

module.exports = router;