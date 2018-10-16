import React from 'react'
import { connect } from 'react-redux'
import { saveComment, loadComments } from 'store/actions'

class CommentBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comment: ''
		}
	}

	handleChange = (e) => {
		this.setState({ comment: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.saveComment(this.state.comment)
		this.setState({ comment: '' })
	}

	handleLoadComments = () => {
		this.props.loadComments()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a Comment</h4>
				<textarea value={this.state.comment} onChange={this.handleChange} />
				<div>
					<button type="submit">Submit</button>
					<button type="button" onClick={this.handleLoadComments}>Load Comments</button>
				</div>
			</form>
		)
	}
}

export default connect(null, { saveComment, loadComments })(CommentBox)
