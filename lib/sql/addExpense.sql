INSERT INTO
    trs_expenses (
        exp_date,
        exp_month,
        exp_year,
        exp_desc,
        amount,
        category_id,
        recurring,
        user_id
    )
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)