"use server";
import { Client } from "pg";
import fs from "fs/promises";
import { redirect } from "next/navigation";

export async function readSqlFile(filePath) {
  const queryBuffer = await fs.readFile(filePath);
  const query = queryBuffer.toString();
  return query;
}

export async function createExpense(userId, formData) {
  const expDate = new Date(formData.get("expDate"));
  const expenseToAdd = [
    formData.get("expDate"),
    expDate.getMonth() + 1,
    expDate.getFullYear(),
    formData.get("expDesc"),
    formData.get("amount"),
    +formData.get("categoryId"),
    false,
    userId,
  ];

  const query = await readSqlFile("./lib/sql/addExpense.sql");
  const client = new Client(`${process.env.DATABASE_URL}`);
  await client.connect();
  await client.query(query, expenseToAdd);
}

export async function getCategoriesOptions() {
  const client = new Client(`${process.env.DATABASE_URL}`);
  await client.connect();
  const query = await readSqlFile("./lib/sql/getCategoryOptions.sql");
  const res = await client.query(query);
  const data = res.rows;
  return data;
}
export async function searchExpenses(startDate, endDate) {
  const client = new Client(`${process.env.DATABASE_URL}`);
  await client.connect();
  const query = await readSqlFile("./lib/sql/searchExpenses.sql");
  const res = await client.query(query, [startDate, endDate]);
  const data = res.rows;
  return data;
}

export async function goToFilteredSearch(formData) {
  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");
  redirect(`/expenses/${startDate}/${endDate}`);
}
