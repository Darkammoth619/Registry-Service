import React, { useState, useEffect } from 'react'

const EditRoleForm = props => {
  const [ role, setRole ] = useState(props.currentRole)

  useEffect(
    () => {
      setRole(props.currentRole)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setRole({ ...role, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateRole(role.id, role)
      }}
    >
            <label>Type</label>
			<input type="text" name="name" value={role.name} onChange={handleInputChange} />
			<label>Number</label>
			<input type="text" name="privilegies" value={role.privilegies} onChange={handleInputChange} />
      <button>Update role</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditRoleForm
