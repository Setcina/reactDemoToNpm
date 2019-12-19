import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import { AppContainer } from 'react-hot-loader'; 

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Hello)
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Hello', () => {
    const NextApp = require('./Hello').default
    render(NextApp);
  })
}