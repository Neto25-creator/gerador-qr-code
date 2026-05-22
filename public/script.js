document.getElementById("gerar").addEventListener("click", async () => {
  const link = document.getElementById("link").value;
  if (!link) return alert("Digite um link!");

  const resposta = await fetch("/gerar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ link }),
  });

  const dados = await resposta.json();
  const qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = `<img id="qrcode-img" src="${dados.qr}" alt="QR Code">`;

  // Exibir botão de download
  const btnBaixar = document.getElementById("baixar");
  btnBaixar.style.display = "inline-block";

  btnBaixar.onclick = () => {
    const a = document.createElement("a");
    a.href = document.getElementById("qrcode-img").src;
    a.download = "qrcode.png";
    a.click();
  };
});
