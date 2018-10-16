import React from 'react'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import commentsSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(commentsSaga)

export default (props) => (
	<Provider store={store}>
		{props.children}
	</Provider>
)