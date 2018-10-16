import { FETCH_COMMENTS_ERROR, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS } from './types'

const initialState = false

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COMMENTS_ERROR:
			return false

		case FETCH_COMMENTS_SUCCESS:
			return false

		case FETCH_COMMENTS:
			return true
	
		default:
			return state;
	}
}
