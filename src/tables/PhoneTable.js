import React from 'react'

const PhoneTable = props => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>number</th>
      </tr>
    </thead>
    <tbody>
      {props.phones.length > 0 ? (
        props.phones.map(phone => (
          <tr key={phone.id}>
            <td>{phone.type}</td>
            <td>{phone.number}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(phone)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deletePhone(phone.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No phones</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default PhoneTable
