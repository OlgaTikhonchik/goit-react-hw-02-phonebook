import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChange }) => {
  const inputId = nanoid();
  return (
    <div>
      <label htmlFor={inputId}> Find contacts by name :</label>
      <input type="text" value={value} id={inputId} onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
