import React, { Component, Fragment } from 'react';
import axios from 'axios';

// Styles
import styled from 'styled-components';

const LoginDiv = styled.div`
	padding: 20px;

	p {
		text-align: center;

		.user {
			color: lime;
		}
	}

	form {
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
		const { loggedInUser } = this.props;
		return(
			<LoginDiv>
				{
					loggedInUser
					?
					<Fragment>
						<p>You are already logged in as <span className = 'user'>{ loggedInUser }</span>.</p>
						<p>Log out first if you want to log in on another account.</p>
					</Fragment>
					:
					<form onSubmit = { this.handleSubmit }>
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
					</form>
				}
			</LoginDiv>
		);
	}
};
