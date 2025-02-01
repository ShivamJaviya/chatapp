import { ErrorHandler } from "../utils/utilitys.js";
import { TryCatch } from "./error.middleware.js";
import { adminSecretKey } from "../app.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const isAuthenticated = TryCatch(async (req, res, next) => {
  //   console.log(req.cookies.access_token);
  const token = req.cookies["access_token"];
  if (!token) {
    return next(ErrorHandler("please login to access this route", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decodedData._id;
  next();
});

const adminOnly = TryCatch(async (req, res, next) => {
  //   console.log(req.cookies.access_token);
  const token = req.cookies["connecto-admin-token"];
  if (!token) {
    next(ErrorHandler("only admin can access this route", 401));
  }
  const adminID = jwt.verify(token, process.env.JWT_SECRET);
  const isMatched = adminID === adminSecretKey;

  if (!isMatched) return next(ErrorHandler("Invalid Admin Key", 401));
  next();
});

const socketAuthenticator = async (err, socket, next) => {
  try {
    if (err) return next(err);

    const authToken = socket.request.cookies["access_token"];

    if (!authToken)
      return next(ErrorHandler("Please login to access this route", 401));

    const decodedData = jwt.verify(authToken, process.env.JWT_SECRET);

    const user = await User.findById(decodedData._id);

    if (!user)
      return next(ErrorHandler("Please login to access this route", 401));

    socket.user = user;

    return next();
  } catch (error) {
    return next(ErrorHandler("Please login to access this route", 401));
  }
};
export { isAuthenticated, adminOnly, socketAuthenticator };
