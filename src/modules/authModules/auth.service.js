const db = require("../../../database/models");
const { User } = db;

const Register = async ({
  username,
  email,
  password,
  otp_code,
  otp_expiration,
  is_verified,
  role,
}) => {
  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      throw new Error("Email is already registered");
    }

    const newUser = await User.create({
      username,
      email,
      password,
      otp_code,
      otp_expiration,
      is_verified,
      role,
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};

const ResendOTP = async ({ email, otp_code, otp_expiration }) => {
  try {
    try {
      const [affectedRows, user] = await User.update(
        { otp_code, otp_expiration },
        {
          where: {
            email: email,
          },
          returning: true,
          plain: true,
        }
      );

      if (affectedRows === 0 || !user) return null;
      return user;
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

const EmailExists = async ({ email }) => {
  try {
    const data = await User.findOne({ where: { email: email } });
    return data;
  } catch (error) {
    throw error;
  }
};

const VerifyEmail = async ({ email, otp_code }) => {
  try {
    const user = await User.findOne({
      where: { email: email, otp_code: otp_code },
    });

    if (!user) return null;

    const OTPExpired = new Date() > new Date(user.otp_expiration);
    if (OTPExpired) throw new Error("OTP is expired");

    const alreadyVerified = user.is_verified === true;
    if (alreadyVerified) throw new Error("Email is already verified");

    await User.update(
      { is_verified: true },
      {
        where: {
          email: email,
        },
      }
    );

    const updatedData = await User.findOne({ where: { email: email } });
    return updatedData;
  } catch (error) {
    throw error;
  }
};

const userData = async ({ id }) => {
  const user = await User.findOne({
    where: { id: id },
    attributes: { exclude: ["password"] },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

module.exports = {
  Register,
  ResendOTP,
  EmailExists,
  VerifyEmail,
  userData,
};
