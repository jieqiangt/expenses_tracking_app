import AddExpensesFields from "@/components/addExpensesFields";
import classes from "./addExpensesModal.module.scss";
import { createExpense, getCategoriesOptions } from "@/lib/actions";
import Modal from "../generics/modal";

export default async function AddExpensesModal() {
  const userId = 1;
  const categoryOptions = await getCategoriesOptions();

  return (
    <Modal dialogClassName={classes["add"]} backgroundClassName={classes["add-background"]}>
      <form
        className={classes["add-form"]}
        action={createExpense.bind(null, userId)}
      >
        <AddExpensesFields
          classes={classes}
          categoryOptions={categoryOptions}
        />
      </form>
    </Modal>
  );
}
