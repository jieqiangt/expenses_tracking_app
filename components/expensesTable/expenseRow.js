import { convertDateToString } from "@/lib/utils";

export default function ExpenseRow({ expense }) {
  return (
    <tr>
      <td>{expense.expId}</td>
      <td>{convertDateToString(expense.expDate)}</td>
      <td>{expense.expDesc}</td>
      <td>{expense.expCat}</td>
      <td>{expense.expAmt}</td>
    </tr>
  );
}
