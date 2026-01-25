import express from 'express';
import mongoose from 'mongoose';
const app: express.Application = express();
const port: number = 3000;
mongoose.connect("mongodb://localhost:27017/");

// I have learnt that the Schema is resposible for controlling what goes into the Database from the backend
app.use(express.json())
const OperationSchema = new mongoose.Schema({
    type: String,
    hospital: String,
    distance: Number
});

// The model creates a copy of the Schema in a way that allows the instances to be made
const operation = mongoose.model('Operation', OperationSchema);


console.log('If you see this, it means nodemon runs the top level codes')

// An instance of the user model
const student = new operation({
    type: "Iron levels",
    hospital: "Belam"
});

// Instance saved to db.
student.save()
.then(() => console.log("Student saved "))
.catch((err) => console.error("Error: ", err))


function fin(val: String){
     operation.findOne({type: val})
    .then ((answers) => console.log(answers))
    .catch((err) => console.error(err))
}

app.get('/home', (req, res) => {
    console.log("Hey from the client")
    fin("VitaminD")
    res.send("TypeScript With Express on rainy morning");
    
});



app.post('/check', (req,res) => {
    const data = req.body;
    console.log("Hey from post method", data.type)
    fin(data.type)
   
 })




app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});