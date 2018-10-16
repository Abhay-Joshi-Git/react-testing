import { SAVE_COMMENT, FETCH_COMMENTS_SUCCESS } from './types'

const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case SAVE_COMMENT:
			return [ ...state, action.payload ]

		case FETCH_COMMENTS_SUCCESS:
			return [ ...action.payload ]
	
		default:
			return state;
	}
}
