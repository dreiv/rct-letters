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
			{comments.map(({ id, user, content }) => (
				<div key={id} className="comment">
					<div className="comment__header">{`${user} commented`}</div>
					{content}
				</div>
			))}
		</React.Fragment>
	)
}

Comments.propTypes = propTypes
Comments.defaultProps = defaultProps
