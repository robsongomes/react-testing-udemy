import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import { changeAuth } from 'actions'

class App extends Component {

    renderAuthButton() {
        return (
            this.props.isLoggedIn ? 
            <button onClick={() => this.props.changeAuth(false)}>Sign Out</button> : 
            <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
        )
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="post">Post a comment</Link>
                </li>
                <li>
                    {this.renderAuthButton()}
                </li>
            </ul>
        )
    }
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/" exact component={CommentList} />
                <Route path="/post" component={CommentBox} />
            </div>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth
    }
}

export default connect(mapStateToProps, { changeAuth })(App)