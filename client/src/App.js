import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import { Header } from './components/index.js';

// Styles
import styled from 'styled-components';

const AppDiv = styled.div`
	background-color: #282c34;
	min-height: 100vh;
`;

class App extends Component {
	render() {
		return (
			<AppDiv className = 'App'>
				<Header />
			</AppDiv>
		);
	}
}

export default App;
