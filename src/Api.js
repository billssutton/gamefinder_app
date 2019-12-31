import React, { Component } from 'react'
import Profiles from './Profiles'

class Api extends Component {

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'http://localhost:8080/god/findallprofiles'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        console.log(result)
        this.props.initialLoad(result.data)
      })
  }

  render() {
    const { profileData, removeProfile, initialLoad } = this.props
    return (
        <Profiles profiles={profileData} removeProfile={removeProfile} />
    )
  }
}

export default Api
