import mongoose from "mongoose";

export const addNewEmployee = async (req, res) => {
    const EmployeeSchema = new mongoose.Schema({
        emp_id: {
            type: String,
            require: true,
            unique: true
        },
        emp_name: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        },
        address: {
            type: {
                house_no: Number,
                area: String,
                city: String
            },
            require: true
        }
    })
    const Employee = new mongoose.model("Employee", EmployeeSchema)
    const empModel = new Employee(req?.body)
    try{
        await empModel.save()
        res.send({
            status: 1000,
            message: 'Data added successfully'
        })
    }
    catch(err){
        res.send({
            status: 1001,
            message: err.message
        })
    }
    
}