const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv").config();

mongoose.set("strictQuery", false);

// env
const PORT = process.env.PORT;
const mongoURL = process.env.MONGO_URL;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Berhasil Konek ke database");
  })
  .catch(() => {
    console.log("Gagal konek");
  });

const directory = path.join(__dirname, "/statics/");
app.use(express.static(directory));
app.use(cors());

app.use(
  bodyParser.json({
    extended: true,
    limit: "20mb",
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "20mb",
  })
);

//routes
app.use("/user", require("./routes/koperasi/User"));
app.use("/nasabah", require("./routes/koperasi/Nasabah"));
app.use("/pengeluaran", require("./routes/koperasi/Pengeluaran"));
app.use("/peminjaman", require("./routes/koperasi/Peminjaman"));
//kopi
app.use("/customer", require("./routes/kopi/Customer"));
app.use("/supplier", require("./routes/kopi/Supplier"));
app.use("/produk", require("./routes/kopi/Produk"));
app.use("/stok", require("./routes/kopi/Stok"));
app.use("/pembelian", require("./routes/kopi/Pembelian"));
app.use("/penjualan", require("./routes/kopi/Penjualan"));
app.use("/pengeluaran", require("./routes/kopi/Pengeluaran"));
app.use("/inventaris", require("./routes/kopi/Inventaris"));

// Fiberzone
app.use("/client", require("./routes/fiberzone/Client"));
app.use("/services", require("./routes/fiberzone/Services"));
app.use("/order", require("./routes/fiberzone/Order"));
app.use("/location", require("./routes/fiberzone/Location"));

app.get("/", (req, res) => {
  res.json("Welcome in global server");
});

app.listen(PORT, () => {
  console.log(`Server telah dijalankan di port ${PORT}`);
});
