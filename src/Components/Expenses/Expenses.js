import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const saveYearOption = (year) => {
    setSelectedYear(year);
  };

  const expenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onYearHandler={saveYearOption} />
      <ExpensesChart expenses={expenses} />
      <ExpensesList items={expenses} />
    </Card>
  );
};

export default Expenses;
