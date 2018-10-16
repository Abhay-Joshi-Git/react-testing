import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Store from 'store'

let wrapped

beforeEach(() => {
	wrapped = mount(
		<Store>
			<CommentBox />
		</Store>
)})

afterEach(() => {
	wrapped.unmount()
})

it('has a textarea and a button', () => {
	expect(wrapped.find('textarea').length).toEqual(1)
	expect(wrapped.find('button').length).toEqual(1)
})

describe('textarea functionality', () => {
	const newCommentText = 'new comment'

	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: newCommentText }
		})
		// we need to update the component as setState is asynchronous but we want to check the results immediately
		wrapped.update()
	})

	// check whether onChange event has been handled correctly and modifying props passed to textarea
	it('provides correct value to textarea', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual(newCommentText)
	})

	it('handles form submission properly', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual(newCommentText)

		//let's simulate form submit
		wrapped.find('form').simulate('submit')
		wrapped.update()

		expect(wrapped.find('textarea').prop('value')).toEqual('')
	})

})
