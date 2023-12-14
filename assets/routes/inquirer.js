const inquirer = require('inquirer');
const { viewRoles, viewDepartments, addEmployee, addRole, addDepartment, updateEmployeeRole, quit } = require('../server');

const appInquirer = async () => {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View All Employees',
                    'View All Roles',
                    'View All Departments',
                    'Add Employee',
                    'Add Role',
                    'Add Department',
                    'Update Employee Role',
                    'Quit'
                ]
            }
        ]);
        switch (answers.action) {
            case 'View All Employees':
                viewEmployees();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Departments':
                viewDepartments();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'Quit':
                quit();
                break;
            default:
                quit();
        }
    } catch (err) {
        console.error(err);
    }
};

const viewEmployees = async () => {
    try {
        const sql = `SELECT * FROM employee`;
        const rows = await queryDatabase(sql);
        console.table('All Employees:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error viewEmployees', error.message);
        await appInquirer();
    }
};

const viewRoles = async () => {
    try {
        const sql = `SELECT * FROM role`;
        const rows = await queryDatabase(sql);
        console.table('All Roles:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error viewRoles', error.message);
        await appInquirer();
    }
};

const viewDepartments = async () => {
    try {
        const sql = `SELECT * FROM department`;
        const rows = await queryDatabase(sql);
        console.table('All Departments:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error viewDepartments', error.message);
        await appInquirer();
    }
};

const addEmployee = async () => {
    try {
        const sql = `SELECT * FROM employee`;
        const rows = await queryDatabase(sql);
        console.table('All Employees:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error addEmployee', error.message);
        await appInquirer();
    }
};

const addRole = async () => {
    try {
        const sql = `SELECT * FROM role`;
        const rows = await queryDatabase(sql);
        console.table('All Roles:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error addRole', error.message);
        await appInquirer();
    }
};

const addDepartment = async () => {
    try {
        const sql = `SELECT * FROM department`;
        const rows = await queryDatabase(sql);
        console.table('All Departments:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error addDepartment', error.message);
        await appInquirer();
    }
};

const updateEmployeeRole = async () => {
    try {
        const sql = `SELECT * FROM employee`;
        const rows = await queryDatabase(sql);
        console.table('All Employees:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error updateEmployeeRole', error.message);
        await appInquirer();
    }
};

const updateEmployeeManager = async () => {
    try {
        const sql = `SELECT * FROM employee`;
        const rows = await queryDatabase(sql);
        console.table('All Employees:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error updateEmployeeManager', error.message);
        await appInquirer();
    }
};

const updateDepartment = async () => {
    try {
        const sql = `SELECT * FROM department`;
        const rows = await queryDatabase(sql);
        console.table('All Departments:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error updateDepartment', error.message);
        await appInquirer();
    }
};

const deleteEmployee = async () => {
    try {
        const sql = `SELECT * FROM employee`;
        const rows = await queryDatabase(sql);
        console.table('All Employees:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error deleteEmployee', error.message);
        await appInquirer();
    }
};

const deleteDepartment = async () => {
    try {
        const sql = `SELECT * FROM department`;
        const rows = await queryDatabase(sql);
        console.table('All Departments:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error deleteDepartment', error.message);
        await appInquirer();
    }
};

const deleteRole = async () => {
    try {
        const sql = `SELECT * FROM role`;
        const rows = await queryDatabase(sql);
        console.table('All Roles:', rows);
        await appInquirer();
    } catch (error) {
        console.error('error deleteRole', error.message);
        await appInquirer();
    }
};

const quit = async () => {
    try {
        console.log('Goodbye!');
        process.exit(0);
    } catch (error) {
        console.error('error quit', error.message);
        await appInquirer();
    }
};

module.exports = { appInquirer, viewEmployees, viewRoles, viewDepartments, addEmployee, addRole, addDepartment, updateEmployeeRole, updateEmployeeManager, updateDepartment, deleteEmployee, deleteDepartment, deleteRole, quit };
