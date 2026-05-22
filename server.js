const express = require("express");
const QRCode = require("qrcode");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post("/gerar", async (req, res) => {
  const { link } = req.body;
  try {
    const qr = await QRCode.toDataURL(link);
    res.json({ qr });
  } catch (err) {
    res.status(500).json({ error: "Erro ao gerar QR Code" });
  }
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000"),
);
