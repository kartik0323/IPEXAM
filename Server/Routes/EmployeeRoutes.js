import express from "express";
import { DeleteEmployee, GetAllEmployeeData, GetEmployee, RegisterEmployee, Updating } from "../Controller/EmployeeController.js";
const router = express.Router();


router.post('/register', RegisterEmployee);       
router.get('/getrecord', GetAllEmployeeData);   
router.get('/:id', GetEmployee);                
router.delete('/delete/:id', DeleteEmployee);  
router.put('/update/:id', Updating);          


export default router;