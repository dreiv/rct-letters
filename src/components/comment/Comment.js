import React from 'react'
import PropTypes from 'prop-types'
import './Comment.css'

const propTypes = {
	className: PropTypes.string,
	header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

const defaultProps = {
	className: '',
	header: null,
	content: null,
}

export default function Comment({ header, content, className }) {
	return (
		<div className={`comment ${className}`}>
			<div className="header">{header}</div>
			<div className="content">{content}</div>
		</div>
	)
}

Comment.propTypes = propTypes
Comment.defaultProps = defaultProps
