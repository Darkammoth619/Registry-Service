import React, { useState, Fragment } from 'react'
import AddPhoneForm from '../forms/AddPhoneForm';
import EditPhoneForm from '../forms/EditPhoneForm';
import PhoneTable from '../tables/PhoneTable';

const PhoneComponent = () => {

    const phonesData = []

	const initialFormState = { id: null, type: '', number: ''}
	// Setting state
  const [ phones, setPhones ] = useState(phonesData)
  const [ currentPhone, setCurrentPhone ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)
    
    // CRUD operations for Phone 
	const addPhone = phone => {
		phone.id = phones.length + 1
		setPhones([ ...phones, phone ])
	}

	const deletePhone = id => {
		setEditing(false)

		setPhones(phones.filter(phone => phone.id !== id))
	}

	const updatePhone = (id, updatedPhone) => {
		setEditing(false)

		setPhones(phones.map(phone => (phone.id === id ? updatedPhone : phone)))
	}

	const editRow = phone => {
		setEditing(true)

		setCurrentPhone({ id: phone.id, type: phone.type, number: phone.number})
	}

	return (
		<div className="container">
			<h1>Registry Service</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit phone</h2>
							<EditPhoneForm
								editing={editing}
								setEditing={setEditing}
								currentPhone={currentPhone}
								updatePhone={updatePhone}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add phone</h2>
							<AddPhoneForm addPhone={addPhone} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View phones</h2>
					<PhoneTable phones={phones} editRow={editRow} deletePhone={deletePhone} />
				</div>
			</div>
	  	</div>  
	)
    
}


export default PhoneComponent;