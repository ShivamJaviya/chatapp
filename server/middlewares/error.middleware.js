import { envMode } from "../app.js";
const errorMiddleware = (err, req, res, next) => {
  err.message ||= "Internal server error";
  let status = err.cause?.status || 500;
  if (err.code === "11000") {
    let error = Object.keys(err.keyPattern).join(", ");
    status = 400;
    err.message = `duplicate key ${error}`;
  }
  if (err.name === "CastError") {
    const errorPath = err.path;
    err.message = `Invalid Format of ${errorPath}`;
    status = 400;
  }

  const response = {
    success: false,
    message: err.message,
  };
  if (envMode.toString().trim() === "PRODUCTION") {
    response.error = err;
  }
  return res.status(status).json(response);
};

const TryCatch = (passedFunc) => async (req, res, next) => {
  try {
    await passedFunc(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { errorMiddleware, TryCatch };
