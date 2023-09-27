import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AddUser = ({ handleAddUser }) => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
  });

  const [validationError, setValidationError] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
    // Clear validation error when user starts typing
    setValidationError({
      ...validationError,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if first name and last name are at least two characters long and contain only English letters
    const isFirstNameValid = /^[a-zA-Z]{2,}$/.test(newUser.firstName);
    const isLastNameValid = /^[a-zA-Z]{2,}$/.test(newUser.lastName);

    if (isFirstNameValid && isLastNameValid) {
      handleAddUser(newUser);
    } else {
      // Set validation error messages
      setValidationError({
        firstName: isFirstNameValid ? '' : 'First name must be at least two characters long and contain only English letters.',
        lastName: isLastNameValid ? '' : 'Last name must be at least two characters long and contain only English letters.',
      });
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={newUser.firstName}
            onChange={handleChange}
            required
          />
          <span className="error">{validationError.firstName}</span>
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={newUser.lastName}
            onChange={handleChange}
            required
          />
          <span className="error">{validationError.lastName}</span>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
AddUser.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
};

export default AddUser;
