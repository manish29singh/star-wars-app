import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { USERS } from "../seed"
import * as AuthActions from "../actions/AuthActions"

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      error: ""
    }
  }

  onInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onLogin = e => {
    e.preventDefault()
    const { username, password } = this.state
    const user = USERS.find(u => username === u.username && password === u.password)
    if (user) {
      this.props.onLogin(username)
      localStorage.setItem("user", user.username)
      this.props.history.push('/')
    } else {
      this.setState({ error: "Username or password is not correct." })
    }
  }

  render() {
    const { username, password, error } = this.state
    return (
      <>
        {this.props.user && <Redirect to="/" />}
        <form onSubmit={this.onLogin} method="post">
          <div className="form-group login-container pt-5">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.onInputChange}
              required
            />
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.onInputChange}
              required
            />
            <br />
            <button className="btn btn-primary" type="submit">
              Login
            </button>
            {error && <p className="pt-4 error-text">{error}</p>}
          </div>
        </form>
      </>
    )
  }
}

const mapDispatchToProps = dipatch => ({
  onLogin: user => dipatch(AuthActions.onLogin(user))
})

export default connect(
  null,
  mapDispatchToProps
)(Login)
