import React from 'react';
import axios from 'axios';
import NavigationBar from './navigationbar';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

class Search extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            allSearch: []
        }
    }


    onClick = (event) => {
        window['location'].assign(`/${event.target.dataset.user}`)
      }

    componentDidMount(){

        const {match: { params }} = this.props;
        console.log(params.search);

        if(params.search !== ""){
            const payload = {
                title: params.search,
            }
            axios({
                url: 'http://localhost:5000/search',
                method: 'POST',
                data: payload
            })
            .then((response) => {
                console.log(response.data.return1.length);
                this.setState({
                    allSearch: response.data.return1
                })
            })
            .catch((err) => {
                console.log(err);
            });
        }
        else{
            alert("Kindly enter the specified fields");
        }
    }

    render(){
        const {match : {params}} = this.props;
        return(
            <div>
                <NavigationBar />
                <div className="container-fluid">
                    <div className="row searchDiv">
                    <div className="col-lg-2 col-md-1 col-0"></div>
                    <div className="col-lg-7 col-md-10 col-12">
                        <p className="searchResultFor">Search Result For: "<span>{params.search}</span>"</p>
                    {
                            this.state.allSearch.map((ques, i) => {
                                return(
                                    <div key={ques.answerID}>
                                    <p data-user={ques.title} className="quesTitle" onClick={this.onClick}>{ques.title}</p>
                                    <p className="quesBody">{ques.body}</p>
                                    <p className="askedON float-right">Asked On: <span className="askedDate">{ques.dateadded}</span></p>
                                    <div className="likes">
                                        <span><FontAwesomeIcon icon={faThumbsUp}/></span>
                                        <p className="noOfLikes">{ques.noOfLikes}</p>
                                        <span><FontAwesomeIcon icon={faThumbsDown}/></span>
                                    </div>
                                    <hr />
                                    </div>
                                )
                                })
                        }
                    </div>
                    <div className="col-lg-2 col-md-1 col-0"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-1 col-0"></div>
                        <div className="col-lg-7 col-md-10 col-12"><p>Didn't find what you are looking for. <span><a href ="/">Ask Here!</a></span></p></div>
                        <div className="col-lg-2 col-md-1 col-0"></div>
                    </div>
                </div>
                <Footer />
                </div>
        )
    }
}

export default Search;