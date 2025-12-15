const url = "https://cafedelaz-858f63.netlify.app/";

new QRCode(document.getElementById("qrcode"), {
  text: url,
  width: 500,
  height: 500,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
