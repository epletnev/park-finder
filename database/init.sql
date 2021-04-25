BEGIN;

DROP TABLE IF EXISTS users, parks CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL
);

CREATE TABLE parks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- CASCADE means delete the post if the author gets deleted
  park VARCHAR(255),
  location VARCHAR(255)
);

INSERT INTO users (username) VALUES
  ('Evgeny')
;

INSERT INTO parks (park, location, user_id) VALUES
  ('Green Park', 'London, UK', 1)
;

COMMIT;