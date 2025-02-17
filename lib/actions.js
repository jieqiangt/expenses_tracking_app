"use server";
import { Client } from "pg";
import fs from "fs/promises";

export async function readSqlFile(filePath) {
  const queryBuffer = await fs.readFile(filePath);
  const query = queryBuffer.toString();
  return query;
}

export async function createExpense(formData, userId) {
  const expDate = new Date(formData.get("expDate"));
  const expenseToAdd = [
    formData.get("expDate"),
    expDate.getMonth() + 1,
    expDate.getFullYear(),
    formData.get("expDesc"),
    formData.get("amount"),
    +formData.get("categoryId"),
    true,
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
