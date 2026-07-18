const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const lights = [
  { id: 1, pole: "Pole-01", status: "ON" },
  { id: 2, pole: "Pole-02", status: "OFF" },
  { id: 3, pole: "Pole-03", status: "ON" },
  { id: 4, pole: "Pole-04", status: "FAULT" },
];

app.get("/api/lights", (req, res) => {
  res.json(lights);
});

app.post("/api/lights/:id/toggle", (req, res) => {
  const id = parseInt(req.params.id);

  const light = lights.find((l) => l.id === id);

  if (!light) {
    return res.status(404).json({ message: "Light not found" });
  }

  if (light.status === "FAULT") {
    return res.json(light);
  }

  light.status = light.status === "ON" ? "OFF" : "ON";

  res.json(light);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});