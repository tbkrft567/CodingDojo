-- 1. 
-- SELECT 
--   COUNTRIES.NAME
-- , LANGUAGES.LANGUAGE
-- , LANGUAGES.PERCENTAGE
-- FROM WORLD.COUNTRIES
-- INNER JOIN WORLD.LANGUAGES ON LANGUAGES.COUNTRY_CODE = COUNTRIES.CODE
-- WHERE LANGUAGE = 'SLOVENE'
-- ORDER BY PERCENTAGE DESC;

-- 2.
-- SELECT 
-- 	  COUNTRIES.NAME
-- 	, COUNT(CITIES.NAME) 
-- FROM WORLD.COUNTRIES
-- INNER JOIN WORLD.CITIES ON CITIES.COUNTRY_CODE = COUNTRIES.CODE
-- GROUP BY COUNTRIES.NAME
-- ORDER BY 2 DESC;

-- 3.
-- SELECT *
-- FROM WORLD.CITIES
-- WHERE COUNTRY_CODE = 'MEX'
-- AND POPULATION>500000

-- 4.
-- SELECT 
--   COUNTRIES.NAME
-- , LANGUAGES.LANGUAGE
-- , LANGUAGES.PERCENTAGE
-- FROM WORLD.COUNTRIES
-- INNER JOIN WORLD.LANGUAGES ON LANGUAGES.COUNTRY_CODE = COUNTRIES.CODE
-- WHERE PERCENTAGE > 89
-- ORDER BY PERCENTAGE DESC; 

-- 5.
-- SELECT 
-- 	NAME
-- 	, SURFACE_AREA
-- 	, POPULATION
-- FROM WORLD.COUNTRIES
-- WHERE 
-- 	SURFACE_AREA< 501 
-- AND POPULATION > 100000

-- 6.
-- SELECT COUNTRIES.NAME
-- , COUNTRIES.GOVERNMENT_FORM AS 'GOVERNMENTTYPE'
-- , CAPITAL AS 'CAPITALNUMBER'
-- , LIFE_EXPECTANCY AS 'LIFEEXPECTANCY'
-- FROM WORLD.COUNTRIES
-- -- INNER JOIN WORLD.CITIES ON CITIES.ID = COUNTRIES.CAPITAL
-- WHERE 
-- 		GOVERNMENT_FORM = 'CONSTITUTIONAL MONARCHY'
-- 	AND CAPITAL > 200
-- 	AND LIFE_EXPECTANCY > 75;

-- 7.
--  SELECT 
--    COUNTRIES.NAME
--  , CITIES.NAME
--  , CITIES.DISTRICT
--  , CITIES.POPULATION
--  FROM WORLD.COUNTRIES
--  INNER JOIN WORLD.CITIES ON CITIES.COUNTRY_CODE = COUNTRIES.CODE
--  WHERE COUNTRIES.NAME='ARGENTINA' AND CITIES.DISTRICT='BUENOS AIRES'
--  AND CITIES.POPULATION > 500000

-- 8.
-- SELECT 
--   COUNTRIES.REGION
-- , COUNT(ID)
-- FROM WORLD.COUNTRIES
-- GROUP BY COUNTRIES.REGION
-- ORDER BY 2 DESC


