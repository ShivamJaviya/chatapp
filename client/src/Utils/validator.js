export const usernameValidator = (username) => {
  const usernameRegex = /^[a-zA-Z1-9]+$/;
  if (!usernameRegex.test(username)) {
    return {
      isValid: false,
      errorMessage: "plaese use only Characters and numbers",
    };
  }
};

// check add member message in group message
