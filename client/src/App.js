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

	componentDidMount() {
		const userInfo = JSON.parse(localStorage.getItem('dadJokes'));
		if (userInfo) {
			return this.setState({ ...userInfo }, () => this.goTo('/'));
		}
		return this.goTo('/');
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

	logOut = () => {
		localStorage.removeItem('dadJokes');
		return this.setState({
			username: '',
			token: '',
		}, () => this.goTo('/'));
	};

	render() {
		const {
			username,
			token,
		} = this.state;
		return (
			<AppDiv className = 'App'>
				<Header username = { username } logOut = { this.logOut } />

				<Route exact path = '/' render = { () => <Home username = { username } /> } />

				<Route path = '/register' render = { () => <Register loggedInUser = { username } goTo = { this.goTo } setUserAndToken = { this.setUserAndToken } /> } />

				<Route path = '/login' render = { () => <Login loggedInUser = { username } goTo = { this.goTo } setUserAndToken = { this.setUserAndToken } /> } />

				<Route path = '/jokes' render = { () => <Jokes username = { username } token = { token } /> } />
			</AppDiv>
		);
	}
}

export default App;
