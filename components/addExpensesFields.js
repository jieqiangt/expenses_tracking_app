"use client";

import { getCurrentDateTime } from "@/lib/utils";
import DateField from "@/components/generics/form/dateField";
import SelectField from "@/components/generics/form/selectField";
import TextField from "@/components/generics/form/textField";

export default function AddExpensesFields({ classes, categoryOptions }) {
  const { todayDateStr } = getCurrentDateTime();

  return (
    <fieldset className={classes["add-form-fields"]}>
      <DateField
        fieldClassName={classes["add-form-field"]}
        name="expDate"
        label="Date"
        defaultValue={todayDateStr}
      />
      <SelectField
        fieldClassName={classes["add-form-field"]}
        name="categoryId"
        label="Category"
        options={categoryOptions}
      />
      <TextField
        fieldClassName={classes["add-form-field"]}
        name="expDesc"
        label="Description"
      />
      <TextField
        fieldClassName={classes["add-form-field"]}
        name="amount"
        label="Amount"
      />
      <button type="submit" className={classes["add-form-btn"]}>
        Create Expense
      </button>
    </fieldset>
  );
}
