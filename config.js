const requestResponse = {
  gagal: (message) => {
    return {
      code: 404,
      status: false,
      message: message,
    };
  },
  berhasil: (message) => {
    return {
      code: 200,
      status: true,
      message: message,
    };
  },
  kesalahan: {
    status: false,
    message: "terjadi kesahan server",
  },
  suksesLogin: (data) => {
    return {
      code: 200,
      status: true,
      message: "Berhasil Login",
      data: data,
    };
  },
  suksesWithData: (data) => {
    return {
      code: 200,
      status: true,
      message: "Berhasil Memuat Data",
      data: data,
    };
  },
};
module.exports = { requestResponse };
