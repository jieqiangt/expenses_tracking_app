import DateField from "@/components/generics/form/dateField";
import SelectField from "@/components/generics/form/selectField";
import TextField from "@/components/generics/form/textField";
export default function SearchExpensesFields({ classes, startDate, endDate }) {
  return (
    <fieldset className={classes["search-form-fields"]}>
      <DateField
        fieldClassName={classes["search-form-field"]}
        name="startDate"
        label="Start Date"
        startingValue={startDate}
      />
      <DateField
        fieldClassName={classes["search-form-field"]}
        name="endDate"
        label="End Date"
        defaultValue={endDate}
      />
      {/* <SelectField
        fieldClassName={classes["search-form-field"]}
        name="categoryId"
        label="Category"
        options={categoryOptions}
      /> */}
      <button type="submit" className={classes["search-form-btn"]}>
        Search
      </button>
    </fieldset>
  );
}
