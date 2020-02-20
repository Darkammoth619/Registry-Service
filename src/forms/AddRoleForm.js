import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import React, { useState } from 'react'

const AddRoleForm = props => {
	const initialFormState = { id: null, name: '', privilegies: ''}
	const [ role, setRole ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setRole({ ...role, [name]: value })
	}

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				if (!role.name || !role.privilegies ) return

				props.addRole(role)
				setRole(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={role.name} onChange={handleInputChange} />
			<label>Privelegies</label>
			<input type="text" name="privilegies" value={role.privilegies} onChange={handleInputChange} />
			<Button variant="primary" type="submit">Add new role</Button>
		</Form>
	)
}

export default AddRoleForm
