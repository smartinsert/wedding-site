import express, { Request, Response } from "express";
import mongoose, { Document, Schema } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.MONGO_URI as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions
);

interface IGuest extends Document {
  firstName: string;
  lastName: string;
  email: string;
  attending: boolean | null;
  numberOfAttendees: number;
  notes: string;
}

const guestSchema = new Schema<IGuest>({
  firstName: String,
  lastName: String,
  email: String,
  attending: Boolean,
  numberOfAttendees: Number,
  notes: String,
});

const Guest = mongoose.model<IGuest>("Guest", guestSchema);

app.post("/api/guests", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, attending, numberOfAttendees, notes } =
      req.body;
    const newGuest = new Guest({
      firstName,
      lastName,
      email,
      attending,
      numberOfAttendees,
      notes,
    });
    await newGuest.save();
    res.status(201).json(newGuest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/api/guests/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, attending, numberOfAttendees, notes } =
      req.body;
    const updatedGuest = await Guest.findByIdAndUpdate(
      id,
      { firstName, lastName, email, attending, numberOfAttendees, notes },
      { new: true }
    );
    if (!updatedGuest) {
      return res.status(404).json({ error: "Guest not found" });
    }
    res.json(updatedGuest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/guests", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email } = req.query;
    const guests = await Guest.find({ firstName, lastName, email });
    res.json(guests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/allGuests", async (_, res: Response) => {
  try {
    const guests = await Guest.find(); // Retrieve all guests from the database
    res.json(guests); // Send the retrieved guests as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" }); // Handle any errors
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
