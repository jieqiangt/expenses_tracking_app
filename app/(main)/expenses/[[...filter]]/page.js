import classes from "./page.module.scss";
import { searchExpenses } from "@/lib/actions";
import {
  convertDateToString,
  getCurrentDateTime,
  subtractMonths,
} from "@/lib/utils";
import SearchResults from "@/components/searchResults";
import Link from "next/link";

export default async function SearchPage({ params }) {
  const { filter } = await params;
  let startDateStr;
  let endDateStr;

  if (filter) {
    startDateStr = filter[0];
    endDateStr = filter[1];
  }

  if (!filter) {
    const { todayDateStr, todayDateTime } = getCurrentDateTime();
    const startDate = subtractMonths(todayDateTime, 1);
    startDateStr = convertDateToString(startDate);
    endDateStr = todayDateStr;
  }

  const foundExpenses = await searchExpenses(startDateStr, endDateStr);

  return (
    <main className={classes["search"]}>
      <Link href="/add">Add Expense</Link>
      <SearchResults
        classes={classes}
        foundExpenses={foundExpenses}
        startDate={startDateStr}
        endDate={endDateStr}
      />
    </main>
  );
}
