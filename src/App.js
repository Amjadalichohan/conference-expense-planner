import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses(prev => [expense, ...prev]);
  };

  return (
    <div>
      <Navbar />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;

