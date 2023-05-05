import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name}:{number}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
