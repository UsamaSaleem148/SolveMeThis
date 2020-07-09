import React from 'react';

class NavigationBar extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            search : ""
        }
    }

    searchData = (e) => {
        e.preventDefault();

        if(this.state.search !== ""){
            window['location'].assign(`/search/${this.state.search}`)
        }
        else{
            alert("Kindly enter the specified fields");
        }
  }


    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        })
        console.log(this.state.search)
      }

    render(){
        return(
                <div className = "container-fluid p-0" >
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">SolveMeThis</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">About Us <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contactus">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/ourpolicy">Our Policy</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <div className="input-group">
                                    <input name="search" id="search" onChange={this.handleChange} className="form-control mr-sm-0 mySearchBar" type="text" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-prepend mySearchIcon">
                                        <span onClick={this.searchData} className="input-group-text" id="basic-addon1">Ask!</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
        )
    }
}

export default NavigationBar;