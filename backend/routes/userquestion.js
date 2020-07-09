const db = require('../database/db');

exports.userquestion = (req, res) => {
    db.query('SELECT * from question WHERE title = ?', req.body.title, (error, result, fields) => {
        if (error) {
            console.log(error);
        } else {
            ret1 = JSON.parse(JSON.stringify(result));
            db.query('SELECT * from answer WHERE questionID = ?', ret1[0].questionID, (error, result, fields) => {
                if (error) {
                    console.log(error);
                } else {
                    ret2 = JSON.parse(JSON.stringify(result));
                    var payload = {
                        return1: ret1[0],
                        return2: ret2
                    }
                    res.send(payload);
                }
            });
        }
    });
}