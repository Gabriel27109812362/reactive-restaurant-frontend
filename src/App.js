import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { mainRoutes } from './routes';
import About from 'components/views/About/About';
import SignIn from 'components/views/SignTemplate/SignIn/SignIn';
import SignUp from 'components/views/SignTemplate/SignUp/SignUp';
import Home from 'components/views/Home/Home';
import Menu from './components/views/Menu/Menu';
import { connect } from 'react-redux';

const App = (props) => {

  const { root, about, signIn, signUp, home, menu } = mainRoutes;
  const { isAuthenticated } = props;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={about} component={About}/>
          <Route path={signIn} component={SignIn}/>
          <Route path={signUp} component={SignUp}/>
          <Route path={menu}
                 render={() => isAuthenticated ? <Menu/> : (
                   <Redirect to={root}/>
                 )}/>
          <Route path={home}>
            <Redirect to={root}/>
          </Route>
          <Route path={root} component={Home}/>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userReducer.isAuthenticated,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);

