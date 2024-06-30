
EXERCICES NOT FINISHED DID NOT SUCCEEDED TO COMPLETE


-- 1-- Get a list of all the languages, from the language table.

SELECT name 
FROM language

-- 2-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.

SELECT film.title, film.description, film.language
FROM film
INNER JOIN language
ON language.language_id=film.language_id

-- 3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

SELECT language.name, film.title, film.description
FROM language
LEFT OUTER JOIN movie
ON language.language_id=film.language_id

-- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.

CREATE TABLE new_film (
    film_id SERIAL NOT NULL,
    film_name VARCHAR(50) NOT NULL, 
	PRIMARY KEY (id_name)
);

INSERT INTO new_film (film_name) 
VALUES 
('Titanic'), 
('The Curious Case of Benjamin Button'),
('Live and Become'),

-- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.

CREATE TABLE customer_review (
    review_id SERIAL NOT NULL,
    film_id INTEGER NOT NULL,
    language_id INTEGER NOT NULL,
    title VARCHAR(30) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10) NOT NULL,
    review_text VARCHAR NOT NULL,
    last_update DATE,
	PRIMARY KEY (review_id)
    CONSTRAINT fk_film, fk_language
        REFERENCES new_film(film_id), language(language_id)
             ON DELETE CASCADE
);

INSERT INTO customer_review (title, score, review_text, last_update, film_id, language_id)
VALUES
	('masterpiece','10','One of the greatest movies of all times',12-12-2023, 1, 9),
	('beautiful', '10', 'A very touching movie',12-12-2023,2,10),

DELETE FROM new_film WHERE review_id = 1;

-- If we delete one film that has a review, it deletes every film that has a review and make the table costumer_review empty.
&
-- Ex 2:

-- 1-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film.language_id
SET language.name = 'english'
WHERE language.name='french'

-- 2-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

store_id and address_id,

-- 3 --We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

DROP TABLE customer_review;
To drop this table it depends the CONSTRAINT, if it is DELETE RESTRICTIVE or DELETE CASCADE.

-- 4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).



-- 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)


-- 6. Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.


SELECT film.title
FROM film
WHERE actor.first_name='Penelope' AND actor.last_name='Monroe' AND film.description LIKE '%sumo wrestler%'

SELECT film.title
FROM film, category
WHERE category.name='documentary' AND film.length<1h and rating='R'