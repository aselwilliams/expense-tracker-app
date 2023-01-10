import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses({ expenses, setExpenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter(
    (el) => el.date.getFullYear() === +filteredYear
  );

  // let expensesContent = <p style={{ color: "white" }}>No expenses found.</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //       key={expense.id}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          filteredYearHandler={filteredYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
