import React, { Component } from 'react'
import { Logo } from './components/logo/Logo'
import CommentBox from './components/comment-box/CommentBox'
import './App.css'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Logo />
				<CommentBox />
			</React.Fragment>
		)
	}
}

export default App
