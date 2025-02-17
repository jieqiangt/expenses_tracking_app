"use client";

import DateField from "@/components/generics/form/dateField";
import SelectField from "@/components/generics/form/selectField";
import TextField from "@/components/generics/form/textField";
import {
  convertDateToString,
  getCurrentDateTime,
  subtractMonths,
} from "@/lib/utils";
import { searchExpenses } from "@/lib/actions";
import { useRef } from "react";

export default function SearchExpensesFields({ classes, setFoundExpenses }) {
  const { todayDateStr, todayDateTime } = getCurrentDateTime();
  const initialStartDate = subtractMonths(todayDateTime, 1);
  const initialStartDateStr = convertDateToString(initialStartDate);
  const startDateRef = useRef(initialStartDateStr);
  const endDateRef = useRef(todayDateStr);

  const handleSearch = async (event) => {
    event.preventDefault();
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;
    const foundExpenses = await searchExpenses(startDate, endDate);
    setFoundExpenses(() => foundExpenses);
  };
  return (
    <fieldset className={classes["search-form-fields"]}>
      <DateField
        fieldClassName={classes["search-form-field"]}
        name="startDate"
        label="Start Date"
        defaultValue={initialStartDateStr}
        ref={startDateRef}
      />
      <DateField
        fieldClassName={classes["search-form-field"]}
        name="endDate"
        label="End Date"
        defaultValue={todayDateStr}
        ref={endDateRef}
      />
      {/* <SelectField
        fieldClassName={classes["search-form-field"]}
        name="categoryId"
        label="Category"
        options={categoryOptions}
      /> */}
      <button
        type="button"
        onClick={handleSearch}
        className={classes["search-form-btn"]}
      >
        Search
      </button>
    </fieldset>
  );
}
