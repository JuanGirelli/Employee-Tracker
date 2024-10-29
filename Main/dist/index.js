"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = require("inquirer");
const queries_1 = require("./queries");
// Main menu prompt
const mainMenu = async () => {
    const { choice } = await inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        }
    ]);
    switch (choice) {
        case 'View all departments':
            const departments = await (0, queries_1.getDepartments)();
            console.table(departments);
            break;
        case 'View all roles':
            const roles = await (0, queries_1.getRoles)();
            console.table(roles);
            break;
        case 'View all employees':
            const employees = await (0, queries_1.getEmployees)();
            console.table(employees);
            break;
        case 'Add a department':
            await promptAddDepartment();
            break;
        case 'Add a role':
            await promptAddRole();
            break;
        case 'Add an employee':
            await promptAddEmployee();
            break;
        case 'Update an employee role':
            await promptUpdateEmployeeRole();
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit();
    }
    mainMenu(); // Show menu again after each action
};
// Prompt to add a new department
const promptAddDepartment = async () => {
    const { name } = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department:'
        }
    ]);
    await (0, queries_1.addDepartment)(name);
    console.log(`Department ${name} added!`);
};
// Prompt to add a new role
const promptAddRole = async () => {
    const departments = await (0, queries_1.getDepartments)();
    const departmentChoices = departments.map((dept) => ({
        name: dept.name,
        value: dept.id
    }));
    const { title, salary, departmentId } = await inquirer_1.default.prompt([
        { type: 'input', name: 'title', message: 'Enter the role title:' },
        { type: 'number', name: 'salary', message: 'Enter the role salary:' },
        {
            type: 'list',
            name: 'departmentId',
            message: 'Select the department for this role:',
            choices: departmentChoices
        }
    ]);
    await (0, queries_1.addRole)(title, salary, departmentId);
    console.log(`Role ${title} added!`);
};
// Prompt to add a new employee
const promptAddEmployee = async () => {
    const roles = await (0, queries_1.getRoles)();
    const roleChoices = roles.map((role) => ({
        name: role.title,
        value: role.id
    }));
    const employees = await (0, queries_1.getEmployees)();
    const managerChoices = employees.map((emp) => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id
    }));
    managerChoices.unshift({ name: 'None', value: null });
    const { firstName, lastName, roleId, managerId } = await inquirer_1.default.prompt([
        { type: 'input', name: 'firstName', message: 'Enter the first name:' },
        { type: 'input', name: 'lastName', message: 'Enter the last name:' },
        { type: 'list', name: 'roleId', message: 'Select the role:', choices: roleChoices },
        { type: 'list', name: 'managerId', message: 'Select the manager:', choices: managerChoices }
    ]);
    await (0, queries_1.addEmployee)(firstName, lastName, roleId, managerId);
    console.log(`Employee ${firstName} ${lastName} added!`);
};
// Prompt to update an employee's role
const promptUpdateEmployeeRole = async () => {
    const employees = await (0, queries_1.getEmployees)();
    const employeeChoices = employees.map((emp) => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id
    }));
    const roles = await (0, queries_1.getRoles)();
    const roleChoices = roles.map((role) => ({
        name: role.title,
        value: role.id
    }));
    const { employeeId, roleId } = await inquirer_1.default.prompt([
        { type: 'list', name: 'employeeId', message: 'Select the employee to update:', choices: employeeChoices },
        { type: 'list', name: 'roleId', message: 'Select the new role:', choices: roleChoices }
    ]);
    await (0, queries_1.updateEmployeeRole)(employeeId, roleId);
    console.log(`Employee role updated!`);
};
// Start the application
mainMenu();
