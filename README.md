# Employee Tracker

A command-line application designed to help business owners manage departments, roles, and employees within their organization. This application enables users to view, add, and update employee information in a PostgreSQL database through a simple interface.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available SQL Queries](#available-sql-queries)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Walkthrough Video](#walkthrough-video)

## Description

The Employee Tracker is a content management system (CMS) that allows users to manage employee data directly from the command line. This tool provides a simple way to keep track of departments, roles, and employees in a structured and organized manner, helping business owners plan and organize their operations efficiently. The application is built with Node.js, PostgreSQL, and the Inquirer package for user interaction.

## Features

- **View Departments, Roles, and Employees**: Easily retrieve and view department names, role titles, and employee information.
- **Add New Data**: Add new departments, roles, and employees to the database.
- **Update Employee Role**: Update the role of existing employees in the organization.
- **Bonus Features** :
  - Update employee managers.
  - View employees by manager or department.
  - Delete departments, roles, and employees.
  - View the total budget utilized by each department.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/employee-tracker.git
    ```

2. Navigate to the project directory:

    ```bash
    cd employee-tracker
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Set up the environment variables for your PostgreSQL database by creating a `.env` file in the `Main` directory:

    ```plaintext
    DB_HOST=your_host
    DB_USER=your_user
    DB_PASSWORD=your_password
    DB_NAME=your_database
    ```

5. Import the database schema and seeds:

    ```bash
    psql -U your_user -d your_database -f db/schema.sql
    psql -U your_user -d your_database -f db/seeds.sql
    ```

6. Start the application:

    ```bash
    node dist/index.js
    ```

## Usage

To use the application, follow these steps:

1. Run the application from the command line using `node dist/index.js`.
2. You will be presented with a menu of options:
   - View all departments
   - View all roles
   - View all employees
   - Add a department
   - Add a role
   - Add an employee
   - Update an employee role
3. Select an option and follow the prompts to interact with the database and manage employee data.

## Available SQL Queries

- **View All Departments**: Retrieves department names and ids.
- **View All Roles**: Retrieves job titles, role ids, departments, and salaries.
- **View All Employees**: Retrieves employee details, including ids, names, job titles, departments, salaries, and managers.
- **Add Data**: Inserts new departments, roles, or employees into the database.
- **Update Employee Role**: Updates an employee’s role by id.
- **Bonus**:
  - View employees by manager or department.
  - Calculate and view the total budget for each department.
  - Delete departments, roles, or employees by id.

## Technologies Used

- **Node.js**: Backend environment for running the application.
- **Inquirer.js**: Command-line interface for user interactions.
- **pg**: PostgreSQL client for Node.js to handle database connections and queries.
- **PostgreSQL**: Database for storing department, role, and employee data.

## Project Structure
- **`db`**: Contains the schema and seed files for setting up the database.
- **`dist/index.js`**: Main file that handles user interaction and connects with the database.
- **`dist/queries.js`**: Contains SQL queries for managing database operations.
- **`.env`**: (Optional) Holds environment variables for database connection.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request to the main branch.

## License

This project is licensed under the MIT License.

## Walkthrough Video

A walkthrough video demonstrating the functionality of the Employee Tracker can be found [here](https://drive.google.com/file/d/1mGh-7dpaU9cvtywnOKTtJEG5WOTNnr6C/view).
