const db = require('../database/db');

exports.search = (req, res) => {
    db.query('SELECT * FROM `question` WHERE MATCH(title) AGAINST(? IN NATURAL LANGUAGE MODE) ', req.body.title, (error, result, fields) => {
        if (error) {
            console.log(error);
        } else {
            ret1 = JSON.parse(JSON.stringify(result));
            var payload = {
                return1: ret1
            }
            res.send(payload);
        }
    });
}