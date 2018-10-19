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

	&:hover .punchline {
		display: block;
	}

	p {
		text-align: left;
	}

	.punchline {
		display: none;
		color: yellow;
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
			<p className = 'punchline'>{ punchline }</p>
		</JokeDiv>
	);
};

export default Joke;
