CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  passwd VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email, passwd)
VALUES
  ('y0d3n', 'yoden@example.com', 'P@ssw0rd!'),
  ('John Doe', 'john@example.com', 'password1'),
  ('Jane Smith', 'jane@example.com', 'password2'),
  ('Michael Johnson', 'michael@example.com', 'password3'),
  ('Emily Davis', 'emily@example.com', 'password4'),
  ('Robert Wilson', 'robert@example.com', 'password5'),
  ('Sarah Thompson', 'sarah@example.com', 'password6'),
  ('David Anderson', 'david@example.com', 'password7'),
  ('Jennifer Lee', 'jennifer@example.com', 'password8'),
  ('Christopher Brown', 'christopher@example.com', 'password9'),
  ('Jessica Thomas', 'jessica@example.com', 'password10');


CREATE TABLE follows (
  follower_id INT NOT NULL,
  followee_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (follower_id, followee_id),
  FOREIGN KEY (follower_id) REFERENCES users (id),
  FOREIGN KEY (followee_id) REFERENCES users (id)
);

INSERT INTO follows (follower_id, followee_id) VALUES
  (2, 1),
  (3, 1),
  (4, 1),
  (5, 1),
  (6, 1),
  (7, 1),
  (8, 9),
  (9, 8);
