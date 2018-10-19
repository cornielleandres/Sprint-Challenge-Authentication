import React, { Component } from 'react';
import axios from 'axios';

// Components
import { Joke } from './index.js';

// Styles
import styled from 'styled-components';

const JokesDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: column;
	padding: 20px;

	.message {
		margin-bottom: 20px;

		p {
			text-align: center;
			span {
				color: lime;
			}
		}
	}
`;

export default class Jokes extends Component {
	state = {
		jokes: [],
	};

	componentDidMount() {
		const userInfo = JSON.parse(localStorage.getItem('dadJokes'));
		let token = null;
		if (userInfo) token = userInfo.token;
		const header = { Authorization: token };
		if (!this.props.username) return this.props.goTo('/');
		return axios
			.get('http://localhost:3300/api/jokes', { headers: header })
			.then(res => {
				this.setState({ jokes: res.data });
			})
			.catch(err => {
				console.log(err);
				return this.props.logOut('/');
			});
	};

	render() {
		const {
			username,
		} = this.props;
		const { jokes } = this.state;
		return(
			<JokesDiv>
				<div className = 'message'>
					<p>Welcome back, <span className = 'user'>{username}</span>!</p>

					<p>Here are your jokes:</p>
				</div>
				{ jokes.map((joke, i) => <Joke key = { i } joke = { joke } />) }
			</JokesDiv>
		);
	}
};
