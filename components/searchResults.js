"use client";

import { useState } from "react";
import ExpensesTable from "@/components/expensesTable/expensesTable";
import SearchExpensesFields from "@/components/searchExpensesField";
export default function SearchResults({ classes, initialFoundExpenses }) {
  const [foundExpenses, setFoundExpenses] = useState(initialFoundExpenses);

  const displayExpenses =
    foundExpenses.length == 0 ? (
      <h1>No Expenses Found</h1>
    ) : (
      <ExpensesTable foundExpenses={foundExpenses} />
    );
  return (
    <>
      <form>
        <SearchExpensesFields
          classes={classes}
          setFoundExpenses={setFoundExpenses}
        />
      </form>
      {displayExpenses}
    </>
  );
}
