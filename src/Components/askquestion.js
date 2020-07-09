import React from 'react';
import axios from 'axios';
import '../App.css';

class Questionform extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            title: "",
            body: "",
            code: "",
            tags: "",
            tagArray: [],
            disabled: false
        }
        
    }

    

    getCurrentDate = (separator='') => {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
        }

    removeTags = (indexToRemove) => {
        console.log(indexToRemove);
        this.setState({
        tagArray: ([...this.state.tagArray.filter((_, index) => index !== indexToRemove)]),
        disabled: false
        })
	}

    addTags = (event) => {
        if(this.state.tagArray.length !== 5){
            if(event.key === "Enter"){
            this.setState({
                tagArray: ([...this.state.tagArray, event.target.value]),
            });
            event.target.value = "";
        }
    }
    else{
        event.target.value = "";
        this.setState({
            disabled: true
        })
    }
}
    
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        })
      }

      sendingData = (e) => {
            e.preventDefault();

            if(this.state.title !== "" && this.state.body !== "" && this.state.tagArray.length === 5){
                const payload = {
                    title: this.state.title,
                    body: this.state.body,
                    code: this.state.code,
                    tagArray: this.state.tagArray,
                    date: this.getCurrentDate("/")
                }
                axios({
                    url: 'http://localhost:5000/askquestion',
                    method: 'POST',
                    data: payload
                })
                .then(() => {
                    console.log("Hello");
                })
                .catch((err) => {
                    console.log(err);
                });
                
                window['location'].assign(`/${this.state.title}`)
                
            }
            else{
                alert("Kindly enter the specified fields");
            }
      }
      
        render(){
            return(
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-1 col-0"></div>
                        <div className="col-lg-8 col-md-10 col-12">
                            <h2 className="askForSolutionHeading">Ask for the solution!</h2>
                        </div>
                        <div className="col-lg-2 col-md-1 col-0"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-1 col-0"></div>
                        <div className="col-lg-8 col-md-10 col-12 askForSolutionForm">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="title"><b>Title </b><span>**</span></label>
                                    <input value={this.state.title} onChange = {this.handleChange} type="text" id="title" name="title" className="form-control" placeholder="Title for the question" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="body"><b>Description </b><span>**</span></label>
                                    <textarea value={this.state.body} onChange = {this.handleChange} type="text" rows="10" id="body" name="body" className="form-control" placeholder="Add a suitable description" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="code"><b>Code</b></label>
                                    <textarea value={this.state.code} onChange = {this.handleChange} type="text" rows="5" id="code" name="code" className="form-control" placeholder="Enter code if any!"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tags"><b>Tags </b><span>** (Upto 5 Tags)</span></label>
                                    <input disabled = {this.state.disabled} onKeyUp={this.addTags} onChange = {this.handleChange} type="text" id="tags" name="tags" className="form-control" placeholder="Enter Tags    [ e.g: (python, c#, javascript) ]" />
                                </div>
                                <div className="tags-div">
                                    {
                                        this.state.tagArray.map((tag, index) =>
                                        <span key={index} className="tags-span">{tag}<span onClick={() => this.removeTags(index)} className="tags-close"></span></span>
                                        )}
                                </div>
                                <button onClick = {this.sendingData} type="button" className="btn btn-secondary float-right">Submit Your Query!</button>
                            </form>
                        </div>
                        <div className="col-lg-2 col-md-1 col-0"></div>
                    </div>
                </div>
                )
            }
        }

export default Questionform;