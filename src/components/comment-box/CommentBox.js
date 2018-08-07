import React from 'react'
import PropTypes from 'prop-types'
import PostComment from '../post-comment/PostComment'
import Comments from '../comment/Comments'
import CreateComment from '../create-comment/CreateComment'
import './CommentBox.css'

const propTypes = {
	data: PropTypes.object,
}

const defaultProps = {
	data: null,
}

export default function CommentBox({ data }) {
	const { comments } = data

	return (
		<div className="comment-box">
			<PostComment />
			<Comments comments={comments} />
			<CreateComment />
		</div>
	)
}

CommentBox.propTypes = propTypes
CommentBox.defaultProps = defaultProps
