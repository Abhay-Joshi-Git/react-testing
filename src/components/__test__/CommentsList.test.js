import React from 'react'
import { mount } from 'enzyme'

import { saveComment } from 'store/actions'
import StoreRoot, { store }  from 'store'
import CommentsList from 'components/CommentsList'

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<StoreRoot>
			<CommentsList />
		</StoreRoot>
	)
})

it('renders one li for each comment in store', () => {
	expect(wrapped.find('li').length).toEqual(0)

	store.dispatch(saveComment('new comment'))
	wrapped.update()
	expect(wrapped.find('li').length).toEqual(1)

	store.dispatch(saveComment('one more comment'))
	wrapped.update()
	expect(wrapped.find('li').length).toEqual(2)
})