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
`;

const Header = () => {
	return(
		<HeaderElem>
			<h1>Welcome to Dad Jokes!</h1>
			
			<div className = 'links'>
				<NavLink activeClassName = 'selected' exact to = '/'>Home</NavLink>
				<NavLink activeClassName = 'selected' to = '/register'>Register</NavLink>
			</div>
		</HeaderElem>
	);
};

export default Header;
