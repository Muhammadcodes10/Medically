import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

// The above are import statements.

const app: express.Application = express();
const port: number = 3000;
app.use(cors());

// The above is the initialization of express and port numbers.

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// The above is the intialization of nodemailer transporter, which is used to send emails to users.

// Hospital backend system
mongoose.connect("mongodb://localhost:27017/");

// I have learnt that the Schema is resposible for controlling what goes into the Database from the backend
app.use(express.json());
const OperationSchema = new mongoose.Schema({
  type: String,
  hospital: String,
  lat: Number,
  lon: Number,
});

// For registring users
const patientSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  DoB: String,
  username: String,
  medHistory: Array,
  status: String,
  verificationToken: String,
  isVerified: { type: Boolean, default: false },
});

const ticketSchema = new mongoose.Schema({
  ticketId: String,
  name: String,
  age: Number,
  treatment: String,
  date: Date,
  status: String,
});

// The model creates a copy of the Schema in a way that allows the instances to be made
const operation = mongoose.model("Operation", OperationSchema);
const patient = mongoose.model("Patient", patientSchema);
const ticket = mongoose.model("Ticket", ticketSchema);

// Continue from here tomorrrow inshallah.

// User backend system
function findTreatment(
  location: number[],
  treatment: string,
): Promise<
  string[] | (string | number | null | undefined)[] | null | undefined
> {
  const userLat = location[0];
  const userLon = location[1];

  // The entire 'return operation.find...' is an asynchronous, so it returns a promise. In this particular case, a Number
  return operation
    .find({ type: treatment }) // This is an asynchronous operation that queries the database for the desired result
    .then((results) => {
      // Upon discovery, the answer from MongoDB will be an array of MongoDB documents that pass the criteria
      let closestHospitalsdistance = Infinity;
      let key = 0;
      for (let i = 0; i < results.length; i++) {
        // Loops through all the documents in the returned MongoDB array
        const tempDistance = distance(
          userLat,
          userLon,
          results[i].lat as number,
          results[i].lon as number,
        );

        if (tempDistance < closestHospitalsdistance) {
          closestHospitalsdistance = tempDistance;
          key = i;
        }
      }

      if (results.length === 0) {
        return null;
      }

      return [results[key].hospital, results[key].lat, results[key].lon];
    });
}

// The haversine formula to figure out which valid hospital is closer to the user.
function distance(
  userLat: number,
  userLon: number,
  hospitalLat: number,
  hospitalLon: number,
): number {
  const R = 6371; // Earth radius in km

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(hospitalLat - userLat);
  const dLon = toRad(hospitalLon - userLon);

  const lat1 = toRad(userLat);
  const lat2 = toRad(hospitalLat);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // distance in kilometers
}

app.get("", (req, res) => {
  res.send("Hi from the newest route.");
});
app.get("/home", (req, res) => {
  res.send("Hi from the home.");
});

app.post("/tester", (req, res) => {
  const data = req.body;
  res.send(data);
});
// The main route for users to actually check for treatment
app.post("/check", (req, res) => {
  console.log("BODY:", req.body);
  const data = req.body;
  const location = [data.lat, data.lon];
  findTreatment(location, data.type) // This function is structured in a manner that expects asynchronization.
    .then((nearest) => {
      if (nearest !== null && nearest !== undefined) {
        res.json({ nearestHospital: nearest });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/checkLogin", async (req, res) => {
  const data = req.body;
  console.log(data);
  const username = data.username;
  const password = data.password;
  const userFound = await patient.findOne({ username });
  console.log("User found: ", userFound);
  if (!userFound) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  if (userFound.isVerified === false) {
    res.status(403).json({ message: "user not verified" });
    return;
  }

  const isMatch = await bcrypt.compare(password, userFound.password as string);
  if (!isMatch) console.log("Invalid credentials");
  else if (isMatch) {
    let jwtsecret = process.env.JWT_SECRET_KEY;
    let data = {
      time: Date(),
      userId: 12,
    };
    if (!jwtsecret) throw new Error("Jwt missing");
    const token = jwt.sign(data, jwtsecret);
    res.json({ token });
  }
});

app.post("/signup", async (req, res) => {
  const data = req.body;
  console.log("User came through");
  const existing = await patient.findOne({ email: data.email });
  if (existing) {
    res.status(400).json("User already exists");
    return;
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);
  const verificationToken = jwt.sign(
    { email: data.email },
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: "1d",
    },
  );

  const human = new patient({
    email: data.email,
    password: hashedPassword,
    name: data.name,
    DoB: data.DateoBirth,
    username: data.username,
    medHistory: [],
    status: "New Patient",
    isVerified: false,
    verificationToken: verificationToken,
  });

  human
    .save()
    .then(() => console.log("User created"))
    .catch((err: Error) => console.error("Error: ", err));

  res.status(200).json({ message: "User created successfully" });
  const verifyUrl = `http://localhost:3000/verifyEmail?token=${verificationToken}`;
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: "Verify your email",
    html: `
      <h2>Welcome, ${data.name}!</h2>
      <p>Click the button below to verify your email.</p>
      <a href="${verifyUrl}" style="padding: 10px 20px; background: #4CAF50; color: black; text-decoration: none; border-radius: 5px; margin: 20px;">
        Verify Email
      </a>
      <p>This link expires in 24 hours.</p>
    `,
  });
});

app.get("/verifyEmail", async (req, res) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET_KEY!,
    ) as { email: string };

    const user = await patient.findOneAndUpdate(
      { email: decoded.email, verificationToken: token },
      { isVerified: true, verificationToken: null },
    );

    if (!user) {
      res.status(400).json({ message: "Invalid or expired token" });
      return;
    }

    res.redirect("http://localhost:5173/login");
  } catch {
    res.status(400).json({ message: "Invalid or expired token" });
  }
});

app.post("/updateData", (req, res) => {
  const data = req.body;
  const treatment = new operation({
    type: data.type,
    hospital: data.hospital,
    lat: data.lat,
    lon: data.lon,
  });
  // Instance saved to db.
  treatment
    .save()
    .then(() => console.log("Treatment saved "))
    .catch((err) => console.error("Error: ", err));
});

app.post("/saveTicket", (req, res) => {
  const data = req.body;
  const card = new ticket({
    ticketId: data.ticketId,
    name: data.name,
    age: data.age,
    treatment: data.treatment,
    date: data.date,
    status: "Inactive",
  });
  console.log(data);
  card
    .save()
    .then(() => console.log("Ticket saved "))
    .catch((err) => console.error("Error: ", err));
});

app.get("/lookupTicket", async (req, res) => {
  const ticketId = req.query.ticketId as string;
  console.log("Looking up ticket ID:", ticketId);

  try {
    const result = await ticket.findOneAndUpdate(
      { ticketId: ticketId },
      { status: "Active" },
      { new: true },
    );

    if (!result) {
      res.status(404).json({ message: "Ticket not found" });
      return;
    }

    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});
app.listen(port, () => {
  console.log(`TypeScript with Express http://localhost:${port}/`);
});
