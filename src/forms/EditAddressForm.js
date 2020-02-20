import React, { useState, useEffect } from 'react'

const EditAddressForm = props => {
  const [ address, setAddress ] = useState(props.currentAddress)

  useEffect(
    () => {
      setAddress(props.currentAddress)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setAddress({ ...address, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateAddress(address.id, address)
      }}
    >
            <label>Country</label>
			<input type="text" name="country" value={address.country} onChange={handleInputChange} />
			<label>City</label>
			<input type="text" name="city" value={address.city} onChange={handleInputChange} />
            <label>State</label>
			<input type="text" name="state" value={address.state} onChange={handleInputChange} />
            <label>ZipCode</label>
			<input type="text" name="zipcode" value={address.zipcode} onChange={handleInputChange} />
            <label>Street</label>
			<input type="text" name="street" value={address.street} onChange={handleInputChange} />
            <label>Area</label>
			<input type="text" name="area" value={address.area} onChange={handleInputChange} />
            <label>Address type</label>
			<input type="text" name="addresstype" value={address.addresstype} onChange={handleInputChange} />
            <label>More information</label>
			<input type="text" name="moreinformation" value={address.moreinformation} onChange={handleInputChange} />
      <button>Update Address</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditAddressForm
