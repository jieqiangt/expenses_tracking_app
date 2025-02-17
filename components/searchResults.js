import ExpensesTable from "@/components/expensesTable/expensesTable";
import SearchExpensesFields from "@/components/searchExpensesField";
import { goToFilteredSearch } from "@/lib/actions";
export default function SearchResults({
  classes,
  foundExpenses,
  startDate,
  endDate,
}) {
  const displayExpenses =
    foundExpenses.length == 0 ? (
      <h1>No Expenses Found</h1>
    ) : (
      <ExpensesTable foundExpenses={foundExpenses} />
    );
  return (
    <>
      <form action={goToFilteredSearch}>
        <SearchExpensesFields
          classes={classes}
          startDate={startDate}
          endDate={endDate}
        />
      </form>
      {displayExpenses}
    </>
  );
}
