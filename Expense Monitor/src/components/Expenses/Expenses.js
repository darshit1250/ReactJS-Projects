import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");

  const yearChangeHandler = (changedYear) => {
    console.log(changedYear);
    setEnteredYear(changedYear);
  };

  const filteredExpenses = props.items.filter(item => new Date(item.date).getFullYear() === +enteredYear)

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onYearChange={yearChangeHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
