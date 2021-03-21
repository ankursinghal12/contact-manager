import React, { useState } from 'react';
import ContactCard from '../components/contact-card/contact-card';
import {fetchFromLocalStorage, setToLocalStorage} from "../utils";

const ContactsListPage = () => {

  const [contacts, setContacts] = useState(fetchFromLocalStorage());

  const deleteContact = (index) => {
    contacts.splice(index, 1);
    setContacts([...contacts]);
    setToLocalStorage(contacts)
  }

  const createContactCards = () => {
    return contacts.map((contact, index) => {
      return (
        <ContactCard key={index} contact={contact} deleteContact={deleteContact} index={index}/>
      )
    });
  }

  return (
    <div>
      <h1 style={{marginTop:"1em"}}>Contacts List</h1>
      <div className="cards rows">
        {createContactCards()}
      </div>
    </div>
  )
}

export default ContactsListPage;
