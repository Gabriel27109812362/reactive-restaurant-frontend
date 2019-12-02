import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

import Home from '../src/components/Home/Home'
import { BrowserRouter as Router, Route } from "react-router-dom"


const App = () => {
	return (
    <Provider store={store}>
    <Route exact path='/' component={Home} />
			<div className="App"> </div>
		</Provider>
	);
};

export default Home;
