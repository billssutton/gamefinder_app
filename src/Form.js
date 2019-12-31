import React, { Component } from 'react'


class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      email: '',
      name: '',
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {

    const url =
      'http://localhost:8080/god/createprofile?email='+this.state.email

    fetch(url, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
      .then(result => result.json())
      .then(result => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
        console.log(result)
      })
  }

  render() {
    const { email, name } = this.state;

    return (
      <form>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange} />
        <label>email</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange} />
        <input
          type="button"
          value="Submit"
          onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
