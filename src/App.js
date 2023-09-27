import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddExpense from './AddExpense';
import AddUser from './AddUser';
import './App.css';
import Category from './Category';
import { useCategories, useExpenses, useUsers } from './data';
import UserDetailsModal from './UserDetailsModal';
function App() {
  const [activeTab, setActiveTab] = useState('userExpenses');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);
  const { users, setUsers } = useUsers();
  const { expenses, setExpenses } = useExpenses();
  const { categories } = useCategories();
 

  useEffect(() => {

}, [selectedUser,expenses,users]);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };
  
  const openViewUserModal = (user) => {
    setSelectedUser(user);
    setIsAddUserModalOpen(true);
  };

  const closeViewUserModal = () => {
    setSelectedUser(null);
    setIsAddUserModalOpen(false);
  };

  const openAddUserModal = () => {
    setIsAddUserModalOpen(true);
  };

  const closeAddUserModal = () => {
    setIsAddUserModalOpen(false);
  };

  const openAddExpenseModal = () => {
    setIsAddExpenseModalOpen(true);
  };

  const closeAddExpenseModal = () => {
    setIsAddExpenseModalOpen(false);
  };
                
  const handleAddUser = (user) => {
    const uuid = uuidv4();
    user.uuid = uuid
    user.expenses = new Set()
    user.totalExpense = 0
    users[uuid] = user;

    setIsAddUserModalOpen(false);
  };
  const handleAddExpense = (expense) => {
    const { userId, cost, category } = expense;
    const uuid = uuidv4();
    expense.uuid = uuid
    // expenses[uuid] = expense
      setExpenses((prevExpenses) => ({
    ...prevExpenses,
    [uuid]: expense,
  }));
   
    // update users table
    users[userId].totalExpense += cost
    users[userId].expenses.add(uuid)
    // add category total
    categories[category] += cost
    
    setIsAddExpenseModalOpen(false);
  };

const handleUpdateUser = (editedUser) => {
  const userId = selectedUser.uuid;
  setUsers((prevUsers) => ({
    ...prevUsers,
    [userId]: {
      ...prevUsers[userId],
      ...editedUser,
    },
  }));
};

  const handleUpdateExpense = (editedExpense) => {
  setExpenses((prevExpenses) => ({
    ...prevExpenses,
    [editedExpense.uuid]: editedExpense,
  }));
  };

  const deleteUser = (userId) => {
  // Remove the user from the users object
  //delete all expenses associated with this user
    const userExpenses = users[userId].expenses;
    if (userExpenses.expenses && userExpenses.expenses.size > 0) {
      userExpenses.forEach((expenseId) => {
        // update category
        const expenseCategory = expenses[expenseId].Category;
        categories[expenseCategory] -= expenses[expenseId].cost;
      delete expenses[expenseId];
    });
  }
  
  const updatedUsers = { ...users };
  delete users[userId];
  delete updatedUsers[userId];
  setUsers(updatedUsers)
}
 // Delete expense & update user's cost subtracting the cost of the deleted expense
 const deleteExpense = (expeId) => {
    const expenseUserId = expenses[expeId].userId;
    const userExpenses = users[expenseUserId].expenses
     const updatedUsers = { ...users };
   
    if (userExpenses.has(expeId)) {
      users[expenseUserId].expenses.delete(expeId);
      users[expenseUserId].totalExpense -= expenses[expeId].cost;

      // update category
      const expenseCategory = expenses[expeId].Category;
      categories[expenseCategory] -= expenses[expeId].cost;

      delete users[expenseUserId].expenses.delete(expeId);
      delete expenses[expeId];
      setUsers(updatedUsers)
    }
  };

  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      
      <div className="buttons">
        <button onClick={() => openAddUserModal()}>Add User</button>
        <button onClick={() => openAddExpenseModal()}>Add Expense</button>
      </div>

      <nav className="navbar">
        <button
          className={`nav-item ${activeTab === 'userExpenses' ? 'active' : ''}`}
          onClick={() => openTab('userExpenses')}
        >
          User Expenses
        </button>
        <button
          className={`nav-item ${activeTab === 'category' ? 'active' : ''}`}
          onClick={() => openTab('category')}
        >
          Category
        </button>
      </nav>

      <div className="content">
        {activeTab === 'userExpenses' && (
          <div>
            <h2>User Expenses</h2>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Total Expense</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(users).map((userId) => {
              const user = users[userId];
              return (
                  <tr key={userId}>
                    <td>{`${user.firstName} ${user.lastName}`}</td>
                    <td>{user.totalExpense}</td>
                    <td>
                      <button onClick={() => openViewUserModal(user)}>View</button>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(userId)}>Delete</button>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'category' && <Category />}
      </div>

      {/* User Details Modal */}
      {selectedUser &&(
      <UserDetailsModal
        expenses={expenses}
        user={selectedUser}
        onClose={closeViewUserModal}
        handleUpdateUser={handleUpdateUser}
        handleUpdateExpense={handleUpdateExpense}
        deleteExpense={deleteExpense}
      />
      )}
      {/* Add User Modal */}
      {isAddUserModalOpen && (
        <div className="modal">
          <AddUser handleAddUser={handleAddUser}  />
          <button onClick={() => closeAddUserModal()}>Close</button>
        </div>
      )}

      {/* Add Expense Modal */}
      {isAddExpenseModalOpen && (
        <div className="modal">
          <AddExpense users={users} handleAddExpense={handleAddExpense} />
          <button onClick={() => closeAddExpenseModal()}>Close</button>
        </div>
      )}
    </div>
  );
}
export default App;
