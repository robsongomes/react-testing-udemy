import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.comments.map(comment => <li key={comment}>{comment}</li>)
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList)
