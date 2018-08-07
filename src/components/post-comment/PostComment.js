import React from 'react'
import PropTypes from 'prop-types'
import Comment from '../comment/Comment'
import './PostComment.css'

const propTypes = {
	post: PropTypes.object,
}

const defaultProps = {
	post: null,
}

export default function PostComment({ post: { content, user, count } }) {
	return (
		<Comment
			className="post-comment"
			header={
				<React.Fragment>
					<span>{`${user} posted`}</span>
					<span>{`${count} comments`}</span>
				</React.Fragment>
			}
			content={content}
		/>
	)
}

PostComment.propTypes = propTypes
PostComment.defaultProps = defaultProps
