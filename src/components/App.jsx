import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './ContactForm/ContactForm.module.css';
import { fetchContacts, deleteContact } from '../redux/operations/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilters } from '../redux/selectors/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); // Dodajemy `dispatch` do tablicy zależności

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    const filteredContactList =
      contacts &&
      contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
    return filteredContactList;
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        background: 'lightgrey',
        margin: 20,
        borderRadius: 10,
        paddingBottom: 30,
      }}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter filter={filter} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
