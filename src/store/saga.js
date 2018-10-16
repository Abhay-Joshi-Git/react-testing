import { FETCH_COMMENTS, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR } from 'store/types'
import { take, put, call, fork, all } from 'redux-saga/effects'
import { getComments  } from 'api'

function* fetchComments() {
	try {
		const comments = yield call(getComments)
		yield put({
			type: FETCH_COMMENTS_SUCCESS,
			payload: comments
		})
	} catch (e) {
		yield put({
			type: FETCH_COMMENTS_ERROR,
			payload: e
		})
	}
}

function* takeFetchComments() {
	while(true) {
		const action = yield take(FETCH_COMMENTS)
		yield fetchComments(action)
	}
}

export default function* takeCombine() {
	return yield all([fork(takeFetchComments)])
}

