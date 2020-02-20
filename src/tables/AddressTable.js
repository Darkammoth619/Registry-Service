import React from 'react'

const AddressTable = props => (
  <table>
    <thead>
      <tr>
        <th>Country</th>
        <th>City</th>
        <th>State</th> 
        <th>Zip Code</th> 
        <th>Street</th>
        <th>Address Type</th>
        <th>More Information</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.addresses.length > 0 ? (
        props.addresses.map(address => (
          <tr key={address.id}>
            <td>{address.country}</td>
            <td>{address.city}</td>
            <td>{address.state}</td>
            <td>{address.zipcode}</td>
            <td>{address.street}</td>
            <td>{address.addresstype}</td>
            <td>{address.moreinformation}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(address)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteAddress(address.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No addresses</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default AddressTable