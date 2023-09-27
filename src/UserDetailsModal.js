import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CategorySelect from './CategorySelect';

function UserDetailsModal({ user,expenses, onClose, handleUpdateUser,handleUpdateExpense,deleteExpense }) {
//   const { expenses } = useExpenses();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [editedExpenseId, setEditedExpenseId] = useState(null);
//   editedExpenseId is not defined and null
  let [expense, setExpense] = useState({});

  const handleExpenseDel = (expenseId) => {
    setIsEditing(true);
    
    deleteExpense(expenseId)
    setEditedExpenseId(null);
    
  };

  const handleSave = () => {
    setIsEditing(false);
    setEditedExpenseId(null);

    // Save changes to user and expense data
    handleUpdateUser(editedUser);
    handleUpdateExpense(editedExpenseId);
  };

  const hasExpenses = editedUser && editedUser.expenses.size > 0;

  const updateUserDetail = (e) => {
    const { name, value } = e.target;
      if (name === 'firstName' || name === 'lastName') {
    setEditedUser((prevEditedUser) => ({
      ...prevEditedUser,
      [name]: value,
    }), () => {
      // This callback will be called after setEditedUser is complete
      handleUpdateUser(editedUser);
    });

    } 
  }

  const updateExpenseDetail = (e,expenseId) =>{
    const { name, value } = e.target;
    setEditedExpenseId(expenseId);
    expense = expenses[expenseId]
    
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }),()=>{
      // handleUpdateExpense(editedExpenseId);
      handleUpdateExpense(expense);
    });
    
  }
  return (
    <div>
      <h3>Details</h3>
      <p>
        First Name:{' '}
        {isEditing ? (
          <input name="firstName" value={editedUser.firstName} onChange={updateUserDetail} />
        ) : (
          editedUser.firstName
        )}
      </p>
      <p>
        Last Name:{' '}
        {isEditing ? (
          <input name="lastName" value={editedUser.lastName} onChange={updateUserDetail} />
        ) : (
          editedUser.lastName
        )}
      </p>

      {/* Display User's Expenses */}
      {hasExpenses && (
        <div>
          <h3>Expenses</h3>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Category</th>
                <th>Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(editedUser.expenses).map((expenseId) => {
                const expenseData = expenses[expenseId];
                {/* const isExpenseEditing = isEditing && editedExpenseId === expenseId; */}
                if (!expenseData) {
                  return null;
                }
                return (
                  <tr key={expenseId}>
                    <td>
                      {isEditing ? (
                        <input
                          name="description"
                          placeholder={expense.description}
                          value={expense.description}
                          onChange={(e) => updateExpenseDetail(e, expenseId)}
                        />
                      ) : (
                        expenseData.description
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <CategorySelect
                          value={expense.category}
                          onChange={(e) => updateExpenseDetail(e, expenseId)}
                        />
                      ) : (
                        expenseData.category
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <input
                          name="cost"
                          value={expense.cost}
                          onChange={(e) => updateExpenseDetail(e, expenseId)}
                        />
                      ) : (
                        expenseData.cost
                      )}
                    </td>
                    <td>
                      <button onClick={() => handleExpenseDel(expenseId)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
}
UserDetailsModal.propTypes = {
  user: PropTypes.object.isRequired,
  expenses: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  handleUpdateUser: PropTypes.func.isRequired,
  handleUpdateExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default UserDetailsModal;
