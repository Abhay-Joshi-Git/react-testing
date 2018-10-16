import commentsReducer from 'store/commentsReducer'
import { SAVE_COMMENT } from 'store/types'

it('handles SAVE_COMMENT action', () => {
	const saveCommentAction = {
		type: SAVE_COMMENT,
		payload: 'new comment'
	}

	expect(commentsReducer([], saveCommentAction)).toEqual(['new comment'])
})