import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles action SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual(['New Comment'])
})

it('handles unknow action type', () => {
    const newState = commentsReducer([], {type: 'unknow'})

    expect(newState).toEqual([])
})