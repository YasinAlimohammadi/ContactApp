import React, { useState } from 'react';

const Contacts = () => {

    const [contact, setContact] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        setContact(contact => ({...contact, [name]: value}))
    }

    const addHandler = e => {
        console.log(contact)
    }

    return (
        <div>
            <div>
                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={contact.name}
                    onChange={changeHandler}
                />
                <input 
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    value={contact.lastName}
                    onChange={changeHandler}
                />
                <input 
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={contact.email}
                    onChange={changeHandler}
                />
                <input 
                    type='number' 
                    placeholder='Phone'
                    name='phone'
                    value={contact.phone}
                    onChange={changeHandler}
                />
                <button onClick={addHandler}>Add Contacts</button>
            </div>
        </div>
    );
};

export default Contacts;