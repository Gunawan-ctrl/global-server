const router = require("express").Router();
const userController = require("../../controller/koperasi/Nasabah");

router.post("/add", (req, res) => {
  userController
    .tambah(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/getAll", (req, res) => {
  userController
    .getAllUser()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/getStatusAktif", (req, res) => {
  userController
    .getStatusAktif()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/getStatusTidakAktif", (req, res) => {
  userController
    .getStatusTidakAktif()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/getStatusPinjam", (req, res) => {
  userController
    .getStatusPinjam()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/getStatusTidakPinjam", (req, res) => {
  userController
    .getStatusTidakPinjam()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.put("/edit/:id", (req, res) => {
  let data = req.body;
  userController
    .edit(data, req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete/:id", (req, res) => {
  userController
    .delete(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;
