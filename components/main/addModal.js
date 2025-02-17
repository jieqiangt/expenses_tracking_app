import AddExpensesFields from "@/components/addExpensesFields";
import classes from "./addModal.module.scss";
import { createExpense, getCategoriesOptions } from "@/lib/actions";

export default async function AddModal() {
  const userId = 1;

  const handleSubmit = async (formData) => {
    "use server";
    createExpense(formData, userId);
  };

  const categoryOptions = await getCategoriesOptions();

  return (
    <modal className={classes["add"]}>
      <form className={classes["add-form"]} action={handleSubmit}>
        <AddExpensesFields
          classes={classes}
          categoryOptions={categoryOptions}
        />
      </form>
    </modal>
  );
}
