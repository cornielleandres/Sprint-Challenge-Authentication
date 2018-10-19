import React, { Component } from 'react';
import axios from 'axios';

// Components
import { Joke } from './index.js';

// Styles
import styled from 'styled-components';

const JokesDiv = styled.div`
	padding: 20px;

	p {
		text-align: center;
		span {
			color: lime;
		}
	}
`;

export default class Jokes extends Component {
	state = {
		jokes: [],
	};
	componentDidMount() {
		const token = JSON.parse(localStorage.getItem('dadJokes'));
		const header = { Authorization: token ? token : null };
		if (!token) return this.props.goTo('/');
		return axios
			.get('http://localhost:3300/api/jokes', { headers: header })
			.then(res => this.setState({ jokes: res.data }))
			.catch(err => {
				console.log(err);
				return this.props.logOut();
			});
	};

	render() {
		const {
			username,
		} = this.props;
		const { jokes } = this.state;
		return(
			<JokesDiv>
				<p>Welcome back, <span className = 'user'>{username}</span>!</p>

				<p>Here are your jokes:</p>
				{ jokes.map((joke, i) => <Joke key = { i } joke = { joke } />) }
			</JokesDiv>
		);
	}
};
