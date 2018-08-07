import React from 'react'
import PropTypes from 'prop-types'
import Comment from '../comment/Comment'
import './Comments.css'

const propTypes = {
	comments: PropTypes.array,
}

const defaultProps = {
	comments: [],
}

export default function Comments({ comments }) {
	return (
		<div className="comments">
			{comments.map(({ id, user, content }) => (
				<Comment key={id} header={`${user} commented`} content={content} />
			))}
		</div>
	)
}

Comments.propTypes = propTypes
Comments.defaultProps = defaultProps
