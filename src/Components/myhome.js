import React from 'react';
import Questionform from './askquestion';
import NavigationBar from './navigationbar';
import Footer from './footer';
import '../App.css';
class MyHome extends React.Component{
    render(){
        return(
            <div>
                <NavigationBar />
                <div className="questionForm">
                <Questionform />
                </div>
                <Footer />
            </div>
        )
    }
}

export default MyHome;