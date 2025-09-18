// server.js
const express = require("express");
const app = express();

// Используем порт Render или 3000 по умолчанию
const PORT = process.env.PORT || 3000;

// Главная страница
app.get("/", (req, res) => {
  res.send("<h1>🔥 Asador server is running 🔥</h1>");
});

// Сервер слушает все интерфейсы (0.0.0.0 = доступно с других устройств)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Asador server is running at http://0.0.0.0:${PORT}`);
});
