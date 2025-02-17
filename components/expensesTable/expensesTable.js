import ExpenseRow from "./expenseRow";

export default function ExpensesTable({ foundExpenses }) {
  return (
    <table>
      <caption></caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {foundExpenses.map((expense) => (
          <ExpenseRow key={expense.expId} expense={expense} />
        ))}
      </tbody>
    </table>
  );
}
