// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react'
// import Table from './Table'
import Form from './Form'
import Api from './Api'

class App extends Component {
  state = {
    profiles: [],
  }

  removeProfile = index => {
      const url =
        'http://localhost:8080/profile/'+this.state.profiles[index].id+'/delete'

      fetch(url, {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
       })
        .then(result => result.json())
        .then(result => {
          const { profiles } = this.state
          this.setState({
            profiles: profiles.filter((character, i) => {
              return i !== index
            }),
          })
    })
  }

  handleSubmit = character => {
    this.setState({ profiles: [...this.state.profiles, character] })
  }

  initialLoad = character => {
    console.log("characters")
    console.log(character)
    console.log("combined")
    this.state.profiles.concat(character)
    console.log(this.state.profiles)
    this.setState({ profiles: [...character] })
  }

  render(){
    return (
      <div className="container">
        <Form handleSubmit={this.handleSubmit} />
        <Api profileData={this.state.profiles} removeProfile={this.removeProfile} initialLoad={this.initialLoad} />
      </div>
    )
  }
}

export default App;
