import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = ({ contacts }) => (
  const dispach = useDispatch();
    
  <ul className={s.contactList}>
    {contacts.map((contact) => (
      <li key={contact.id} className={s.contactItem}>
        <Contact
          name={contact.name}
          number={contact.number}
          onDelete={dispach(deleteContact(contact.id))}
        />
      </li>
    ))}
  </ul>
);

export default ContactList;
