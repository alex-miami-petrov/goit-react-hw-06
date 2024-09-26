import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // const handleDeleteContact = (id) => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.contactItem}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
