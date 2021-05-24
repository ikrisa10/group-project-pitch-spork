DROP TABLE IF EXISTS albums CASCADE;
CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  email VARCHAR(320) NOT NULL,
  cover_url VARCHAR(500),
  release_year INTEGER NOT NULL,
  embed_url TEXT NOT NULL
)