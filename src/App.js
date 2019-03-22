import React, { Component } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';


class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route 
							exact path="/"
							component={Home}
						/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
