"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployeeRole = exports.addEmployee = exports.addRole = exports.addDepartment = exports.getEmployees = exports.getRoles = exports.getDepartments = void 0;
const Connections_1 = require("./Connections");
// Function to get all departments
const getDepartments = async () => {
    const query = 'SELECT * FROM department';
    const result = await Connections_1.default.query(query);
    return result.rows;
};
exports.getDepartments = getDepartments;
// Function to get all roles
const getRoles = async () => {
    const query = `
        SELECT role.id, role.title, role.salary, department.name AS department
        FROM role
        JOIN department ON role.department_id = department.id;
    `;
    const result = await Connections_1.default.query(query);
    return result.rows;
};
exports.getRoles = getRoles;
// Function to get all employees
const getEmployees = async () => {
    const query = `
        SELECT employee.id, employee.first_name, employee.last_name, role.title AS role,
               department.name AS department, role.salary, manager.first_name AS manager_first_name,
               manager.last_name AS manager_last_name
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS manager ON employee.manager_id = manager.id;
    `;
    const result = await Connections_1.default.query(query);
    return result.rows;
};
exports.getEmployees = getEmployees;
// Function to add a department
const addDepartment = async (name) => {
    const query = 'INSERT INTO department (name) VALUES ($1) RETURNING *';
    const values = [name];
    const result = await Connections_1.default.query(query, values);
    return result.rows[0];
};
exports.addDepartment = addDepartment;
// Function to add a role
const addRole = async (title, salary, departmentId) => {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *';
    const values = [title, salary, departmentId];
    const result = await Connections_1.default.query(query, values);
    return result.rows[0];
};
exports.addRole = addRole;
// Function to add an employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [firstName, lastName, roleId, managerId];
    const result = await Connections_1.default.query(query, values);
    return result.rows[0];
};
exports.addEmployee = addEmployee;
// Function to update an employee's role
const updateEmployeeRole = async (employeeId, roleId) => {
    const query = 'UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *';
    const values = [roleId, employeeId];
    const result = await Connections_1.default.query(query, values);
    return result.rows[0];
};
exports.updateEmployeeRole = updateEmployeeRole;
