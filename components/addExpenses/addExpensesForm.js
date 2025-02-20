"use client";

import { createExpense } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function AddExpensesForm({ children, className }) {
  const router = useRouter();

  const handleSubmit = (formData) => {
    createExpense(userId, formData);
    router.back();
  };

  const userId = 1;
  return (
    <form className={className} action={handleSubmit}>
      {children}
    </form>
  );
}
