import React from 'react';
import './css/App.css';
import ApiList from './js/ApiList.js';

function Start() {
  return (
    <div className="Start">
      <div className="headingStyles">
          <h1>Crypto Wiki</h1>
          <ApiList/>
        </div>
    </div>
  );
}

export default Start;