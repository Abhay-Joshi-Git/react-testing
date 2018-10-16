import React from 'react'
import rootReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export const store = createStore(rootReducer)

export default (props) => (
	<Provider store={store}>
		{props.children}
	</Provider>
)