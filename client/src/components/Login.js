import React, { Component } from 'react';
import axios from 'axios';

// Styles
import styled from 'styled-components';

const LoginForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: column;

	label {
		color: white;
	}

	input {
		margin-bottom: 20px;
		border-radius: 5px;
		padding: 5px 10px;
	}

	button {
		border-radius: 5px;
		padding: 5px 10px;

		&:hover {
			background-color: black;
			color: white;
			cursor: pointer;
		}
	}
`;

export default class Login extends Component {
	state = {
		username: '',
		password: '',
	};

	handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

	handleSubmit = e => {
		e.preventDefault();

		return axios
			.post('http://localhost:3300/api/login', this.state)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
	};

	render() {
		const {
			username,
			password,
		} = this.state;
		return(
			<LoginForm onSubmit = { this.handleSubmit }>
				<label htmlFor = 'username'>Username:</label>
				<input
					name = 'username'
					id = 'username'
					value = { username }
					onChange = { this.handleInputChange }
				/>

				<label htmlFor = 'password'>Password:</label>
				<input
					type = 'password'
					name = 'password'
					id = 'password'
					value = { password }
					onChange = { this.handleInputChange }
				/>

				<button type = 'submit'>Log In</button>
			</LoginForm>
		);
	}
};
