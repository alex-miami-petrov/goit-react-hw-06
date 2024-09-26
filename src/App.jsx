import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { selectNameFilter, setNameFilter } from "./redux/filtersSlice";

// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (savedContacts && savedContacts.length > 0) {
  //     setContacts(savedContacts);
  //   } else {
  //     localStorage.setItem("contacts", JSON.stringify(initialContacts));
  //     setContacts(initialContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (contacts.length > 0) {
  //     localStorage.setItem("contacts", JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // const getFilteredContacts = () => {
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const handleAddContact = (newContact) => {
  //   setContacts((prevContacts) => [...prevContacts, newContact]);
  // };

  // const handleContactDelete = (contactId) => {
  //   setContacts((prevContacts) =>
  //     prevContacts.filter((contact) => contact.id !== contactId)
  //   );
  // };

  // const filteredContacts = getFilteredContacts();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Phonebook</h1>
      <div className="contact-form">
        <ContactForm onAddContact={handleAddContact} />
      </div>
      <div className="search-box">
        <SearchBox value={filter} onChange={handleFilterChange} />
      </div>
      <div className="contact-list">
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default App;
