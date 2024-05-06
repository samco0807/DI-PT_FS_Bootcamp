-- Try to add a new actor with some blank fields. What do you think the outcome will be ?

INSERT INTO
    actors(
        firstname,
        lastname,
        age,
        nomber_oscars,
        gender
    )
VALUES (
        'Margot',
        'Robbie',
        '02.07.1990',
        0,
        'Female'
    )

-- IF NOT NULL in a field constraint --> an error should be displayed.

-- Count how many actors are in the table.

SELECT COUNT(*) FROM actors;

SELECT * FROM actors WHERE number_oscars >= 3

SELECT first_name, last_name
FROM actors
WHERE
    first_name = 'Jessica'
    AND last_name = 'Chastain';

SELECT * FROM actors LIMIT 5 ORDER BY first_name ASC