import React from 'react'
import PropTypes from 'prop-types'
import './CreateComment.css'

const propTypes = {
	onCreate: PropTypes.func,
}

const defaultProps = {
	onCreate: () => {},
}

export default function CreateComment({ onCreate }) {
	return (
		<form className="create-comment" onSubmit={onCreate}>
			<textarea name="comment" placeholder="Comment here…" />
			<button type="submit">add comment</button>
		</form>
	)
}

CreateComment.propTypes = propTypes
CreateComment.defaultProps = defaultProps
