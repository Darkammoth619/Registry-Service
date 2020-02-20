import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import React, { useState } from 'react'

const AddAddressForm = props => {
	const initialFormState = { id: null, country:'', city:'', state:'', zipcode:'', street:'', area:'', addresstype:'', moreinformation:''}
	const [ address, setAddress ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setAddress({ ...address, [name]: value })
	}

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				if (!address.country || !address.city ) return

				props.addAddress(address)
				setAddress(initialFormState)
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
			<Button variant="primary" type="submit">Add new user</Button>
		</Form>
	)
}

export default AddAddressForm
