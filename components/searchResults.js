import ExpensesTable from "@/components/expensesTable/expensesTable";
import SearchExpensesFields from "@/components/searchExpensesField";
import { goToFilteredSearch } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function SearchResults({
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
  const handleReset = async () => {
    "use server";
    redirect("/expenses");
  };
  return (
    <>
      <form action={goToFilteredSearch}>
        <SearchExpensesFields
          classes={classes}
          startDate={startDate}
          endDate={endDate}
        />
      </form>
      <form action={handleReset}>
        <button>Reset</button>
      </form>
      {displayExpenses}
    </>
  );
}
