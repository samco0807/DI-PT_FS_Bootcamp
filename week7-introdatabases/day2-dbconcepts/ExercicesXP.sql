-- Ex 1:

-- All items, ordered by price (lowest to highest).

SELECT * 
FROM items 
ORDER BY product_price asc

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).

SELECT * 
FROM items
WHERE product_price>=80
ORDER BY product_price desc

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.

SELECT customer_firstname, costumer_lastname 
FROM customers
ORDER BY first_name asc
LIMIT 3

-- All last names (no other columns!), in reverse alphabetical order (Z-A)

SELECT costumer_lastname
FROM customers
ORDER BY costumer_lastname desc


