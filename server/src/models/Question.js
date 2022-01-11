const { Schema, model } = require("mongoose");

const questionSchema = new Schema(
  {
    question: { type: String, required: true },
    r1: { type: String, required: true },
    r2: { type: String, required: true },
    r3: { type: String, required: true },
    r4: { type: String, required: true },
    rc: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Question", questionSchema);
