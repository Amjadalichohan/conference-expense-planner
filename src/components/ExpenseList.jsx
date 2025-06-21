import React from 'react';

const ExpenseList = ({ expenses }) => (
  <ul>
    {expenses.map(exp => (
      <li key={exp.id}>{exp.title}: ${exp.amount.toFixed(2)}</li>
    ))}
  </ul>
);

export default ExpenseList;
