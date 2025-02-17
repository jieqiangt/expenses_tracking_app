SELECT
    trs_expenses.id AS "expId",
    exp_date AS "expDate",
    exp_desc AS "expDesc",
    amount AS "expAmt",
    category AS "expCat"
FROM
    trs_expenses
    LEFT JOIN dim_categories ON trs_expenses.category_id = dim_categories.id
WHERE
    exp_date >= $1
    AND exp_date <= $2