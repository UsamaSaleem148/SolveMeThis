import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import axios from 'axios';
import NavigationBar from './navigationbar';
import Footer from './footer';
import '../App.css';

class UserQuestion extends React.Component{

    constructor(props){
        super(props)

        this.state = ({
            title: "",
            body: "",
            code: "",
            date: "",
            result: "",
            quesID: "",
            answerBody: "",
            answerCode: "",
            noOfQuesLikes: "",
            allAnswers: []
        })
    }

    getCurrentDate = (separator='') => {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
        }

        handleChange = (event) => {
            const target = event.target;
            const name = target.name;
            const value = target.value;
        
            this.setState({
              [name]: value
            })
          }

    answerClick = (e) => {
        e.preventDefault();

        const payload = {
            answerBody: this.state.answerBody,
            answerCode: this.state.answerCode,
            quesID: this.state.quesID,
            date: this.getCurrentDate("/")
        }
        axios({
            url: 'http://localhost:5000/useranswer',
            method: 'POST',
            data: payload
        })
        .then(() => {
            alert("Added");
        })
        .catch((err) => {
            console.log(err);
        })

        this.componentDidMount();
    }

    componentDidMount(){
        
        const { match: { params } } = this.props;
        axios({
            url: 'http://localhost:5000/userquestion',
            method: 'POST',
            data: params
        })
        .then((response) => {
            console.log(response)
            this.setState({
                title: response.data.return1.title,
                body: response.data.return1.body,
                code: response.data.return1.code,
                date: response.data.return1.dateadded,
                quesID: response.data.return1.questionID,
                noOfQuesLikes: response.data.return1.noOfLikes,
                allAnswers: response.data.return2
            })
        })
        .catch((err) => {
            console.log(err);
        })

    }

    render(){
        return(
            <div>
                <NavigationBar />
                <div className="container-fluid">

                    {/* Question */}

                    <div className="row quesRow">
                        <div className="col-lg-2 col-md-1 col-0"></div>
                        <div className="col-lg-7 col-md-10 col-12">
                            <h2 className="quesTitle">{this.state.title}</h2>
                            <p className="quesBody">{this.state.body}</p>
                            {
                                this.state.code === "" ? "" : <p className="quesCode">{this.state.code}</p>
                            }
                            <p className="askedON float-right">Asked On: <span className="askedDate">{this.state.date}</span></p>
                            <div className="likes">
                                <span><FontAwesomeIcon icon={faThumbsUp}/></span>
                                <p className="noOfLikes">{this.state.noOfQuesLikes}</p>
                                <span><FontAwesomeIcon icon={faThumbsDown}/></span>
                            </div>
                            <div><hr /></div>
                        </div>
                        <div className="col-lg-3 col-md-1 col-0"></div>
                    </div>

                    {/* Answers */}

                    <div className="row answerFieldRow">
                        <div className="col-lg-2 col-md-1 col-0"></div>
                        <div className="col-lg-7 col-md-10 col-12">
                        <h3>{this.state.allAnswers.length} Answers</h3>

                        {
                            this.state.allAnswers.map((ans, i) => {
                                if(ans.answerCode !== ""){
                                return(
                                    <div key={ans.answerID}>
                                    <p className="answerBody">{ans.answerBody}</p>
                                    <p className="answerCode">{ans.answerCode}</p>
                                    <p className="askedON float-right">Answered On: <span className="askedDate">{ans.answerDate}</span></p>
                                    <div className="likes">
                                        <span><FontAwesomeIcon icon={faThumbsUp}/></span>
                                        <p className="noOfLikes">{ans.noOFLikes}</p>
                                        <span><FontAwesomeIcon icon={faThumbsDown}/></span>
                                    </div>
                                    <hr />
                                    </div>
                                )}
                                else{
                                    return(
                                    <div key={ans.answerID}>
                                    <p className="answerBody">{ans.answerBody}</p>
                                    <p className="askedON float-right">Answered On: <span className="askedDate">{ans.answerDate}</span></p>
                                    <div className="likes">
                                        <span><FontAwesomeIcon icon={faThumbsUp}/></span>
                                        <p className="noOfLikes">{ans.noOFLikes}</p>
                                        <span><FontAwesomeIcon icon={faThumbsDown}/></span>
                                    </div>
                                    <hr />
                                    </div>
                                )
                                }
                                })
                        }
                        </div>
                        <div className="col-lg-3 col-md-1 col-0"></div>
                    </div>

                    {/* Answer Field */}

                    <div className="row answerFieldRow">
                        <div className="col-lg-2 col-md-1 col-0"></div>
                        <div className="col-lg-7 col-md-10 col-12">
                            <label><b>Answer Here:</b></label>
                            <div className="form-group">
                                <textarea value={this.state.answerBody} onChange = {this.handleChange} type="text" rows="5" id="answerBody" name="answerBody" className="form-control" placeholder="Explain your answer!"/>
                            </div>
                            <div className="form-group">
                                    <label htmlFor="answerCode"><b>Code</b></label>
                                    <textarea value={this.state.answerCode} onChange = {this.handleChange} type="text" rows="5" id="answerCode" name="answerCode" className="form-control" placeholder="Enter code if any!"/>
                            </div>
                            <button onClick = {this.answerClick} type="button" className="btn btn-secondary float-right">Submit Your Answer!</button>
                        </div>
                        <div className="col-lg-3 col-md-1 col-0"></div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default UserQuestion;