import classes from "./page.module.scss";
import { searchExpenses } from "@/lib/actions";
import {
  convertDateToString,
  getCurrentDateTime,
  subtractMonths,
} from "@/lib/utils";
import SearchResults from "@/components/searchResults";

export default async function SearchPage() {
  const { todayDateStr, todayDateTime } = getCurrentDateTime();
  const initialStartDate = subtractMonths(todayDateTime, 1);
  const initialStartDateStr = convertDateToString(initialStartDate);
  const initialFoundExpenses = await searchExpenses(
    initialStartDateStr,
    todayDateStr
  );

  return (
    <main className={classes["search"]}>
      <SearchResults
        classes={classes}
        initialFoundExpenses={initialFoundExpenses}
      />
    </main>
  );
}
