import React from 'react'
import PropTypes from 'prop-types'
import './Logo.css'

export const Logo = ({ text }) => (
	<h1 className="logo">
		{[...text].map((letter, idx) => <span key={idx}>{letter}</span>)}
	</h1>
)

Logo.propTypes = { text: PropTypes.string }
Logo.defaultProps = {
	text: 'Letters',
}
