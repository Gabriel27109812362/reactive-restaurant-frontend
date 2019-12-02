import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import store from './store/store';
import About from './components/views/About/About';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path='/about' component={About}/>

            <Route path='/' component={Home}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
