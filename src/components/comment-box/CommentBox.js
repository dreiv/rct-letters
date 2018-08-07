import React from 'react'
import PropTypes from 'prop-types'
import PostComment from '../post-comment/PostComment'
import Comments from '../comments/Comments'
import CreateComment from '../create-comment/CreateComment'
import './CommentBox.css'

const propTypes = {
	data: PropTypes.object,
	onCreate: PropTypes.func,
}

const defaultProps = {
	data: null,
	onCreate: () => {},
}

export default function CommentBox({ data: { comments, ...post }, onCreate }) {
	return (
		<div className="comment-box">
			<PostComment post={{ ...post, count: comments.length }} />
			<Comments comments={comments} />
			<CreateComment onCreate={onCreate} />
		</div>
	)
}

CommentBox.propTypes = propTypes
CommentBox.defaultProps = defaultProps
