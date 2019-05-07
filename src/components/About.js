import React, { Component } from 'react';
import { Card } from 'react-mdl';
import { Fab } from '@material-ui/core';
import './Home.css'
import krishnakaranam from '../images/krishnakaranam.jpg';

export default class About extends Component {

  render() {
    return (
    <div>
        <Card shadow={5} style={{display: 'inline-block', width: '22vw', height: '22vw', left: '30vw',top: '100px', background: `url(${krishnakaranam}) center / cover`, margin: 'auto'}}>
        </Card>

        <div className = "projectLeft">
          <h3><b style={{color: '#304ffe'}}>Hello, I'm</b></h3>
          <h3><b>KRISHNA</b></h3>
          <h3 className = "littleTop"><b style={{color: '#4b21ff'}}>KARANAM</b></h3>
          <h3 className = "moreTop"><b style={{color: '#4b21ff'}}>____</b></h3>
          <h4 >A recent graduate from Northeastern University, Boston looking for full-time position as a Software Engineer.</h4>
          <div className = "resumeButton">
            <Fab variant="extended" color="primary" aria-label="Add" href="https://github.com/krishnakaranam3732" target="_blank">
              <i style={{fontSize : '24px'}} class="fa fa-github"></i>
              &nbsp;&nbsp;  View on GitHub
            </Fab>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Fab variant="extended" color="primary" aria-label="Add" href="https://drive.google.com/file/d/1LciiWoQooy32cZRvtpeujGFph66UOeyh/view?usp=sharing" target="_blank">
              <i style={{fontSize : '21px'}} class="fa fa-file-text-o"></i>
              &nbsp;&nbsp;  View Full Resume
            </Fab>
          </div>
        </div>
        <p className = "projectAbout"></p>
        <div className = "footerTop">
          <div className = "footerPair">
            <h6 style={{color: 'white'}}><b>Email</b></h6>
            <h6 className = "footerlittleTop" style={{color: 'white'}}>karanam.s@husky.neu.edu</h6>
          </div>
          <div className = "footerPair">
              <h6 style={{color: 'white'}}><b>Phone</b></h6>
              <h6 className = "footerlittleTop" style={{color: 'white'}}>+1 267 697 2488</h6>
          </div>
          <div className = "footerPair">
              <h6 style={{color: 'white'}}><b>Find me on</b></h6>
              <div className = "footerLinks">
                  <a style={{color: 'white', fontSize : '20px'}} href="https://www.facebook.com/krish3732" target="_blank"><i  class="fa fa-facebook-square"></i></a> 
                  &nbsp;&nbsp;&nbsp;
                  <a style={{color: 'white', fontSize : '20px'}} href="https://www.instagram.com/krishnakaranam/" target="_blank"><i  class="fa fa-instagram"></i></a>
                  &nbsp;&nbsp;&nbsp;
                  <a style={{color: 'white', fontSize : '20px'}} href="https://twitter.com/krishnakaranam3" target="_blank"><i  class="fa fa-twitter-square"></i></a> 
                  &nbsp;&nbsp;&nbsp;
                  <a style={{color: 'white', fontSize : '20px'}} href="http://www.linkedin.com/in/krishnakaranam" target="_blank"><i  class="fa fa-linkedin-square"></i></a> 
                  &nbsp;&nbsp;&nbsp;
                  <a style={{color: 'white', fontSize : '20px'}} href="https://github.com/krishnakaranam3732" target="_blank"><i  class="fa fa-github"></i></a>
              </div>
          </div>
        </div>

        <div className = "footerRight"> 
          <h6 style={{color: '#bdbdbd'}}>Designed By: Krishna Karanam. All rights reserved.</h6>
        </div>

    </div>
    );
  }
}