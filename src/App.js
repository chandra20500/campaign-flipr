import React from 'react';
import Campaign from './campaign.js';
import Status from './status.js';
import './stylesheets/App.css';
import {BrowsreRouter ,Route, Switch, BrowserRouter} from 'react-router-dom';

function App() {
  return (
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component = {Campaign} />
                <Route path="/status" exact component = {Status} />
              </Switch>
            </BrowserRouter>
  );
}

export default App;
