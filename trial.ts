import express from 'express';
import mongoose from 'mongoose';
const app: express.Application = express();
const port: number = 3000;

// Hospital backend system
mongoose.connect("mongodb://localhost:27017/");

// I have learnt that the Schema is resposible for controlling what goes into the Database from the backend
app.use(express.json())
const OperationSchema = new mongoose.Schema({
    type: String,
    hospital: String,
    lat: Number,
    lon: Number
});
// The model creates a copy of the Schema in a way that allows the instances to be made
const operation = mongoose.model('Operation', OperationSchema);
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
function findTreatment(location: number[], val: string): Promise<number> {
  const userLat = location[0];
  const userLon = location[1];

  return operation.find({ type: val })
    .then((results) => {
      let best = Infinity;

      for (let i = 0; i < results.length; i++) {
        const d = distance(
          userLat,
          userLon,
          results[i].lat as number,
          results[i].lon as number
        );

        if (d < best) best = d;
      }

      return best; // resolves Promise<number>
    });
}

// I will apply the haversine formula to figure out which hospital is closer to the user and return those hospitals in an ordered list.
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

app.post('/check', (req,res) => {
    const data = req.body;
    const location = [data.lat, data.lon]
    // distance(location)
    findTreatment(location, data.type)
    .then((nearest) => {
      res.json({ nearestDistanceKm: nearest});
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
 })

app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});