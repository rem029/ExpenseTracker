import React from 'react';

import './header.css';

import ViewController from '../../views/view.controller.js';

function Header(props) {
  return (
    <div>
      <div className="header">
        <div className="header-primary">
          <h1>Expense Tracker</h1>
          <p>
            Made by{' '}
            <a href="https://github.com/rem029" target="_blank">
              rem029
            </a>{' '}
          </p>
        </div>
        <ViewController SwitchView={props.SwitchView} currentView={props.currentView} />
      </div>
    </div>
  );
}

export default Header;
