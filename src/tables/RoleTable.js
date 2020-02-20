import React from 'react'

const RoleTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Privilegies</th>
      </tr>
    </thead>
    <tbody>
      {props.roles.length > 0 ? (
        props.roles.map(role => (
          <tr key={role.id}>
            <td>{role.name}</td>
            <td>{role.privilegies}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(role)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteRole(role.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No roles</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default RoleTable