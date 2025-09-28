import mongoose from "mongoose"

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,      
        minlength: 2,        
        maxlength: 50        
      },
      email: {
        type: String,
        required: true,    
        maxlength: 50 ,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ 
      },
      password: {
        type: String,
        required: true,
        minlength: 6      
      }
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
export default EmployeeModel;