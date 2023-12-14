const express = require('express');
const mysql = require('mysql');
const inputCheck = require('./utils/inputCheck');
const { response } = require('express');
const { query } = require('express-validator');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

const db = mysql.createConnection(
    {
        host: 127.0.0.1,
        user: 'root',
        password: 'pizza',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

app.get('/api/employees', async (req, res) => {
    try {
        const rows = await queryDatabase('SELECT * FROM employee');
        res.json({
            message: 'success',
            data: rows
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

function queryDatabase(sql, params=[]) {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, rows) => {
            if (err) {
                reject({ error: err.message });
            } else {
            resolve(rows);
            }
        });
    });
}

app.get('/api/employees/:id', (req, res) => {
    const sql = `SELECT * FROM employee WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

app.post('/api/employees', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'role_id', 'manager_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

app.put('/api/employees/:id', (req, res) => {
    const errors = inputCheck(req.body, 'first_name', 'last_name', 'role_id', 'manager_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `UPDATE employee SET first_name = ?, last_name = ?, role_id = ?, manager_id = ?
    WHERE id = ?`;
    const params = [req.body.first_name, req.body.last_name, req.body.role_id, req.body.manager_id, req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found.'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});

app.delete('/api/employees/:id', (req, res) => {
    const sql = `DELETE FROM employee WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found.'
            });
        } else {
            res.json({
                message: 'success',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});

app.get('/api/roles', (req, res) => {
    const sql = 'SELECT * FROM role';
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

app.get('/api/roles/:id', (req, res) => {
    const sql = `SELECT * FROM role WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

app.post('/api/roles', ({ body }, res) => {
    const errors = inputCheck(body, 'title', 'salary', 'department_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO role (title, salary, department_id)
    VALUES (?,?,?)`;
    const params = [body.title, body.salary, body.department_id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

app.put('/api/roles/:id', (req, res) => {
    const errors = inputCheck(req.body, 'title', 'salary', 'department_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `UPDATE role SET title = ?, salary = ?, department_id = ?
    WHERE id = ?`;
    const params = [req.body.title, req.body.salary, req.body.department_id, req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Role not found.'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});

app.delete('/api/roles/:id', (req, res) => {
    const sql = `DELETE FROM role WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Role not found.'
            });
        } else {
            res.json({
                message: 'success',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});

app.get('/api/departments', (req, res) => {
    const sql = 'SELECT * FROM department';
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

app.get('/api/departments/:id', (req, res) => {
    const sql = `SELECT * FROM department WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

app.post('/api/departments', ({ body }, res) => {
    const errors = inputCheck(body, 'name');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO department (name)
    VALUES (?)`;
    const params = [body.name];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

app.put('/api/departments/:id', (req, res) => {
    const errors = inputCheck(req.body, 'name');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `UPDATE department SET name = ?
    WHERE id = ?`;
    const params = [req.body.name, req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Department not found.'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});

app.delete('/api/departments/:id', (req, res) => {
    const sql = `DELETE FROM department WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Department not found.'
            });
        } else {
            res.json({
                message: 'success',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = db;
