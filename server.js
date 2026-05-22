const express = require("express");
const QRCode = require("qrcode");
const app = express();

app.use(express.static("public"));
app.use(express.json());

// Rota para gerar QR Code
app.post("/gerar", async (req, res) => {
  const { link } = req.body;
  try {
    const qr = await QRCode.toDataURL(link);
    res.json({ qr });
  } catch (err) {
    res.status(500).json({ error: "Erro ao gerar QR Code" });
  }
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000"),
);
