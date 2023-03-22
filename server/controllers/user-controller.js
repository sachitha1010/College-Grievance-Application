import User from "../models/Users.js";
import pkg from 'bcryptjs';
const { hashSync, compareSync } = pkg;
import pkgj from 'jsonwebtoken';
const { sign, verify } = pkgj;

const signup = async (req, res, next) => {
  const { name, email, password,role} = req.body;
  let existingUser;
  try {
    existingUser = await findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists! Login Instead" });
  }
  const hashedPassword = hashSync(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    role,
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ message: user });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await findOne({ email: email });
  } catch (err) {
    return new Error(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found. Signup Please" });
  }
  const isPasswordCorrect = compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Inavlid Email / Password" });
  }
  const token = sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "35s",
  });

  console.log("Generated Token\n", token);

  if (req.cookies[`${existingUser._id}`]) {
    req.cookies[`${existingUser._id}`] = "";
  }

  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30), // 30 seconds
    httpOnly: true,
    sameSite: "lax",
  });

  return res
    .status(200)
    .json({ message: "Successfully Logged In", user: existingUser, token });
};

const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  if (!token) {
    res.status(404).json({ message: "No token found" });
  }
  verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Invalid TOken" });
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};

const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await findById(userId, "-password");
  } catch (err) {
    return new Error(err);
  }
  if (!user) {
    return res.status(404).json({ messsage: "User Not FOund" });
  }
  return res.status(200).json({ user });
};
const refreshToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
    return res.status(400).json({ message: "Couldn't find token" });
  }
  verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Authentication failed" });
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] = "";

    const token = sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "35s",
    });
    console.log("Regenerated Token\n", token);

    res.cookie(String(user.id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 30), // 30 seconds
      httpOnly: true,
      sameSite: "lax",
    });

    req.id = user.id;
    next();
  });
};

const logout = (req, res, next) => {
  const cookies = req.headers.cookie;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
    return res.status(400).json({ message: "Couldn't find token" });
  }
  verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Authentication failed" });
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] = "";
    return res.status(200).json({ message: "Successfully Logged Out" });
  });
};

const _logout = logout;
export { _logout as logout };
const _signup = signup;
export { _signup as signup };
const _login = login;
export { _login as login };
const _verifyToken = verifyToken;
export { _verifyToken as verifyToken };
const _getUser = getUser;
export { _getUser as getUser };
const _refreshToken = refreshToken;
export { _refreshToken as refreshToken };