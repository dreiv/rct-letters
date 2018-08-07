import React from 'react'
import CommentBox from '../components/comment-box/CommentBox'
import sampleData from '../sample.json'

export default class CommentBoxContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
		}
	}

	componentWillMount() {
		this.setState({ data: sampleData })
	}

	handleCreate = comment => {
		const { data } = this.state
		data.comments.push(comment)

		this.setState({ data })
	}

	render() {
		const { data } = this.state
		return <CommentBox data={data} onCreate={this.handleCreate} />
	}
}
