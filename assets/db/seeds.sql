INSERT INTO departments (name)
VALUES  ('Salesrepresenative'),
        ('Lead Engineer'),
        ('Software Engineer'),
        ('Account Manager'),
        ('Accountant'),
        ('Legal Team Lead'),
        ('Lawyer');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Salesrepresenative', 100000, 1),
        ('Lead Engineer', 150000, 2),
        ('Software Engineer', 120000, 3),
        ('Account Manager', 160000, 4),
        ('Accountant', 125000, 5),
        ('Legal Team Lead', 250000, 6),
        ('Lawyer', 190000, 7);

INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES  ('John', 'Doe', 1, NULL),
        ('Mike', 'Smith', 2, 1),
        ('Sarah', 'Johnson', 3, 1),
        ('Jane', 'Doe', 4, 1),
        ('Joe', 'Smith', 5, 1),
        ('Sally', 'Johnson', 6, 1),
        ('Sam', 'Doe', 7, 1);