import pool from './Connections';

// Function to get all departments
export const getDepartments = async () => {
    const query = 'SELECT * FROM department';
    const result = await pool.query(query);
    return result.rows;
};

// Function to get all roles
export const getRoles = async () => {
    const query = `
        SELECT role.id, role.title, role.salary, department.name AS department
        FROM role
        JOIN department ON role.department_id = department.id;
    `;
    const result = await pool.query(query);
    return result.rows;
};

// Function to get all employees
export const getEmployees = async () => {
    const query = `
        SELECT employee.id, employee.first_name, employee.last_name, role.title AS role,
               department.name AS department, role.salary, manager.first_name AS manager_first_name,
               manager.last_name AS manager_last_name
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS manager ON employee.manager_id = manager.id;
    `;
    const result = await pool.query(query);
    return result.rows;
};

// Function to add a department
export const addDepartment = async (name: string) => {
    const query = 'INSERT INTO department (name) VALUES ($1) RETURNING *';
    const values = [name];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// Function to add a role
export const addRole = async (title: string, salary: number, departmentId: number) => {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *';
    const values = [title, salary, departmentId];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// Function to add an employee
export const addEmployee = async (firstName: string, lastName: string, roleId: number, managerId: number | null) => {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [firstName, lastName, roleId, managerId];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// Function to update an employee's role
export const updateEmployeeRole = async (employeeId: number, roleId: number) => {
    const query = 'UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *';
    const values = [roleId, employeeId];
    const result = await pool.query(query, values);
    return result.rows[0];
};