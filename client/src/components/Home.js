import React from 'react';

// Styles
import styled from 'styled-components';

const HomeDiv = styled.div`
	p {
		padding: 20px;
		text-align: center;

		span {
			color: lime;
		}
	}
`;

const Home = props => {
	const { username } = props;
	return(
		<HomeDiv>
			{
				username
				?
				<p>Welcome back to Dad Jokes, <span>{ username }</span>!</p>
				:
				<p>Welcome to Dad Jokes, please log in or register to view jokes.</p>
			}
		</HomeDiv>
	);
};

export default Home;
