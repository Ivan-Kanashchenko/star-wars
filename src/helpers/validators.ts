export const isValidUserName = (userName: string): string => {
  let error: string;
  if (!userName) {
    error = "userName is required";
  }
  return error;
};

export const isValidEmail = (email: string): string => {
  let error: string;
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!email) {
    error = "Email is required";
  }
  if (!re.test(email.toLowerCase())) {
    error = "Invalid email address";
  }
  return error;
};

export const isValidPassword = (password: string): string => {
  let error: string;
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
  if (!password) {
    error = "Password is required";
  }
  if (!re.test(password)) {
    error = `Invalid password. Password must be at least 5 characters long and max 15 characters long. 
    Password must contain at least one numeric digit, one uppercase and one lowercase letter`;
  }
  return error;
};

export const isValidPasswordConfirm = (
  password: string,
  passwordConfirm: string
): string => {
  let error: string;
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

  if (!passwordConfirm) {
    error = "Password is required";
  } else if (!re.test(passwordConfirm)) {
    error = `Invalid password. Password must be at least 5 characters long and max 15 characters long. 
    Password must contain at least one numeric digit, one uppercase and one lowercase letter`;
  } else if (password !== passwordConfirm) {
    error = "Passwords do not match";
  }
  return error;
};
