import React from 'react';
import Menu from './menu.js';
import Topbar from './topbar.js';
import Details_campaign from './detail_campaign.js'
import './stylesheets/App.css';

function Campaign() {
  return (
    <div className="App">
      <div className="menudiv">
        <Menu />
        <Topbar />
        <Details_campaign />
      </div>
    </div>
  );
}

export default Campaign;
