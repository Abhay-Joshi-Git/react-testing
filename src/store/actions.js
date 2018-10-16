import { SAVE_COMMENT, FETCH_COMMENTS } from './types';

export const saveComment = (comment) => {
	return {
		type: SAVE_COMMENT,
		payload: comment	
	}
}

export const loadComments = () => {
	return {
		type: FETCH_COMMENTS
	}
}