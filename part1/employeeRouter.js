const express = require("express");
const router = express.Router();
const {getEmployees, getEmployeeById} = require('./getEmployees');
const addEmployee = require('./addEmployee');
const deleteEmplyee = require('./deleteEmployee');
const updateEmplyee = require('./updateEmployee');

router.get('/employees', getEmployees)
router.post('/employees', addEmployee)
router.get('/employees/:id', getEmployeeById)
router.put('/employees/:id', updateEmployee)
router.delete('/employees/:id', deleteEmployee)

module.exports = router;