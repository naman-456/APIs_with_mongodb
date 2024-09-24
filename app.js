import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { addNewEmployee } from './controllers/addEmployee.controller.js';
import { getEmployeesList } from './controllers/getEmployeeList.controller.js';

const app = express()

const PORT = 5000
const connectionURL = 'mongodb://localhost:27017/db1'

const connectDb = async (url) => {
    try{
        await mongoose.connect(url)
        console.log('connection done :')

    }
    catch(err){
        console.log('err is :', err)
    }
}
connectDb(connectionURL)

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({
        message: `Your server has started at port ${PORT}`
    })
})
app.post('/add/emp', addNewEmployee)
app.get('/get/emp', getEmployeesList)
app.listen(PORT, () => {
    console.log('Server started http://localhost:' + PORT)
})