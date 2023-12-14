UPDATE employee manager_id = 1 WHERE id = 2;

SELECT departments.name AS department, roles.title, roles.salary, CONCAT(employees.first_name, ' ', employees.last_name) AS employee
FROM roles
LEFT JOIN departments ON roles.department_id = departments.id
LEFT JOIN employees ON roles.id = employees.role_id
ORDER BY departments.name;

SELECT CONCAT(employees.first_name, ' ', employees.last_name) AS employee, CONCAT(managers.first_name, ' ', managers.last_name) AS manager
FROM employees
LEFT JOIN employees AS managers ON employees.manager_id = managers.id
ORDER BY managers.last_name;


SELECT CONCAT(employees.first_name, ' ', employees.last_name) AS employee, roles.title, departments.name AS department
FROM employees
LEFT JOIN roles ON employees.role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id
ORDER BY departments.name;

DELETE FROM employees WHERE id = 1;
DELETE FROM roles WHERE id = 7;
DELETE FROM departments WHERE id = 4;

SELECT department, SUM(salary) AS budget
FROM (
    SELECT departments.name AS department, roles.salary
    FROM roles
    LEFT JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees ON roles.id = employees.role_id
    ORDER BY departments.name
) AS budget_table
GROUP BY department;

