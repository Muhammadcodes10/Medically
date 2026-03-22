import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import bcrypt from "bcrypt"
const app: express.Application = express();
const port: number = 3000;
app.use(cors())

// Hospital backend system
mongoose.connect("mongodb://localhost:27017/");

// I have learnt that the Sche~ma is resposible for controlling what goes into the Database from the backend
app.use(express.json())
const OperationSchema = new mongoose.Schema({
    type: String,
    hospital: String,
    lat: Number,
    lon: Number
});

// For registring hospitals
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
})


// The model creates a copy of the Schema in a way that allows the instances to be made
const operation = mongoose.model('Operation', OperationSchema);
const user = mongoose.model('User',UserSchema )
// The information below represents data from hospitals that will be provided to us via an API or manual database entry
// An instance of the user model
// const treatment = new operation({
//     type: "Iron levels",
//     hospital: "Medicaid",
//     lat: 43.890610,
//     long: 13.135242
// });
// // Instance saved to db.
// treatment.save()
// .then(() => console.log("Treatment saved "))
// .catch((err) => console.error("Error: ", err))


// User backend system
function findTreatment(location: number[], treatment: string):Promise<string[] | (string | number | null | undefined)[] | null | undefined> {
  const userLat = location[0];
  const userLon = location[1];


  // The entire 'return operation.find...' is an asynchronous, so it returns a promise. In this particular case, a Number
  return operation.find({ type: treatment })  // This is an asynchronous operation that queries the database for the desired result 
    .then((results) => { // Upon discovery, the answer from MongoDB will be an array of MongoDB documents that pass the criteria
      let best = Infinity;
      let key = 0
      for (let i = 0; i < results.length; i++) {  // Loops through all the documents in the returned MongoDB array
        const d = distance(
          userLat,
          userLon,
          results[i].lat as number,
          results[i].lon as number
        );

        if (d < best) {
          best = d;
          key = i
        }
      }

      if (results.length === 0){
        return (null)
      }


      return [results[key].hospital, results[key].lat, results[key].lon]; 
    });
}

// The haversine formula to figure out which valid hospital is closer to the user.
function distance(userLat: number, userLon: number, hospitalLat: number, hospitalLon: number): number{
    const R = 6371; // Earth radius in km

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(hospitalLat - userLat);
  const dLon = toRad(hospitalLon - userLon);

  const lat1 = toRad(userLat);
  const lat2 = toRad(hospitalLat);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // distance in kilometers
}
app.get('/home', (req, res) => {
    res.send("Everyone deserves access to Healthcare.");  
});


// The main route for users to actually check for treatment
app.post('/check', (req,res) => {
  console.log("BODY:", req.body);
    const data = req.body;
    const location = [data.lat, data.lon]
    findTreatment(location, data.type) // This function is structured in a manner that expects asynchronization.
    .then((nearest) => {
      console.log('The value returned at nearest is: '+nearest)
      if(nearest !== null && nearest !== undefined){
      res.json({ nearestHospital: nearest });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
 })

 app.post('/checkLogin', (req,res) => {
  //incomplete.
    const data = req.body;
    const email = data.email;
    const password = data.password;
    
 })


 app.post('/signup',  async (req,res) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash("12345", saltRounds)
  const human = new user({
    email: "Sample@gmail.com",
    password: hashedPassword
  });

  human.save()
  .then(() => console.log("User created"))
  .catch((err) => console.error("Error: ", err))
 })
 app.post('/updateData', (req,res) => {
    const data = req.body;
    const treatment = new operation({
    type: data.type,
    hospital: data.hospital,
    lat: data.lat,
    lon: data.lon
  });
// Instance saved to db.
  treatment.save()
  .then(() => console.log("Treatment saved "))
  .catch((err) => console.error("Error: ", err))
  })

app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});