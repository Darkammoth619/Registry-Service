import React, { useState, Fragment } from 'react'
import axios from 'axios';
import AddUserForm from '../forms/AddUserForm';
import EditUserForm from '../forms/EditUserForm';
import UserTable from '../tables/UserTable';

const UserComponent = () => {
	var usersData=[];

	//Axios calls
	axios.get(`http://localhost:8080/jxrs-registry/v1/users`).then(res=>{
			console.log(res.data);
			console.log(res.data.length);
			res.data.forEach(usermod=>{
				usersData=[
					{id:usermod.id, firstname: usermod.firstName, username:usermod.userName, lastname:usermod.lastName, password:usermod.password, email:usermod.email, birth:usermod.birth, rfc:usermod.rfc, curp:usermod.curp}
				]
			})

		});

	const initialFormState = { id: null, firstname: '', username: '', lastname: '', password:'', email:'', birth:'', rfc:'', curp:''}

	// Setting state
  const [ users, setUsers ] = useState(usersData)
  const [ currentUser, setCurrentUser ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)

    // CRUD operations for User 
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, firstname: user.firstname, username: user.username, lastname: user.lastname, password: user.password, email: user.email, birth: user.birth, rfc:user.rfc, curp:user.curp })
	}

	return (
		<div className="container">
			<h1>Registry Service</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
	  	</div>  
	)
    
}


export default UserComponent;