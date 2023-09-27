import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CategorySelect from './CategorySelect';

const AddExpense = ({ users, handleAddExpense }) => {
    
  const [newExpense, setNewExpense] = useState({
    userId: '',
    category: '',
    description: '',
    cost: 0, // Make sure to initialize it as a number
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prevState) => ({
    ...prevState,
    [name]: name === 'cost' ? parseFloat(value) : value,
  }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddExpense(newExpense);
    // Clear form fields after adding the expense
    setNewExpense({
      userId: '',
      category: '',
      description: '',
      cost: 0,
    });
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <select
            name="userId"
            value={newExpense.userId}
            onChange={handleChange}
            required
          >
            <option value="">Select User</option>
            {Object.keys(users).map((userId) => (
              <option key={userId} value={userId}>
                {users[userId].firstName} {users[userId].lastName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Category:
          <CategorySelect value={newExpense.category} onChange={handleChange}/>
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={newExpense.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cost:
          <input
            type="number"
            name="cost"
            value={newExpense.cost}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

AddExpense.propTypes = {
  users: PropTypes.object.isRequired,
  handleAddExpense: PropTypes.func.isRequired,
};


export default AddExpense;
