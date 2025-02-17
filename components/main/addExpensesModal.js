import AddExpensesFields from "@/components/main/addExpensesFields";
import classes from "./addExpensesModal.module.scss";
import { createExpense, getCategoriesOptions } from "@/lib/actions";
import Modal from "../generics/modal";
import AddExpensesForm from "./addExpensesForm";

export default async function AddExpensesModal() {
  const categoryOptions = await getCategoriesOptions();

  return (
    <Modal
      dialogClassName={classes["add"]}
      backgroundClassName={classes["add-background"]}
    >
      <AddExpensesForm className={classes["add-form"]}>
        <AddExpensesFields
          classes={classes}
          categoryOptions={categoryOptions}
        />
      </AddExpensesForm>
    </Modal>
  );
}
