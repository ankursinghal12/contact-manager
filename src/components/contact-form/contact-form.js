import React, { useState, useEffect } from 'react';
import {isEmptyObject} from "../../utils";
import './form.scss';

const ContactForm = ({ contact, onSubmit }) => {

  const formParams = [
    {
      fieldName: 'First Name',
      fieldKey: 'firstName',
      style: {
        width: 'calc(50% - 10px)',
        marginRight: '10px'
      }
    },
    {
      fieldName: 'Last Name',
      fieldKey: 'lastName',
      style: {
        width: 'calc(50% - 10px)',
        marginLeft: '10px'
      }
    },
    {
      fieldName: 'Phone Number',
      fieldKey: 'phoneNumber'
    },
    {
      fieldName: 'Email',
      fieldKey: 'email'
    }];

  let initialContactDetails = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  }

  const [contactDetails, setContactDetails] = useState(initialContactDetails);

  useEffect(() => {
    if (!isEmptyObject(contact)) {
      setContactDetails({...contact})
    } else {
      setContactDetails(initialContactDetails);
    }
  }, [contact])

  const handleChange = (event) => {
    contactDetails[event.target.name] = event.target.value;
    setContactDetails({...contactDetails});
  }

  const handleSubmit = () => {
    if (!isEmptyObject(contactDetails)) {
      onSubmit(contactDetails);
    }
  }

  return (
    <div className="centered two column grid">
      <div className="column">
        <h1 style={{marginTop:"1em"}}>Add New Contact</h1>
        <form className="form" onSubmit={handleSubmit}>
          {
            formParams.map((param) => {
              return (
                <div key={param.fieldKey} className="field" style={param.style}><label>{param.fieldName}</label>
                  <div className="input">
                    <input name={param.fieldKey} type="text" value={contactDetails[param.fieldKey]} onChange={handleChange}/>
                  </div>
                </div>
              )
            })
          }
          <button type="submit" className="primary button">Save</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm;
