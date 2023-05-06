import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <li>
      <p>
        {name}:{number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
