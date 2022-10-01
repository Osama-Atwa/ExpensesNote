import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const expenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expenseData);
  };
  const [isEditing, setIsEditing] = useState(false);
  const onShowForm = () => {
    setIsEditing(true);
  };
  const onCancelForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={onShowForm}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm onSaveExpense={expenseHandler} onCancel={onCancelForm} />
      )}
    </div>
  );
};

export default NewExpense;
