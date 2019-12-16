import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {mainRoutes} from './routes';
import store from 'store/store';
import About from 'components/views/About/About';
import SignIn from 'components/views/SignTemplate/SignIn/SignIn';
import SignUp from 'components/views/SignTemplate/SignUp/SignUp';
import Home from 'components/views/Home/Home';

const App = () => {

  const {root, about, signIn, signUp, home} = mainRoutes;

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path={about} component={About}/>
            <Route path={signIn} component={SignIn}/>
            <Route path={signUp} component={SignUp}/>
            <Route path={home}>
              <Redirect to={root}/>
            </Route>
            <Route path={root} component={Home}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
