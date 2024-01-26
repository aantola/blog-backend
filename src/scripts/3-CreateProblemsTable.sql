CREATE table IF NOT EXISTS problem (
    id serial PRIMARY KEY,
    score integer NOT NULL,
    icon icon_name,
    solution varchar(255) NOT NULL
);


CREATE table IF NOT EXISTS problem_has_category (
    problem_id integer REFERENCES problem ON DELETE CASCADE,
    category_id integer REFERENCES category
);

CREATE table IF NOT EXISTS user_has_solves (
    problem_id integer REFERENCES problem ON DELETE CASCADE,
    user_id integer REFERENCES users ON DELETE CASCADE
);

