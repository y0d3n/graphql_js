CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  passwd VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email, passwd)
VALUES
  ('y0d3n', 'yoden@example.com', 'P@ssw0rd!'),
  ('John Doe', 'john@example.com', 'pw'),
  ('Jane Smith', 'jane@example.com', 'supersecret');