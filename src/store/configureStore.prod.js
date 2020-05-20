import {applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import {createStore} from 'redux';

const storeProd = createStore(rootReducer, [], applyMiddleware(thunk));

export default storeProd;
