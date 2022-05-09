import {
  isValidUserName,
  isValidEmail,
  isValidPassword,
  isValidPasswordConfirm,
} from "./validators";

const error = {
  requiredField: "This field is required",
  invalidEmail: "Invalid email address",
  invalidPassword: `Invalid password. Password must be at least 5 characters long and max 15 characters long. Password must contain at least one numeric digit, one uppercase and one lowercase letter`,
  notMatch: "Passwords do not match",
};

describe("UserNameValidation", () => {
  test("ValidUserName", () => expect(isValidUserName("John")).toBeUndefined());
  test("notValidUserName", () =>
    expect(isValidUserName("")).toBe(error.requiredField));
});

describe("UserEmailValidation", () => {
  test("notValidUserEmail", () => {
    expect(isValidEmail("")).toBe(error.requiredField);
    expect(isValidEmail("exapmle")).toBe(error.invalidEmail);
    expect(isValidEmail("exapmle@")).toBe(error.invalidEmail);
    expect(isValidEmail("exapmle@mail")).toBe(error.invalidEmail);
    expect(isValidEmail("exapmle@mailcom")).toBe(error.invalidEmail);
    expect(isValidEmail("exapmlemail.com")).toBe(error.invalidEmail);
  });
  test("ValidUserEmail", () =>
    expect(isValidEmail("exapmle@mail.com")).toBeUndefined());
});

describe("UserPasswordValidation", () => {
  test("notValidUserPassword", () => {
    expect(isValidPassword("")).toBe(error.requiredField);
    expect(isValidPassword("Some")).toBe(error.invalidPassword);
    expect(isValidPassword("SOMEPASSWORD")).toBe(error.invalidPassword);
    expect(isValidPassword("somepassword")).toBe(error.invalidPassword);
    expect(isValidPassword("123456")).toBe(error.invalidPassword);
    expect(isValidPassword("somepassword1213")).toBe(error.invalidPassword);
    expect(isValidPassword("SOMEPASSWORD1234")).toBe(error.invalidPassword);
    expect(isValidPassword("SomeVeryLongPassword1234567890")).toBe(
      error.invalidPassword
    );
  });
  test("ValidUserPassword", () => {
    expect(isValidPassword("SomePassword12")).toBeUndefined();
    expect(isValidPassword("SomeP2")).toBeUndefined();
    expect(isValidPassword("Sm1236")).toBeUndefined();
  });
});

describe("UserPasswordConfirmValidation", () => {
  test("notValidUserPassword", () => {
    expect(isValidPasswordConfirm("", "")).toBe(error.requiredField);
    expect(isValidPasswordConfirm("Some", "Some")).toBe(error.invalidPassword);
    expect(isValidPasswordConfirm("SOMEPASSWORD", "SOMEPASSWORD")).toBe(
      error.invalidPassword
    );
    expect(isValidPasswordConfirm("somepassword", "somepassword")).toBe(
      error.invalidPassword
    );
    expect(isValidPasswordConfirm("123456", "123456")).toBe(
      error.invalidPassword
    );
    expect(isValidPasswordConfirm("somepassword1213", "somepassword1213")).toBe(
      error.invalidPassword
    );
    expect(isValidPasswordConfirm("SOMEPASSWORD1234", "SOMEPASSWORD1234")).toBe(
      error.invalidPassword
    );
    expect(
      isValidPasswordConfirm(
        "SomeVeryLongPassword1234567890",
        "SomeVeryLongPassword1234567890"
      )
    ).toBe(error.invalidPassword);
    expect(isValidPasswordConfirm("SomeP2", "SomeP3")).toBe(error.notMatch);
  });
  test("ValidUserPassword", () => {
    expect(
      isValidPasswordConfirm("SomePassword12", "SomePassword12")
    ).toBeUndefined();
    expect(isValidPasswordConfirm("SomeP2", "SomeP2")).toBeUndefined();
    expect(isValidPasswordConfirm("Sm1236", "Sm1236")).toBeUndefined();
  });
});
