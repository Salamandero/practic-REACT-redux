import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addUsers } from 'redux/Users/usersSlice';

export const AddContactPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else {
      setAge(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name, age, id: nanoid() };
    dispatch(addUsers(newUser));
    reset();
  };
  const reset = () => {
    setName('');
    setAge('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          placeholder="Name"
        />
      </label>
      <label>
        Age
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={age}
          placeholder="Age"
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
