const userModel = require("../../model/koperasi/Nasabah");
const bcrypt = require("bcrypt");
const { requestResponse } = require("../../config");
const objectId = require("mongoose").Types.ObjectId;

exports.tambah = (data) =>
  new Promise((resolve, reject) => {
    userModel
      .findOne({
        nama: data.nama,
      })
      .then((user) => {
        if (user) {
          resolve(requestResponse.gagal("Nama Nasabah telah ada"));
        } else {
          userModel
            .create(data)
            .then(() => {
              resolve(requestResponse.berhasil("Berhasil Tambah Nasabah"));
            })
            .catch(() => {
              reject(requestResponse.kesalahan);
            });
        }
      });
  });

exports.login = (data) =>
  new Promise((resolve, reject) => {
    userModel
      .findOne({
        username: data.username,
      })
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(data.password, user.password)) {
            resolve(requestResponse.suksesLogin(user));
          } else {
            reject(requestResponse.gagal("Password Salah"));
          }
        } else {
          reject(requestResponse.gagal("Username Tidak terdaftar"));
        }
      });
  });

exports.getAllUser = () =>
  new Promise((resolve, reject) => {
    userModel
      .find({})
      .then((user) => {
        resolve(requestResponse.suksesWithData(user));
      })
      .catch(() => reject(requestResponse.kesalahan));
  });

exports.getStatusAktif = () =>
  new Promise((resolve, reject) => {
    userModel
      .find({
        status: "Aktif",
      })
      .then((user) => {
        resolve(requestResponse.suksesWithData(user));
      })
      .catch(() => reject(requestResponse.kesalahan));
  });

exports.getStatusTidakAktif = () =>
  new Promise((resolve, reject) => {
    userModel
      .find({
        status: "Tidak Aktif",
      })
      .then((user) => {
        resolve(requestResponse.suksesWithData(user));
      })
      .catch(() => reject(requestResponse.kesalahan));
  });

exports.getStatusPinjam = () =>
  new Promise((resolve, reject) => {
    userModel
      .find({
        statusPinjam: 1,
      })
      .then((user) => {
        resolve(requestResponse.suksesWithData(user));
      })
      .catch(() => reject(requestResponse.kesalahan));
  });

exports.getStatusTidakPinjam = () =>
  new Promise((resolve, reject) => {
    userModel
      .find({
        statusPinjam: 0,
      })
      .then((user) => {
        resolve(requestResponse.suksesWithData(user));
      })
      .catch(() => reject(requestResponse.kesalahan));
  });
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    userModel
      .findOne({
        _id: objectId(id),
      })
      .then((data) => {
        userModel
          .deleteOne({
            _id: objectId(id),
          })
          .then(() => {
            resolve(requestResponse.berhasil("Berhasil Delete Data"));
          })
          .catch(() => reject(requestResponse.serverError));
      });
  });

exports.edit = (data, id) =>
  new Promise(async (resolve, reject) => {
    userModel
      .updateOne(
        {
          _id: objectId(id),
        },
        data
      )
      .then(() => {
        resolve(requestResponse.berhasil("Berhasil Edit Data"));
      })
      .catch(() => reject(requestResponse.serverError));
  });
