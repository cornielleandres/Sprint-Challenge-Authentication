import React, { Component } from 'react';
import axios from 'axios';

// Components
import { Joke } from './index.js';

export default class Jokes extends Component {
	state = {
		jokes: [],
	};
	componentDidMount() {
		const header = { Authorization: this.props.token ? this.props.token : null };
		return axios
			.get('http://localhost:3300/api/jokes', { headers: header })
			.then(res => this.setState({ jokes: res.data }))
			.catch(err => console.log(err));
	};
	render() {
		const {
			username,
		} = this.props;
		const { jokes } = this.state;
		return(
			<div>
				<h2>Welcome back, {username}!</h2>
				<p>Here are your jokes:</p>
				{ jokes.map((joke, i) => <Joke key = { i } joke = { joke } />) }
			</div>
		);
	}
};
