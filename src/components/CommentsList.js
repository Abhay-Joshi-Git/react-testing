import React from 'react'
import { connect } from 'react-redux'

const commentsList =  ({ comments }) => (
	<React.Fragment>
		<h3>Comment List</h3>
		<ul>
			{!!(comments && comments.length) && comments.map((comment, index) => {
				return (<li key={index}>
					{comment}
				</li>)
			})}
		</ul>
	</React.Fragment>
)

const mapStateToProps = (state) => {
	return {
		comments: state.comments
	}
}

export default connect(mapStateToProps)(commentsList)