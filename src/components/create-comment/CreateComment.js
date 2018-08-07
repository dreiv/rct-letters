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
		<div>
			<input type="text" />
			<button onClick={onCreate}>create</button>
		</div>
	)
}

CreateComment.propTypes = propTypes
CreateComment.defaultProps = defaultProps
