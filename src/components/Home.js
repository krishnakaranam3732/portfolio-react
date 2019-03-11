import React, { Component } from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl'
import Main from './main'
import './Home.css'

export default class Home extends Component {

  render() {
    return (
        <div style={{height: '100vh', width: '100vw', position: 'relative'}}>
            <Layout className='container'>
                <Header transparent title="Krishna Karanam" style={{color: 'white', right: '5vw', position: 'relative'}}>
                    <Navigation >
                        <a style={{color: 'black'}} href="/about">About</a>
                        <a style={{color: 'black'}} href="/projects">Projects</a>
                        <a style={{color: 'black'}} href="/contact">Contact</a>
                    </Navigation>
                </Header>
                <Content>
                    <Main />
                </Content>
            </Layout>
        </div>
    );
  }
}
