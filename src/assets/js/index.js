"use strict";

import React, { Component } from 'react';
<<<<<<< HEAD
import { render } from "react-dom";
=======
import {render} from "react-dom";
import { AppContainer } from 'react-hot-loader'
>>>>>>> hotloader

import App from './App';

// render(<AppContainer><App /></AppContainer>, document.getElementById("app"));

const render_helper = Component => {
    render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('app')
    );
  }
  
  render_helper(App)
  
  if (module.hot) {
    module.hot.accept('./App', () => { render_helper(App) })
  }