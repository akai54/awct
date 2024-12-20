import mongoose from "mongoose";

const criminalSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  aliases: [String],
  photos: [
    {
      type: String,
      default: "default.jpg",
    },
  ],
  position: String,
  unit: String,
  classification: String,
  status: {
    type: String,
    enum: ["At Large", "Detained", "Deceased", "Unknown"],
    required: true,
  },
  timeline: [
    {
      date: { type: Date },
      description: { type: String },
      location: String,
      type: {
        type: String,
        enum: ["Crime", "Appointment", "Sanction", "Legal Action"],
      },
    },
  ],
  sanctions: [
    {
      issuedBy: { type: String, required: true },
      date: { type: Date, required: true },
      type: { type: String, required: true },
      details: { type: String, required: true },
    },
  ],
});

const Criminal = mongoose.model("Criminal", criminalSchema);
export default Criminal;
