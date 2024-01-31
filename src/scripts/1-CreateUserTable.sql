CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    googleId varchar(255) Not null UNIQUE,
    public boolean DEFAULT false,
    username varchar(32) Not null
);
