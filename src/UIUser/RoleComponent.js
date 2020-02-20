import React, { useState, Fragment } from 'react'
import AddRoleForm from '../forms/AddRoleForm';
import EditRoleForm from '../forms/EditRoleForm';
import RoleTable from '../tables/RoleTable';

const RoleComponent = () => {

    const rolesData = []

	const initialFormState = { id: null, name: '', privilegies: ''}
	// Setting state
  const [ roles, setRoles ] = useState(rolesData)
  const [ currentRole, setCurrentRole ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)
    
    // CRUD operations for Role 
	const addRole = role => {
		role.id = roles.length + 1
		setRoles([ ...roles, role ])
	}

	const deleteRole = id => {
		setEditing(false)

		setRoles(roles.filter(role => role.id !== id))
	}

	const updateRole = (id, updatedRole) => {
		setEditing(false)

		setRoles(roles.map(role => (role.id === id ? updatedRole : role)))
	}

	const editRow = role => {
		setEditing(true)

		setCurrentRole({ id: role.id, name: role.name, privilegies: role.privilegies})
	}

	return (
		<div className="container">
			<h1>Registry Service</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Role</h2>
							<EditRoleForm
								editing={editing}
								setEditing={setEditing}
								currentRole={currentRole}
								updateRole={updateRole}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add role</h2>
							<AddRoleForm addRole={addRole} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View roles</h2>
					<RoleTable roles={roles} editRow={editRow} deleteRole={deleteRole} />
				</div>
			</div>
	  	</div>  
	)
    
}


export default RoleComponent;