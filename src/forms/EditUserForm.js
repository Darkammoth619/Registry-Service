import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
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
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
