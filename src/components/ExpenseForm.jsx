import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ title, amount: parseFloat(amount), id: Date.now() });
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Expense Title" required />
      <input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
