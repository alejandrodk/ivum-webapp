import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Recepcion from './Recepcion';
import Login from './Login';

const App = () => (
	<BrowserRouter>
		<Route path='/' exact render={ Home }/>
		<Route path='/ingresar' render={ Login }/>
		<Route path='/recepcion' render={ Recepcion }/>
	</BrowserRouter>
)

export default App;
