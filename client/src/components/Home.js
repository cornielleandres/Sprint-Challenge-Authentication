import React, { Fragment } from 'react';

const Home = props => {
	const { username } = props;
	return(
		<div>
			{
				username
				?
				<Fragment>
					<h2>Welcome back to Dad Jokes, { username }!</h2>
				</Fragment>
				:
				<Fragment>
					<p>Welcome to Dad Jokes, please log in to view jokes.</p>
				</Fragment>
			}
		</div>
	);
};

export default Home;
