import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Username</th>
        <th>Lastname</th> 
        <th>Password</th> 
        <th>Birth</th>
        <th>RFC</th>
        <th>CURP</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.firstname}</td>
            <td>{user.username}</td>
            <td>{user.lastname}</td>
            <td>{user.password}</td>
            <td>{user.birth}</td>
            <td>{user.rfc}</td>
            <td>{user.curp}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
