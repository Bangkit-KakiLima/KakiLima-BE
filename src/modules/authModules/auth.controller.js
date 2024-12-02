const { cast, QueryInterface } = require("sequelize");
const service = require("./auth.service");
const generateOTP = require("../../utils/otp.generator");
const { sendEmail } = require("../../utils/nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;
    const otp = generateOTP();

    if (!username) {
      res.status(400).send({ message: "Username cant be empty" });
    } else if (!email || !password) {
      res.status(400).send({ message: `Email or password can't be empty` });
    }

    const salt = await bcrypt.genSalt(10);

    const queries = {
      username: username,
      email: email,
      password: await bcrypt.hash(password, salt),
      otp_code: otp,
      otp_expiration: new Date(Date.now() + 10 * 60 * 1000),
      is_verified: false,
      role: role,
    };

    const subject = "KakiLima Email Verification";
    const message = `Your OTP code is: ${otp}`;

    const result = await service.Register(queries);
    sendEmail(queries.email, subject, message);

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

    const subject = "Email Resend OTP";
    const message = `Your OTP code is: ${otp}`;
    var EmailExists = await service.EmailExists(queries);

    if (!EmailExists) {
      res.status(404).send({ success: false, message: "User not found" });
    } else {
      sendEmail(queries.email, subject, message);
    }

    const result = await service.ResendOTP(queries);

    res.status(200).send({
      success: true,
      message: "OTP is resent",
      result: {
        id: result.id,
        username: result.username,
        email: result.email,
        otp_code: result.otp_code,
        otp_expiration: result.otp_expiration,
        is_verified: result.is_verified,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const VerifyEmail = async (req, res, next) => {
  try {
    const { email, otp_code } = req.body;

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

    user.otp_code = null;
    user.otp_expiration = null;
    await user.save();

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

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    var EmailExists = await service.EmailExists({
      email: email,
    });
    if (!EmailExists) {
      res.status(404).send({ success: false, message: "User not found" });
    } else {
      var user = EmailExists;
      if (user) {
        if (!user.is_verified) {
          res.status(401).send({
            success: false,
            message: "Failed to Log in, please verify you account first",
          });
        }
        var ComparePassword = await bcrypt.compare(password, user.password);
        if (ComparePassword) {
          var token = jwt.sign(
            { id: user.id, email: user.email, username: user.username },
            process.env.JWT_SECRET
          );
          res.status(200).send({
            success: true,
            message: "Login success",
            result: { token: token },
          });
        } else {
          res.status(400).send({
            success: false,
            message: "Login not success",
            error: "password incorrect",
          });
        }
      } else {
        res.status(404).send({
          success: false,
          message: "Login not success",
          error: "User does not exist",
        });
      }
    }
  } catch (error) {
    console.error(error); // Log error di server
    next(error);
  }
};

const LoggedUsers = async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await service.UserData({ id });

    res
      .status(200)
      .json({ success: true, message: "User found", result: user });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const ResetPasswordWithOTP = async (req, res, next) => {
  try {
    const { email, otp_code, newPassword } = req.body;

    if (!email || !otp_code || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Email, OTP, and new password are required",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const query = {
      email: email,
      otp_code: otp_code,
      newPassword: await bcrypt.hash(newPassword, salt),
    };
    const result = await service.ResetPasswordWithOTP(query);

    res.status(200).json({ success: true, message: result.message });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  Register,
  ResendOTP,
  VerifyEmail,
  Login,
  LoggedUsers,
  ResetPasswordWithOTP,
};
