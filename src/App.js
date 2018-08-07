import React, { Component } from 'react'
import { Logo } from './components/logo/Logo'
import CommentBoxContainer from './containers/CommentBoxContainer'
import './App.css'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Logo />
				<CommentBoxContainer />
			</React.Fragment>
		)
	}
}

export default App
