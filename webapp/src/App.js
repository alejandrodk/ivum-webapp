import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Recepcion from './Recepcion';

const App = () => (
	<BrowserRouter>
		<Route path='/' exact render={ Home }/>
		<Route path='/recepcion' exact render={ Recepcion }/>
	</BrowserRouter>
)

export default App;
