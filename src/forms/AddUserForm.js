import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, firstname: '', username: '', lastname:'', password:'', email:'', birth:'', rfc:'', curp:''}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				if (!user.firstname || !user.username ) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="firstname" value={user.firstname} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <label>LastName</label>
			<input type="text" name="lastname" value={user.lastname} onChange={handleInputChange} />
            <label>Password</label>
			<input type="text" name="password" value={user.password} onChange={handleInputChange} />
            <label>Email</label>
			<input type="text" name="email" value={user.email} onChange={handleInputChange} />
            <label>Birth</label>
			<input type="text" name="birth" value={user.birth} onChange={handleInputChange} />
            <label>RFC</label>
			<input type="text" name="rfc" value={user.rfc} onChange={handleInputChange} />
            <label>CURP</label>
			<input type="text" name="curp" value={user.curp} onChange={handleInputChange} />
			<Button variant="primary" type="submit">Add new user</Button>
		</Form>
	)
}

export default AddUserForm
