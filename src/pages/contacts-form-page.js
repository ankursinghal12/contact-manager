import React, { useState, useEffect } from 'react';
import ContactForm from '../components/contact-form/contact-form';
import { useHistory } from 'react-router-dom';
import {fetchFromLocalStorage, setToLocalStorage} from "../utils";

const ContactsFormPage = (props) => {
  const [contact, setContact] = useState({});
  const [index, setIndex] = useState(null);

  const history = useHistory();

  let contactList = fetchFromLocalStorage();

  const submit = (contact) => {
    if(!index) {
      contactList.push(contact);
    } else {
      contactList[index] = contact;
    }
    setToLocalStorage(contactList);
    history.replace('/');
  }

  useEffect(() => {
    const index = props.match.params.index;
    if(index){
      setContact(fetchFromLocalStorage()[index]);
      setIndex(index);
    } else {
      setContact({})
    }
  }, [props.match.params.index]);

  return (
    <div style={{padding: 20}}>
      <ContactForm contact={contact} onSubmit={submit} />
    </div>
  )
}
export default ContactsFormPage;
