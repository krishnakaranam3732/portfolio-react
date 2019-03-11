import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Icon, Button} from 'react-mdl';
import './Home.css'

import hangman from '../images/hangman.jpg'
import sphereogram from '../images/sphereogram.png'
import library from '../images/library.jpg'
import neuralnetwork from '../images/neuralnetwork.jpg'
import youthadvocacy from '../images/youthadvocacy.png'
import webserver from '../images/webserver.jpg'
// background: `url(${neuralnetwork}) center / cover`




export default class Projects extends Component {

  render() {
    return (
      <div>
        <div >
          <Card shadow={3} style={{display: 'inline-block', width: '23vw', left: '13vw',top: '25px', margin: 'auto'}}>
            <CardTitle expand style={{alignItems: 'flex-start', color: '#4b21ff'}}>
              <h4 style={{marginTop: '0', marginBottom: '-10px'}}>
              Hangman Game
              </h4>
            </CardTitle>
              <CardText>
              React UI for a simple Hangman Game (guessing the word) using python Flask as Back-End. <br></br>
              Try to escape Hangman's wrath.
              </CardText>
              <CardActions border style={{borderColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#000'}}>
                <Button colored style={{color: '#4b21ff'}}> <a href="https://persistent-hangman-ui.herokuapp.com/" >Play Hangman</a></Button>
                <div className="mdl-layout-spacer"></div>
                <Icon style={{color: '#4b21ff'}} name="how_to_reg" />
            </CardActions>
          </Card>
          <Card shadow={3} style={{display: 'inline-block', width: '30vw', left: '20vw',top: '25px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '23vw', background: `url(${hangman}) center / cover`}}></CardTitle>
          </Card>
        </div>

        <div >
          <Card shadow={3} style={{display: 'inline-block', width: '30vw', left: '13vw',top: '100px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '23vw', background: `url(${sphereogram}) center / cover`}}></CardTitle>
          </Card>
          <Card shadow={3} style={{display: 'inline-block', width: '23vw', left: '20vw',top: '100px', margin: 'auto'}}>
            <CardTitle expand style={{alignItems: 'flex-start', color: '#4b21ff'}}>
              <h4 style={{marginTop: '0', marginBottom: '-10px'}}>
                SphereOgram
              </h4>
            </CardTitle>
              <CardText>
              SphereOgram is designed to discover photospheres and share your favorites with the world. <br></br>
              Instagram with PhotoSpheres instead of boring pictures.
              </CardText>
              <CardActions border style={{borderColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#000'}}>
                <Button colored style={{color: '#4b21ff'}}> <a href="https://sphereogram.herokuapp.com/project" >Discover SphereOgram</a></Button>
                <div className="mdl-layout-spacer"></div>
                <Icon style={{color: '#4b21ff'}} name="panorama" />
            </CardActions>
          </Card>
        </div>

        <div >
          <Card shadow={3} style={{display: 'inline-block', width: '23vw', left: '13vw',top: '180px', margin: 'auto'}}>
            <CardTitle expand style={{alignItems: 'flex-start', color: '#4b21ff'}}>
              <h4 style={{marginTop: '0', marginBottom: '-10px'}}>
                Library Web Services
              </h4>
            </CardTitle>
              <CardText>
              A Book Library web application designed in Python Flask, ReactJS and PostgreSQL. <br></br>
              Check out the APIs available.
              </CardText>
              <CardActions border style={{borderColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#000'}}>
                <Button colored style={{color: '#4b21ff'}}> <a href="https://hufflepuffbookstore.herokuapp.com/" >Try Library APIs</a></Button>
                <div className="mdl-layout-spacer"></div>
                <Icon style={{color: '#4b21ff'}} name="cloud_download" />
            </CardActions>
          </Card>
          <Card shadow={3} style={{display: 'inline-block', width: '30vw', left: '20vw',top: '180px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '23vw', background: `url(${library}) center / cover`}}></CardTitle>
          </Card>
        </div>

        <div >
          <Card shadow={3} style={{display: 'inline-block', width: '30vw', left: '13vw',top: '260px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '23vw', background: `url(${neuralnetwork}) center / cover`}}></CardTitle>
          </Card>
          <Card shadow={3} style={{display: 'inline-block', width: '23vw', left: '20vw',top: '260px', margin: 'auto'}}>
            <CardTitle expand style={{alignItems: 'flex-start', color: '#4b21ff'}}>
              <h4 style={{marginTop: '0', marginBottom: '-10px'}}>
                Nl2Code
              </h4>
            </CardTitle>
              <CardText>
              A syntactic neural model for parsing natural language comments to executable code. <br></br>
              An artificial code generator for a high-level language, like Python.
              </CardText>
              <CardActions border style={{borderColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#000'}}>
                <Button colored style={{color: '#4b21ff'}}> <a href="https://github.com/krishnakaranam3732/NL2Code" >View Project on GitHub</a></Button>
                <div className="mdl-layout-spacer"></div>
                <Icon style={{color: '#4b21ff'}} name="graphic_eq" />
            </CardActions>
          </Card>
        </div>

        <div >
          <Card shadow={3} style={{display: 'inline-block', width: '23vw', left: '13vw',top: '330px', margin: 'auto'}}>
            <CardTitle expand style={{alignItems: 'flex-start', color: '#4b21ff'}}>
              <h4 style={{marginTop: '0', marginBottom: '-10px'}}>
                Youth Advocacy Project
              </h4>
            </CardTitle>
              <CardText>
              Web App designed as an extension to Social Networking Applications for Youth Advocacy Project Research. <br></br>
              Developed with Node.js, Express.js, AngularJS and MongoDB.
              </CardText>
              <CardActions border style={{borderColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#000'}}>
                <Button colored style={{color: '#4b21ff'}}> <a href="https://github.com/krishnakaranam3732/Youth-Advocacy-Project" >View Project on GitHub</a></Button>
                <div className="mdl-layout-spacer"></div>
                <Icon style={{color: '#4b21ff'}} name="people" />
            </CardActions>
          </Card>
          <Card shadow={3} style={{display: 'inline-block', width: '30vw', left: '20vw',top: '330px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '23vw', background: `url(${youthadvocacy}) center / cover`}}></CardTitle>
          </Card>
        </div>

        <div >
          <Card shadow={3} style={{display: 'inline-block', width: '30vw', left: '13vw',top: '410px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '23vw', background: `url(${webserver}) center / cover`}}></CardTitle>
          </Card>
          <Card shadow={3} style={{display: 'inline-block', width: '23vw', left: '20vw',top: '410px', margin: 'auto'}}>
            <CardTitle expand style={{alignItems: 'flex-start', color: '#4b21ff'}}>
              <h4 style={{marginTop: '0', marginBottom: '-10px'}}>
                Northeastern University Align Website
              </h4>
            </CardTitle>
              <CardText>
              Implemented Align Website Back-End using Java Jersey RESTful API. <br></br>
              Worked as the Back-End Team Lead and Agile Scrum Master.
              </CardText>
              <CardActions border style={{borderColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#000'}}>
                <Button colored style={{color: '#4b21ff'}}> <a href="https://github.com/gortonator/AlignWebsiteAdmin" >View Project on GitHub</a></Button>
                <div className="mdl-layout-spacer"></div>
                <Icon style={{color: '#4b21ff'}} name="school" />
            </CardActions>
          </Card>
        </div>
        
        <p className = "projectBelow"></p>
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