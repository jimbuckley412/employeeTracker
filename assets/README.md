# employee-tracker

Employee Tracker is a command line application that allows the user to view and manage the departments, roles, and employees in a company. The user can add departments, roles, and employees, view departments, roles, and employees, and update employee roles.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

employee-tracker is a command line application that allows the user to view and manage the departments, roles, and employees in a company. The user can add departments, roles, and employees, view departments, roles, and employees, and update employee roles. The application uses the [Inquirer package](https://www.npmjs.com/package/inquirer) to prompt the user for input and the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

## Features

List the key features of your project.

- Add departments, roles, employees
- View departments, roles, employees
- Update employee roles

## Getting Started

I started by creating a database schema containing three tables: department, role, and employee. The department table contains the department id and department name. The role table contains the role id, title, salary, and department id. The employee table contains the employee id, first name, last name, role id, and manager id. The role id and manager id are foreign keys that reference the role id and employee id in the role and employee tables, respectively.

### Prerequisites



### Installation

Step-by-step guide on how to install, configure, and run your project.

1. Clone the repository.
   ```bash
   git clone https://github.com/yourusername/yourproject.git
    ```
2. Install all dependencies.
    ```bash
    npm install
    ```
3. Create a .env file in the root directory of the project. Add the following to the .env file, replacing the values with your MySQL username and password.
    ```bash
    DB_USER='yourusername'
    DB_PW='yourpassword'
    ```
4. Create the database and tables by running the schema.sql file in the db folder.
    ```bash
    mysql -u yourusername -p
    source db/schema.sql
    ```
5. Seed the database by running the seeds.sql file in the db folder.
    ```bash
    mysql -u yourusername -p
    source db/seeds.sql
    ```
6. Start the application.
    ```bash
    npm start
    ```
7. Use the arrow keys to select an option from the menu and press enter to submit your choice. Follow the prompts to add, view, or update the database.

## Usage

![Employee Tracker](./assets/images/employee-tracker.gif)

## API Reference

List all APIs used in your project, where to find them, and how to use them.

- [Inquirer package](https://www.npmjs.com/package/inquirer)
- [MySQL2 package](https://www.npmjs.com/package/mysql2)

## Contributing

If you would like to contribute to this project, please submit a pull request and include a detailed description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- [Inquirer package](https://www.npmjs.com/package/inquirer)
- [MySQL2 package](https://www.npmjs.com/package/mysql2)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [MySQL Tutorial](https://www.mysqltutorial.org/)
- [MySQL Tutorial - Joins](https://www.mysqltutorial.org/mysql-join/)
- [MySQL Tutorial - Foreign Key](https://www.mysqltutorial.org/mysql-foreign-key/)

## Questions

If you have any questions about the repo, open an issue or contact me directly at [jimbuckley412@gmail.com]

You can find more of my work at [jimbuckley412](
