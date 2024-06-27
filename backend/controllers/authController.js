const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const { User } = require("../models/user");

const { HttpError, ctrlWrapper } = require("../helpers");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });

  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };
  const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: "1d" });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: "7d",
  });

  await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });
  res.json({ accessToken, refreshToken, user: { email } });
};

const signOut = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { accessToken: null });

  res.json("Done");
};

const getCurrent = (req, res) => {
  const { email, name } = req.user;
  res.json({ email, name });
};

const refresh = async (req, res) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
      throw HttpError(401, "Not authorized");
    }

    jwt.verify(token, REFRESH_SECRET_KEY);

    const user = await User.findOne({ token });
    if (!user) {
      throw HttpError(403, "Forbidden");
    }

    const payload = { id: user._id };
    const newAccessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "1d",
    });
    const newRefreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: "7d",
    });

    const newTokens = {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
    await User.findByIdAndUpdate(user._id, newTokens);

    res.json(newTokens);
  } catch (error) {
    throw HttpError(403);
  }
};

module.exports = {
  signUp: ctrlWrapper(signUp),
  singIn: ctrlWrapper(signIn),
  getCurrent: ctrlWrapper(getCurrent),
  refresh: ctrlWrapper(refresh),
  signOut: ctrlWrapper(signOut),
};
