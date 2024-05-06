-- CREATE DATABASE bootcamp

CREATE TABLE
    students(
        id serial PRIMARY KEY,
        last_name VARCHAR (300) NOT NULL,
        first_name VARCHAR (300) NOT NULL,
        birth_date DATE NOT NULL
    )

-- -- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
-- SELECT * FROM students WHERE birth_date => '1/01/2000'

-- -- Fetch the students whose id’s are equal to 1 AND 3 .
-- SELECT * FROM students WHERE id = 3 and id=1


-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT * FROM students WHERE first_name like '%%a%'

-- Fetch the students whose first_names end with the letter a.
SELECT * FROM students WHERE first_name like '%a'

-- Fetch the students whose first_names start with the letter a.
SELECT * FROM students WHERE first_name like 'a%'

-- Fetch the students whose first_names contain the letter a.
SELECT * FROM students WHERE first_name like '%a%'

-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'

-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'

SELECT * FROM students

-- INSERT INTO
--     students(
--         last_name,
--         first_name,
--         birth_date
--     )
-- VALUES (
--         'Marc',
--         'Benichou',
--         '02/11/1998'
--     ), ('Yoan', 'Cohen', '03/12/2010'), (
--         'Lea',
--         'Benichou',
--         '27/07/1987'
--     ), ('Amelia', 'Dux', '07/04/1996'), ('David', 'Grez', '14/06/2003'), (
--         'Omer',
--         'Simpson',
--         '03/10/1980'
--     )
