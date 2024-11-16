const { cast, QueryInterface } = require("sequelize");
const service = require("./auth.service");
const generateOTP = require("../../utils/otp.generator");
const { sendEmail } = require("../../utils/nodemailer");

const Register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const otp = generateOTP();

    if (!username) {
      res.status(400).send({ message: "Username cant be empty" });
    } else if (!email || !password) {
      res.status(400).send({ message: `Email or password can't be empty` });
    }

    const queries = {
      username: username,
      email: email,
      password: password,
      otp_code: otp,
      otp_expiration: new Date(Date.now() + 10 * 60 * 1000),
      is_verified: false,
    };

    const subject = "KakiLima Email Verification";
    const message = `Your OTP code is: ${otp}`;

    sendEmail(queries.email, subject, message);

    const result = await service.Register(queries);

    res
      .status(201)
      .send({ success: true, message: "Account registered", result: result });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const ResendOTP = async (req, res, next) => {
  try {
    const { email } = req.body;
    const otp = generateOTP();

    const queries = {
      email: email,
      otp_code: otp,
      otp_expiration: new Date(Date.now() + 10 * 60 * 1000),
    };

    const subject = "Email Verification";
    const message = `Your OTP code is: ${otp}`;
    const EmailExists = await service.EmailExists(queries);

    if (!EmailExists) {
      res.status(404).send({ success: false, message: "User not found" });
    } else {
      sendEmail(queries.email, subject, message);
    }

    const result = await service.ResendOTP(queries);

    res
      .status(200)
      .send({ success: true, message: "OTP is resent", result: result });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const VerifyEmail = async (req, res, next) => {
  try {
    const { email, otp_code } = req.body;

    // Pastikan email ada di database
    const EmailExists = await service.EmailExists({ email });
    if (!EmailExists) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    const queries = {
      email: email,
      otp_code: otp_code,
    };

    // Lakukan verifikasi email
    const user = await service.VerifyEmail(queries);

    if (!user) {
      return res
        .status(400)
        .send({ success: false, message: "OTP is invalid" });
    }

    // Kirim respons berhasil
    return res.status(200).send({
      success: true,
      message: "Email is verified",
      result: user,
    });
  } catch (error) {
    // Penanganan error dengan pesan spesifik
    if (error.message === "OTP is expired") {
      return res.status(400).send({ success: false, message: error.message });
    }

    if (error.message === "Email is already verified") {
      return res.status(401).send({ success: false, message: error.message });
    }

    // Jika error lain, kirimkan ke error handler global
    console.error(error);
    next(error);
  }
};

module.exports = { Register, ResendOTP, VerifyEmail };
