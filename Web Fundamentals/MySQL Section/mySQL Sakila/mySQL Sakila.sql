-- 1.
-- SELECT *
-- FROM SAKILA.CUSTOMER
-- INNER JOIN SAKILA.ADDRESS ON ADDRESS.ADDRESS_ID = CUSTOMER.ADDRESS_ID
-- WHERE ADDRESS.CITY_ID = '312'

-- 2.
-- SELECT 
--   FILM.TITLE
-- , FILM.DESCRIPTION
-- , FILM.RELEASE_YEAR
-- , FILM.RATING
-- , FILM.SPECIAL_FEATURES
-- , CATEGORY.NAME AS 'GENRE'
-- FROM SAKILA.FILM
-- INNER JOIN SAKILA.FILM_CATEGORY ON FILM.FILM_ID = FILM.FILM_ID
-- INNER JOIN SAKILA.CATEGORY ON CATEGORY.CATEGORY_ID = FILM_CATEGORY.CATEGORY_ID
-- WHERE CATEGORY.NAME = 'COMEDY'

-- 3.
-- SELECT 
--     ACTOR.ACTOR_ID
--   , CONCAT(ACTOR.FIRST_NAME, ' ', ACTOR.LAST_NAME) AS 'ACTOR_NAME'
--   , FILM.TITLE
--   , FILM.DESCRIPTION
--   , FILM.RELEASE_YEAR
-- FROM SAKILA.FILM
-- INNER JOIN SAKILA.FILM_ACTOR ON FILM_ACTOR.FILM_ID = FILM.FILM_ID
-- INNER JOIN SAKILA.ACTOR ON ACTOR.ACTOR_ID = FILM_ACTOR.ACTOR_ID
-- WHERE ACTOR.ACTOR_ID = '5';

-- 4.
-- SELECT 
--   CUSTOMER.FIRST_NAME
-- , CUSTOMER.LAST_NAME
-- , CUSTOMER.EMAIL
-- , ADDRESS.ADDRESS
-- , ADDRESS.ADDRESS2
-- FROM SAKILA.CUSTOMER
-- INNER JOIN SAKILA.ADDRESS ON ADDRESS.ADDRESS_ID = CUSTOMER.ADDRESS_ID
-- INNER JOIN SAKILA.CITY ON CITY.CITY_ID = ADDRESS.CITY_ID
-- INNER JOIN SAKILA.STORE ON STORE.STORE_ID = CUSTOMER.STORE_ID
-- WHERE STORE.STORE_ID = 1 AND CITY.CITY_ID IN ('1','42','312','459')

-- 5.
-- SELECT 
--   FILM.TITLE
-- , FILM.DESCRIPTION
-- , FILM.RELEASE_YEAR
-- , FILM.RATING
-- , FILM.SPECIAL_FEATURES
-- FROM SAKILA.FILM
-- INNER JOIN SAKILA.FILM_ACTOR ON FILM_ACTOR.FILM_ID = FILM.FILM_ID
-- INNER JOIN SAKILA.ACTOR ON ACTOR.ACTOR_ID = FILM_ACTOR.ACTOR_ID
-- WHERE FILM.SPECIAL_FEATURES LIKE '%BEHIND THE SCENES%' AND RATING = 'G'
-- AND ACTOR.ACTOR_ID = '15'

-- 6.
-- SELECT 
--   FILM.FILM_ID
-- , FILM.TITLE
-- , ACTOR.ACTOR_ID
-- , CONCAT(ACTOR.FIRST_NAME, ACTOR.LAST_NAME) AS ACTOR_NAME
-- FROM SAKILA.FILM
-- INNER JOIN SAKILA.FILM_ACTOR ON FILM_ACTOR.FILM_ID = FILM.FILM_ID
-- INNER JOIN SAKILA.ACTOR ON ACTOR.ACTOR_ID = FILM_ACTOR.ACTOR_ID
-- WHERE FILM.FILM_ID = '369'

-- 7.
-- SELECT 
--   FILM.FILM_ID
-- , FILM.TITLE
-- , FILM.DESCRIPTION
-- , FILM.RELEASE_YEAR
-- , FILM.RATING
-- , FILM.SPECIAL_FEATURES
-- , CATEGORY.NAME AS 'GENRE'
-- , FILM.RENTAL_RATE
-- FROM SAKILA.FILM
-- INNER JOIN SAKILA.FILM_CATEGORY ON FILM_CATEGORY.FILM_ID = FILM.FILM_ID
-- INNER JOIN SAKILA.CATEGORY ON CATEGORY.CATEGORY_ID = FILM_CATEGORY.CATEGORY_ID
-- WHERE
-- 	CATEGORY.NAME = 'DRAMA' 
-- AND FILM.RENTAL_RATE = '2.99';

-- 8.
-- SELECT 
--   FILM.TITLE
-- , FILM.DESCRIPTION
-- , FILM.RELEASE_YEAR
-- , FILM.RATING
-- , FILM.SPECIAL_FEATURES
-- , CATEGORY.NAME
-- , CONCAT(ACTOR.FIRST_NAME, ' ', ACTOR.LAST_NAME) AS ACTOR_NAME
-- FROM SAKILA.FILM
-- INNER JOIN SAKILA.FILM_ACTOR ON FILM_ACTOR.FILM_ID = FILM.FILM_ID
-- 	INNER JOIN SAKILA.ACTOR ON ACTOR.ACTOR_ID = FILM_ACTOR.ACTOR_ID
-- INNER JOIN SAKILA.FILM_CATEGORY ON FILM_CATEGORY.FILM_ID = FILM.FILM_ID
-- 	INNER JOIN SAKILA.CATEGORY ON CATEGORY.CATEGORY_ID = FILM_CATEGORY.CATEGORY_ID
-- WHERE ACTOR.ACTOR_ID = '23' AND CATEGORY.NAME = 'ACTION'





