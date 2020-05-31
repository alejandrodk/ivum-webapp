import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';

const App = () => (
		<BrowserRouter>
			<Route path='/' exact render={ Main }/>
		</BrowserRouter>
)

export default App;
