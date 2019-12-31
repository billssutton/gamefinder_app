import React from 'react'

const Profiles = props => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            <table>
              <thead>
                <tr>
                  <th>First</th>
                  <th>Last</th>
                  <th>Email</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
              {props.profiles.map((profile, index) => (
                  <tr key={profile.email} className="card-body">
                      <td className="card-title">{profile.firstName}</td>
                      <td className="card-subtitle mb-2 text-muted">{profile.lastName}</td>
                      <td className="card-text">{profile.email}</td>
                      <td>
                        <button onClick={() => props.removeProfile(index)}>Delete</button>
                      </td>
                  </tr>
              ))}
              </tbody>
            </table>
        </div>
    )
};

export default Profiles
