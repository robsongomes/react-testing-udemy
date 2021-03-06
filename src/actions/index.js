import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'
import axios from 'axios'

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments',{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}