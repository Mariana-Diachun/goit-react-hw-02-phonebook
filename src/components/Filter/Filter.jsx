import { nanoid } from 'nanoid';

export const Filter = ({ filter, onFilter }) => {
  const inputID = nanoid();
  return (
    <div>
      <label htmlFor={inputID}>
        Find contacts by name
        <input>
          {/* id={inputID}
          type="text" value={filter}
          name="filter" onChange={onFilter} */}
        </input>
      </label>
    </div>
  );
};
