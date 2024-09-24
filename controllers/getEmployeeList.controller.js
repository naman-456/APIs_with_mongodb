import mongoose from "mongoose"
export const getEmployeesList = (req, res) => {
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
    const empModel = new mongoose.model("Employee", EmployeeSchema)
    try{
        empModel.find({}).then((response) => {
            res.send({
                status: 1000,
                data: response
            })
        })
    }
    catch(error){
        res.send({
            status: 1001,
            message: error.message
        })
    }
    
}