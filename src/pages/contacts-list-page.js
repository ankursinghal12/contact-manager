import React, { useState } from 'react';
import ContactCard from '../components/contact-card/contact-card';
import {fetchFromLocalStorage, setToLocalStorage} from "../utils";
import Modal from "../components/modal/modal";

const ContactsListPage = () => {

  const [contacts, setContacts] = useState(fetchFromLocalStorage());
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const deleteContact = (index) => {
    setDeleteIndex(index);
    setShowModal(true);
  }

  const createContactCards = () => {
    return contacts.map((contact, index) => {
      return (
        <ContactCard key={index} contact={contact} deleteContact={deleteContact} index={index}/>
      )
    });
  }

  const handleNoClick = () => {
    setShowModal(false);
  }
  const handleYesClick = () => {
    setShowModal(false);
    contacts.splice(deleteIndex, 1);
    setContacts([...contacts]);
    setToLocalStorage(contacts)
  }

  return (
    <div>
      <h1 style={{marginTop:"1em"}}>Contacts List</h1>
      {
        (!contacts || contacts.length === 0) ? (
          <h2 className="no-contacts">There are no contacts to display</h2>
        ) : (
          <React.Fragment>
            <div className="cards rows">
              {createContactCards()}
            </div>
            {
              showModal && (
                <Modal onOutsideClick={()=>{setShowModal(false)}} onYesClick={handleYesClick} onNoClick={handleNoClick}/>
              )
            }
          </React.Fragment>
        )
      }
    </div>
  )
}

export default ContactsListPage;
