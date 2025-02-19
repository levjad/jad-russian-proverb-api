CREATE TABLE Proverb (
    id SERIAL PRIMARY KEY,  -- SERIAL is PostgreSQL's auto-incrementing equivalent
    Russian_Proverb VARCHAR(255) NOT NULL,
    English_Translation VARCHAR(255) NOT NULL,
    Meaning_Explanation TEXT NOT NULL,
    Category VARCHAR(50) NOT NULL
);