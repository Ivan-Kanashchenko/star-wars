import { formError } from "./../../consts/forms.errors";

export const isValidUserName = (userName: string): string | undefined => {
  let error: string | undefined;

  if (!userName) {
    return (error = formError.requiredField);
  }
  return error;
};

export const isValidEmail = (email: string): string | undefined => {
  let error: string | undefined;

  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (!email) {
    return (error = formError.requiredField);
  }
  if (!re.test(email.toLowerCase())) {
    return (error = formError.invalidEmail);
  }
  return error;
};

export const isValidPassword = (password: string): string => {
  let error: string | undefined;

  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

  if (!password) {
    return (error = formError.requiredField);
  }
  if (!re.test(password)) {
    return (error = formError.invalidPassword);
  }
  return error;
};

export const isValidPasswordConfirm = (
  password: string,
  passwordConfirm: string
): string => {
  let error: string | undefined;

  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

  if (!passwordConfirm) {
    return (error = formError.requiredField);
  } else if (!re.test(passwordConfirm)) {
    return (error = formError.invalidPassword);
  } else if (password !== passwordConfirm) {
    return (error = formError.notMatch);
  }
  return error;
};