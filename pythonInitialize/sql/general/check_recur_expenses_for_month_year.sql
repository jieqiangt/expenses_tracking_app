SELECT
    *
FROM
    trs_expenses
WHERE
    exp_month = :exp_month
    AND exp_year = :exp_year
    AND exp_date IS NULL;