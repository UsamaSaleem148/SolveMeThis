const db = require('../database/db');

exports.useranswer = (req, res) => {
    var answer = {
        questionID: req.body.quesID,
        answerBody: req.body.answerBody,
        answerCode: req.body.answerCode,
        noOFLikes: "0",
        answerDate: req.body.date
    }
    db.query('INSERT INTO answer SET ?', answer, (err, result, fields) => {
        if (err) {
            console.log("Here in insert \n" + err);
        }
    });
}