import { applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger({
  level: 'log',
  collapsed: true,
});

const storeDev = createStore(rootReducer, {},
  composeWithDevTools(applyMiddleware(thunk, logger)));

export default storeDev;
