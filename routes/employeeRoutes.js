const express = require('express')
const router = express.Router()
const employeeController = require("../controllers/employeeController")
const Employee = require("../models/Employee")

//get, Post, Put, delete

router.post('/add-emp', employeeController.createEmployee)
router.get('/allemployees', employeeController.getEmployees)
router.get('/employee/:id', employeeController.singleEmployee)
router.get('/update/:id', employeeController.updateEmployee)
router.get('/delete/:id', employeeController.deleteEmployee)

module.exports = router