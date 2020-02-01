import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped
const initialState = {
    comments: ['Comment 1', 'Comment 2']
}

beforeEach(() => {
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

afterEach(() => {
    wrapped.unmount()
})

it('should create a li per comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
})

it('shoutl show the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1')
    expect(wrapped.render().text()).toContain('Comment 2')
})