const db = require('../database/db');

exports.askquestion = (req, res) => {

    var question = {
        title: req.body.title,
        body: req.body.body,
        code: req.body.code,
        noOfLikes: "0",
        dateadded: req.body.date
    }

    db.query('INSERT INTO question SET ?', question, (err, result, fields) => {
        if (err) {
            console.log("Here in insert \n" + err);
        }
    });

    for (x = 0; x <= req.body.tagArray.length - 1; x++) {
        var tagtitle = {
            tagtitle: req.body.tagArray[x]
        };

        db.query('INSERT IGNORE INTO mytag SET ?', tagtitle, (error, result, fields) => {
            if (error) {
                console.log("Here in ignore\n" + error);
            }
        });
    }

    db.query('SELECT questionID from question WHERE title = ?', req.body.title, (error, result, fields) => {
        if (error) {
            console.log(error);
        } else {
            ret = JSON.parse(JSON.stringify(result));
            for (x = 0; x <= req.body.tagArray.length - 1; x++) {
                db.query('SELECT tagID from mytag WHERE tagtitle = ?', req.body.tagArray[x], (error, result, fields) => {
                    if (error) {
                        console.log(error);
                    } else {
                        ret1 = JSON.parse(JSON.stringify(result));

                        var myArray = {
                            questionID: ret[0].questionID,
                            tagID: ret1[0].tagID
                        }
                        db.query('INSERT INTO questionandtag SET ? ', myArray, (error, myRes, fields) => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                });
            }
        }
    });
}