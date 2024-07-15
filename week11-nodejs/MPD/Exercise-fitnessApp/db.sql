-- Create database
CREATE TABLE exercises (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  category VARCHAR(50) NOT NULL,
  description VARCHAR(200) NOT NULL,
  muscle_group VARCHAR(50) NOT NULL,
  created_at DATETIME - format: YYYY-MM-DD HH:MI:SS NOT NULL,
  updated_at DATETIME - format: YYYY-MM-DD HH:MI:SS NOT NULL,
);

-- Insert database
INSERT INTO exercises (name, category, description, muscle_group, created_at, updated_at) VALUES
('Strech', 'cardio'),

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  description VARCHAR(200) NOT NULL,
  muscle_group VARCHAR(50) NOT NULL,
  created_by VARCHAR(50) NOT NULL,
  created_at DATETIME - format: YYYY-MM-DD HH:MI:SS NOT NULL,
  updated_at DATETIME - format: YYYY-MM-DD HH:MI:SS NOT NULL,
);

INSERT INTO workouts (title, description,created_by, created_at, updated_at) VALUES
('Strech', 'cardio', Samuel, 17.07.2024, ),

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(50) UNIQUE NOT NULL,
  created_at DATETIME - format: YYYY-MM-DD HH:MI:SS NOT NULL,
  updated_at DATETIME - format: YYYY-MM-DD HH:MI:SS NOT NULL,
);

INSERT INTO users (title, description, muscle_group,created_at,updated_at) VALUES
('Strech', 'cardio'),
