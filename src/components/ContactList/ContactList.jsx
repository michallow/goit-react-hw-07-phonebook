import propTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div className={css.contactListContainer}>
    {' '}
    <ul className={css.contactList}>
      {' '}
      {contacts &&
        contacts.map((contact, id) => (
          <li key={id} className={css.contactListItem}>
            {contact.name}: {contact.phone}
            <button
              type='button'
              className={css.contactItemBtn}
              onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      phone: propTypes.string.isRequired,
      createdAt: propTypes.string,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};