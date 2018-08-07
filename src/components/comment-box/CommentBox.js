import React from 'react'
import PropTypes from 'prop-types'
import PostComment from '../post-comment/PostComment'
import Comments from '../comment/Comments'
import CreateComment from '../create-comment/CreateComment'
import './CommentBox.css'

const propTypes = {}

const defaultProps = {}

export default function CommentBox(props) {
	return (
		<div className="comment-box">
			<PostComment />
			<Comments />
			<CreateComment />
		</div>
	)
}

CommentBox.propTypes = propTypes
CommentBox.defaultProps = defaultProps
