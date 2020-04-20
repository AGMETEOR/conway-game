import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './game-redux/store';
import './index.css';
import Game from './components/game';
import { bootstrapGrid } from './utils/helpers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Game bootstrapGrid={bootstrapGrid} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
