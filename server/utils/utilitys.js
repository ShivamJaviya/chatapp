const ErrorHandler = (message, status) => {
  return new Error(message, { cause: { status } });
};

export { ErrorHandler };
