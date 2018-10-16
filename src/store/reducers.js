import { combineReducers } from 'redux'
import commentsReducer from './commentsReducer'
import commentsLoadingReducer from './commentsLoadingReducer'

export default combineReducers({
	comments: commentsReducer,
	isCommentsLoading: commentsLoadingReducer
})