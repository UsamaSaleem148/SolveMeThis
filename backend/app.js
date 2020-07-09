const express = require("express");
const app = express();
const cors = require('cors');

const askquestion = require('./routes/askQuestion');
const userquestion = require('./routes/userquestion');
const useranswer = require('./routes/useranswer');
const search = require('./routes/search');

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());

app.post('/askquestion', askquestion.askquestion);
app.post('/userquestion', userquestion.userquestion);
app.post('/useranswer', useranswer.useranswer);
app.post('/search', search.search);

app.listen(app.get('port'));