import React, { Component } from 'react';
import { Card } from 'react-mdl';
import { Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './Home.css'

export default class Contact extends Component {

  render() {
    return (
    <div>
        <Card shadow={5} style={{display: 'inline-block', width: '25vw', height: '80vh', left: '30vw',top: '30px', background: '#1b1b1b', margin: 'auto'}}>
        
          <form className="contactForm">
          <h4 style={{color: '#ffffff'}}>Send a Message</h4>
            <FormControl margin="normal"  fullWidth>
              <InputLabel style={{color: 'white'}} htmlFor="name">Your Name</InputLabel>
              <Input style={{color: 'white'}} id="name" name="name" autoComplete="name" autoFocus />
            </FormControl>
            <FormControl margin="normal"  fullWidth>
              <InputLabel style={{color: 'white'}} htmlFor="email">Your Email</InputLabel>
              <Input style={{color: 'white'}} id="email" name="email" autoComplete="email"  />
            </FormControl>
            <FormControl margin="normal"  fullWidth>
              <InputLabel style={{color: 'white'}} htmlFor="subject">Subject of the Message</InputLabel>
              <Input style={{color: 'white'}} id="subject" name="subject" autoComplete="subject"  />
            </FormControl>
            <FormControl margin="normal"  fullWidth>
              <InputLabel style={{color: 'white'}} htmlFor="message">Your Message</InputLabel>
              <Input rows='10' multiline style={{color: 'white'}} id="message" name="message" autoComplete="message"  />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="contactSubmit"
            >
              S E N D&nbsp;&nbsp;M E S S A G E
            </Button>
          </form>
        
        </Card>

        <div className = "contactLeft">
          <h3><b style={{color: '#1b1b1b'}}>CONTACT ME</b></h3>
        </div>

        <Card shadow={5} style={{width: '20vw', height: '5vh', left: '21vw', margin: 'auto'}}>
          <h5 className = "contactRight"><b>Phone</b></h5>
          <h6 className = "contactRight contactContact">+1 267 697 2488</h6>
          <h5 className = "contactRight contactEmail"><b>Email</b></h5>
          <h6 className = "contactRight contactContact">karanam.s@husky.neu.edu</h6>
          <h6 className = "contactRight contactContact">krishnakaranam3732@gmail.com</h6>
        </Card>

        <p className = "projectContact"></p>

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