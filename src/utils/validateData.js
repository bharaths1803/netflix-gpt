export const validateSigninData = (email, password) => {
  const isValidEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isValidPassword =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  if (!isValidEmail) return "Email is not valid.";
  if (!isValidPassword) return "Password is not valid.";
  return null;
};
