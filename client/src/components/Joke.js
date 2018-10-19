import React from 'react';

// Styles
import styled from 'styled-components';

const JokeDiv = styled.div`
	border: 1px solid white;
	border-radius: 5px;
	padding: 10px;
	width: 50%;

	&:hover {
		background-color: #444;
	}

	p {
		text-align: left;
	}
`;

const Joke = props => {
	const { joke } = props;
	const {
		setup,
		punchline,
	} = joke;
	return(
		<JokeDiv>
			<p>{ setup }</p>
			<p>{ punchline }</p>
		</JokeDiv>
	);
};

export default Joke;
