import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import styled from 'styled-components';

const HeaderElem = styled.header`
	color: white;
	text-align: center;

	h1 {
		font-size: 2rem;
		padding: 10px;
	}

	.links {
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		a {
			color: white;
			text-decoration: none;
			padding: 5px;

			&: hover {
				color: yellow;
			}
		}

		.selected {
			border: 1px solid white;
			border-radius: 5px;
			padding: 5px 10px;
			background-color: black;
		}
	}

	.logout-btn {
		border-radius:5px;
		padding: 5px 10px;

		&:hover {
			background-color: black;
			color: white;
			cursor: pointer;
		}
	}
`;

const Header = props => {
	const {
		username,
		logOut,
	} = props;
	return(
		<HeaderElem>
			<h1>Dad Jokes Emporium!</h1>
			
			<div className = 'links'>
				<NavLink activeClassName = 'selected' exact to = '/'>Home</NavLink>
				<NavLink activeClassName = 'selected' to = '/register'>Register</NavLink>
				<NavLink activeClassName = 'selected' to = '/login'>Log In</NavLink>
				<NavLink activeClassName = 'selected' to = '/jokes'>Jokes</NavLink>
			</div>

			{ username && <button className = 'logout-btn' onClick = { logOut }>Log Out</button> }
		</HeaderElem>
	);
};

export default Header;
