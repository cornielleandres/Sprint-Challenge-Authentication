import React, { Component, Fragment } from 'react';
import axios from 'axios';

// Styles
import styled from 'styled-components';

const RegisterForm = styled.form`
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

export default class Register extends Component {
	state = {
		username: '',
		password: '',
	};

	handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

	handleSubmit = e => {
		e.preventDefault();

		return axios
			.post('http://localhost:3300/api/register', this.state)
			.then(res => {
				const {
					username,
					token,
				} = res.data;
				this.props.setUserAndToken(username, token);
				this.props.goTo('/jokes');
			})
			.catch(err => console.log(err));
	};

	render() {
		const {
			username,
			password,
		} = this.state;
		const {
			loggedInUser,
		} = this.props;
		return(
			<Fragment>
				{
					loggedInUser
					?
					<Fragment>
						<p>You are already logged in as { loggedInUser }.</p>
						<p>Log out first if you want to register a new account.</p>
					</Fragment>
					:
					<RegisterForm onSubmit = { this.handleSubmit }>
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

						<button type = 'submit'>Register</button>
					</RegisterForm>
				}
			</Fragment>
		);
	}
};
