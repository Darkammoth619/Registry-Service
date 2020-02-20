import React, { useState, useEffect } from 'react'

const EditPhoneForm = props => {
  const [ phone, setPhone ] = useState(props.currentPhone)

  useEffect(
    () => {
      setPhone(props.currentPhone)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setPhone({ ...phone, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updatePhone(phone.id, phone)
      }}
    >
            <label>Type</label>
			<input type="text" name="type" value={phone.type} onChange={handleInputChange} />
			<label>Number</label>
			<input type="text" name="number" value={phone.number} onChange={handleInputChange} />
      <button>Update phone</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditPhoneForm
