INSERT INTO
    trs_expenses (
        exp_desc,
        amount,
        exp_month,
        exp_year,
        recurring,
        recurring_period,
        recurring_start,
        category_id,
        user_id
    )
SELECT
    exp_desc,
    amount,
    :exp_month AS "exp_month",
    :exp_year AS "exp_year",
    true AS recurring,
    recurring_period,
    recurring_start,
    category_id,
    user_id
FROM
    trs_recur_expenses
WHERE
    user_id = :user_id
    AND is_active = true;