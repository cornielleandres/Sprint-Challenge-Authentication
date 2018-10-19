import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import {
	Header,
	Home,
	Register,
	Login,
	Jokes,
} from './components/index.js';

// Styles
import styled from 'styled-components';

const AppDiv = styled.div`
	background-color: #282c34;
	min-height: 100vh;
`;

class App extends Component {
	state = {
		username: '',
		token: '',
	};

	setUserAndToken = (username, token) => {
		const userInfo = {
			username: username,
			token: token,
		};
		localStorage.setItem('dadJokes', JSON.stringify(userInfo));
		return this.setState({ ...userInfo });
	};

	goTo = path => this.props.history.push(path);

	render() {
		const {
			username,
			token,
		} = this.state;
		return (
			<AppDiv className = 'App'>
				<Header />

				<Route exact path = '/' component = { Home} />

				<Route path = '/register' render = { () => <Register goTo = { this.goTo } setUserAndToken = { this.setUserAndToken } /> } />

				<Route path = '/login' render = { () => <Login goTo = { this.goTo } setUserAndToken = { this.setUserAndToken } /> } />

				<Route path = '/jokes' render = { () => <Jokes username = { username } token = { token } /> } />
			</AppDiv>
		);
	}
}

export default App;
