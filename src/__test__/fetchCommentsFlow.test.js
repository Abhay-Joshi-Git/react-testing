import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'

import App from 'components/App'
import StoreRoot from 'store'

let wrapped

beforeEach(() => {
	wrapped = mount(
		<StoreRoot>
			<App />
		</StoreRoot>
	)

	moxios.install()
	moxios.stubRequest('/api/comments', {
		status: 200,
		response: [
			{
				name: 'comment1'
			},
			{
				name: 'comment2'
			}
		]
	})
})

afterEach(() => {
	moxios.uninstall()

	wrapped.unmount()
})

it('fetches comments and displays in list of lis', (done) => {
	const fetchCommentsButton = wrapped.find('#load-comments')
	fetchCommentsButton.simulate('click')

	moxios.wait(function () {
		wrapped.update()
		expect(wrapped.find('li').length).toEqual(2)
		
		done()
	})
})