import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { ContactItem } from 'components/ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  // const contactId = nanoid();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={(id = onDelete(id))}
        />
      ))}
    </ul>
    // <ul>
    //   {contacts.map(({ id, name, number }) => (
    //     <li key={id}>
    //       <p>
    //         {name} : {number}
    //       </p>

    //       <button onClick={() => onDelete(id)}>Delete</button>
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
