import { useState } from 'react';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors/selectors';
import { addContact } from '../../redux/operations/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  const handleNameChange = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleNumberChange = e => {
    setPhone(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const contactList = [...contacts];
    if (
      contactList.findIndex(
        contact => name === contact.name
      ) !== -1
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(
        addContact({
          name,
          phone,
        })
      );
    }

    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>Name </label>
      <input
        className={css.formInput}
        type='text'
        name='name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder='Enter name'
        value={name}
        onChange={handleNameChange}
      />
      <label className={css.formLabel}>Number </label>
      <input
        className={css.formInput}
        type='tel'
        name='number'
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        required
        placeholder='Enter phone number'
        value={phone}
        onChange={handleNumberChange}
      />
      <button className={css.formBtn} type='submit'>
        Add contact
      </button>
    </form>
  );
};