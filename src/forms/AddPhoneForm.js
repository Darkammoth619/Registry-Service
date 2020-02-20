import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import React, { useState } from 'react'

const AddPhoneForm = props => {
	const initialFormState = { id: null, type: '', number: ''}
	const [ phone, setPhone ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setPhone({ ...phone, [name]: value })
	}

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				if (!phone.type || !phone.number ) return

				props.addPhone(phone)
				setPhone(initialFormState)
			}}
		>
			<label>Type</label>
			<input type="text" name="type" value={phone.type} onChange={handleInputChange} />
			<label>Number</label>
			<input type="text" name="number" value={phone.number} onChange={handleInputChange} />
			<Button variant="primary" type="submit">Add new phone</Button>
		</Form>
	)
}

export default AddPhoneForm
