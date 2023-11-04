import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    
     name: {
        type: String,
        required: true
     },
     fname:{
        type: String,
        required: true
     },
     work:{
        type: String,
        required: true
     },
     nationality: {
        type: String,
        required: true
     },
     salary:{
        type: String,
        required: true
     }
},
 {timestamps: true}
)

const EmployeeModel = mongoose.model('employees', EmployeeSchema )

export default EmployeeModel;
