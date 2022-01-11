const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    points: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("User", userSchema);
