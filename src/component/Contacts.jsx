import { useState } from 'react';
import { v4 } from 'uuid';

import ContactsList from './ContactsList';
import inputs from '../constant/inputs';

const Contacts = () => {

    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        id: "",
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
        if(
            !contact.name ||
            !contact.lastName ||
            !contact.email || 
            !contact.phone
        ) {
            setAlert("Please enter valid data!");
            return;
        }

        setAlert("");
        const newContact = {...contact, id: v4() };
        setContacts(contacts => ([...contacts, newContact]));
        console.log(contacts)
    }

    return (
        <div>
            <div>
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        type={input.type}
                        placeholder={input.placeholder}
                        name={input.name}
                        value={contact[input.name]}
                        onChange={changeHandler}
                    />
                ))}
                <button onClick={addHandler}>Add Contacts</button>
            </div>
            <div>
                {alert && <p>{alert}</p>}
            </div>
            <ContactsList contacts={contacts}/>
        </div>
    );
};

export default Contacts;