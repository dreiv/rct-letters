import React from 'react'
import PropTypes from 'prop-types'
import './Comments.css'

const propTypes = {
	comments: PropTypes.array,
}

const defaultProps = {
	comments: [],
}

export default function Comments({ comments }) {
	return (
		<React.Fragment>
			{comments.map(comment => <div>{comment.content}</div>)}
		</React.Fragment>
	)
}

Comments.propTypes = propTypes
Comments.defaultProps = defaultProps
