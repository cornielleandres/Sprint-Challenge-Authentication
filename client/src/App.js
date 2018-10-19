import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import {
	Header,
	Home,
	Register,
	Login,
} from './components/index.js';

// Styles
import styled from 'styled-components';

const AppDiv = styled.div`
	background-color: #282c34;
	min-height: 100vh;
`;

class App extends Component {
	state = {
		token: '',
	};

	setToken = token => {
		return this.setState({ token: token });
	};

	render() {
		return (
			<AppDiv className = 'App'>
				<Header />

				<Route exact path = '/' component = { Home} />

				<Route path = '/register' render = { () => <Register setToken = { this.setToken } /> } />

				<Route path = '/login' render = { () => <Login setToken = { this.setToken } /> } />
			</AppDiv>
		);
	}
}

export default App;
