import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './contact-card.scss';

const ContactCard = ({contact, deleteContact, index}) => {

  let history = useHistory();
  const [showDetails, setShowDetails] = useState(false);
  const handleEditClick = () => {
    history.push(`/contacts/edit/${index}`);
  };

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  }
  return (
    <div className="card row" onClick={handleCardClick}>
      <div className="content">
        <div className="header">{contact.firstName} {contact.lastName}</div>
        <div className="description">
          <p>{contact.phoneNumber}</p>
        </div>
        {
          showDetails && (
            <React.Fragment>
              <section className="details section">
                <p>
                  <label>First Name: </label>
                  <span className="description">{contact.firstName}</span>
                </p>
                <p>
                  <label>Last Name: </label>
                  <span className="description">{contact.lastName}</span>
                </p>
                <p>
                  <label>Phone Number: </label>
                  <span className="description">{contact.phoneNumber}</span>
                </p>
                <p>
                  <label>Email: </label>
                  <span className="description">{contact.email}</span>
                </p>
              </section>
            </React.Fragment>
          )
        }
      </div>
      <div className="bottom">
        <div className="two buttons">
          <button className="basic button green icon" onClick={handleEditClick}>
            <i style={{fontSize: 28}} className="fa fa-pencil-square-o" aria-hidden="true"/>
          </button>
          <button className="red basic button icon" onClick={(event) => {event.stopPropagation(); deleteContact(index)}}>
            <i style={{fontSize: 28}} className="fa fa-trash" aria-hidden="true"/>
          </button>
        </div>
      </div>
    </div>
  )
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
}

export default ContactCard;
