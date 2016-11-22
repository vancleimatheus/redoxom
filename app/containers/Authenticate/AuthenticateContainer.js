import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import * as userActionCreators from 'redux/modules/users'


const AuthenticateContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  handleAuth (e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => { this.context.router.replace('feed') })
  },
  render() {
    console.log('Is Fetching', this.props.isFetching)
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  }
})

function mapStateToProps (state) {
  console.log('State', state)
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
} 

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AuthenticateContainer)
