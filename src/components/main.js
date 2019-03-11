import React from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

const Main =  () => (
    <Switch>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;
