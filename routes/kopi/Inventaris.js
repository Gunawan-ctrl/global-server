const router = require("express").Router();
const userController = require("../../controller/kopi/Inventaris");

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

router.get("/getById/:id", (req, res) => {
  userController
    .getById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;
