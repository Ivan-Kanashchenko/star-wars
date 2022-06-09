import { formError } from "./../../consts/forms.errors";
import {
  isValidEmail,
  isValidPassword,
  isValidPasswordConfirm,
  isValidUserName,
} from "./validators";

describe("username validation", () => {
  test("valid username", () => expect(isValidUserName("John")).toBeUndefined());

  test("invalid username", () => {
    expect(isValidUserName("")).toBe(formError.requiredField);
  });
});

describe("email validation", () => {
  test("invalid email", () => {
    expect(isValidEmail("")).toBe(formError.requiredField);
    expect(isValidEmail("exapmle")).toBe(formError.invalidEmail);
    expect(isValidEmail("exapmle@")).toBe(formError.invalidEmail);
    expect(isValidEmail("exapmle@mail")).toBe(formError.invalidEmail);
    expect(isValidEmail("exapmle@mailcom")).toBe(formError.invalidEmail);
    expect(isValidEmail("exapmlemail.com")).toBe(formError.invalidEmail);
  });

  test("valid email", () =>
    expect(isValidEmail("exapmle@mail.com")).toBeUndefined());
});

describe("password validation", () => {
  test("invalid password", () => {
    expect(isValidPassword("")).toBe(formError.requiredField);
    expect(isValidPassword("Some")).toBe(formError.invalidPassword);
    expect(isValidPassword("SOMEPASSWORD")).toBe(formError.invalidPassword);
    expect(isValidPassword("somepassword")).toBe(formError.invalidPassword);
    expect(isValidPassword("123456")).toBe(formError.invalidPassword);
    expect(isValidPassword("somepassword1213")).toBe(formError.invalidPassword);
    expect(isValidPassword("SOMEPASSWORD1234")).toBe(formError.invalidPassword);
    expect(isValidPassword("SomeVeryLongPassword1234567890")).toBe(
      formError.invalidPassword
    );
  });

  test("valid password", () => {
    expect(isValidPassword("SomePassword12")).toBeUndefined();
    expect(isValidPassword("SomeP2")).toBeUndefined();
    expect(isValidPassword("Sm1236")).toBeUndefined();
  });
});

describe("confirm password validation", () => {
  test("invalid password", () => {
    expect(isValidPasswordConfirm("", "")).toBe(formError.requiredField);
    expect(isValidPasswordConfirm("Some", "Some")).toBe(
      formError.invalidPassword
    );
    expect(isValidPasswordConfirm("SOMEPASSWORD", "SOMEPASSWORD")).toBe(
      formError.invalidPassword
    );
    expect(isValidPasswordConfirm("somepassword", "somepassword")).toBe(
      formError.invalidPassword
    );
    expect(isValidPasswordConfirm("123456", "123456")).toBe(
      formError.invalidPassword
    );
    expect(isValidPasswordConfirm("somepassword1213", "somepassword1213")).toBe(
      formError.invalidPassword
    );
    expect(isValidPasswordConfirm("SOMEPASSWORD1234", "SOMEPASSWORD1234")).toBe(
      formError.invalidPassword
    );
    expect(
      isValidPasswordConfirm(
        "SomeVeryLongPassword1234567890",
        "SomeVeryLongPassword1234567890"
      )
    ).toBe(formError.invalidPassword);
    expect(isValidPasswordConfirm("SomeP2", "SomeP3")).toBe(formError.notMatch);
  });

  test("valid password", () => {
    expect(
      isValidPasswordConfirm("SomePassword12", "SomePassword12")
    ).toBeUndefined();
    expect(isValidPasswordConfirm("SomeP2", "SomeP2")).toBeUndefined();
    expect(isValidPasswordConfirm("Sm1236", "Sm1236")).toBeUndefined();
  });
});
