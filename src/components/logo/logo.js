import React from 'react'
import PropTypes from 'prop-types'
import './logo.css'

export const Logo = ({ title }) => (
	<h1 className="logo">
		{[...title].map((letter, idx) => <span key={idx}>{letter}</span>)}
	</h1>
)

Logo.propTypes = { title: PropTypes.string }
Logo.defaultProps = {
	title: 'Letters',
}
