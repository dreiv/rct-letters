import React from 'react'
import PropTypes from 'prop-types'
import './Comment.css'

const propTypes = {
	header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

const defaultProps = {
	header: null,
	content: null,
}

export default function Comment({ header, content }) {
	return (
		<div className="comment">
			<div className="header">{header}</div>
			<div className="content">{content}</div>
		</div>
	)
}

Comment.propTypes = propTypes
Comment.defaultProps = defaultProps
