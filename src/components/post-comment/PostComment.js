import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	post: PropTypes.object,
}

const defaultProps = {
	post: null,
}

export default function PostComment({ post: { content, user, count } }) {
	return (
		<div className="post-comment">
			<div className="header">
				{user} {count}
			</div>
			{content}
		</div>
	)
}

PostComment.propTypes = propTypes
PostComment.defaultProps = defaultProps
