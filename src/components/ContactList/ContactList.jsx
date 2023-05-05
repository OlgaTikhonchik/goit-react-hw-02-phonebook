import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
        // key={id}
        // id={id}
        // name={name}
        // number={number}
        // onDeleteContact={() = onDelete(id)}
        />
      ))}
    </ul>
    // <ul>
    //   {contacts.map(({ id, name, number }) => (
    //     <li key={id}>
    //       <p>{name}</p>
    //       <p>{number}</p>
    //       <button onClick={() => onDelete(id)}>Видалити</button>
    //     </li>
    //   ))}
    // </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
