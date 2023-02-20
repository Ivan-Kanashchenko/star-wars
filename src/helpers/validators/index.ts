import { formError } from "../../consts/forms.errors";

export const isValidUserName = (userName: string): string | undefined =>
  !userName ? formError.requiredField : undefined;

export const isValidEmail = (email: string): string | undefined => {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (!email) {
    return formError.requiredField;
  }
  if (!re.test(email.toLowerCase())) {
    return formError.invalidEmail;
  }
  return undefined;
};

export const isValidPassword = (password: string): string | undefined => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

  if (!password) {
    return formError.requiredField;
  }
  if (!re.test(password)) {
    return formError.invalidPassword;
  }
  return undefined;
};

export const isValidPasswordConfirm = (
  password: string,
  passwordConfirm: string
): string | undefined => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

  if (!passwordConfirm) {
    return formError.requiredField;
  } else if (!re.test(passwordConfirm)) {
    return formError.invalidPassword;
  } else if (password !== passwordConfirm) {
    return formError.notMatch;
  }
  return undefined;
};
