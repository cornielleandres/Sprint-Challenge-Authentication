import React from 'react';

const Joke = props => {
	const { joke } = props;
	return(
		<div>
			<div>{ joke.setup }</div>
			<div>{ joke.punchline }</div>
		</div>
	);
};

export default Joke;
