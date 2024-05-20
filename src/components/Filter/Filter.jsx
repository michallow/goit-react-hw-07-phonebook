import propTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(
      setFilter({
        filter: value,
      })
    );
  };
  return (
    <div>
      <label className={css.formLabel}>
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type='text'
        name='filter'
        placeholder='Enter filter'
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
};