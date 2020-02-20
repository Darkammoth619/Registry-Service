import React, { useState, Fragment } from 'react'
import AddAddressForm from '../forms/AddAddressForm';
import EditAddressForm from '../forms/EditAddressForm';
import AddressTable from '../tables/AddressTable';

const AddressComponent = () => {

    const addressesData = []

	const initialFormState = { id: null, country:'', city:'', state:'', zipcode:'', street:'', area:'', addresstype:'', moreinformation:''}

	// Setting state
  const [ addresses, setAddress ] = useState(addressesData)
  const [ currentAddress, setCurrentAddress ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)
    
    // CRUD operations for User 
	const addAddress = address => {
		address.id = addresses.length + 1
		setAddress([ ...addresses, address ])
	}

	const deleteAddress = id => {
		setEditing(false)

		setAddress(addresses.filter(address => address.id !== id))
	}

	const updateAddress = (id, updatedAddress) => {
		setEditing(false)

		setAddress(addresses.map(address => (address.id === id ? updatedAddress : address)))
	}

	const editRow = address => {
		setEditing(true)

		setCurrentAddress({ id: address.id, country: address.country, city: address.city, state: address.state, zipcode: address.zipcode, street: address.street, area: address.area, addresstype: address.addresstype, moreinformation: address.moreinformation })
	}

	return (
		<div className="container">
			<h1>Registry Service</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit address</h2>
							<EditAddressForm
								editing={editing}
								setEditing={setEditing}
								currentAddress={currentAddress}
								updateAddress={updateAddress}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Address</h2>
							<AddAddressForm addAddress={addAddress} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<AddressTable addresses={addresses} editRow={editRow} deleteAddress={deleteAddress} />
				</div>
			</div>
	  	</div>  
	)
    
}


export default AddressComponent;