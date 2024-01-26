CREATE TYPE icon_name as ENUM('Interests');


CREATE table IF NOT EXISTS blogpost (
    id serial PRIMARY KEY,
    blogpost text not NULL,
    title varchar(255) not NULL,
    icon icon_name
);

CREATE table IF NOT EXISTS category (
    id serial PRIMARY KEY,
    category varchar(255)
);

CREATE table IF NOT EXISTS blogpost_has_category (
    blog_id integer REFERENCES blogpost ON DELETE CASCADE,
    category_id integer REFERENCES category
);