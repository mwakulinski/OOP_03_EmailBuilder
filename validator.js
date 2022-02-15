class Validator {
  //

  static throwIfNotString = (input) => {
    if (typeof input !== "string") {
      throw new Error("Input data must be string");
    }
  };

  static throwIfNotEmail = (value) => {
    const regExpToCheckIfEmail = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$"
    );
    if (!regExpToCheckIfEmail.test(value))
      throw new Error("Please provide a valid email");
  };

  //przyjrzyj sie jeszcze raz
  static throwIfNotOnlyStringsInArr = (arr) => {
    arr.forEach((item) => Validator.throwIfNotString(item));
  };

  static throwIfNotOnlyEmailsInArr = (arr) => {
    arr.forEach((item) => Validator.throwIfNotEmail(item));
  };
}

module.exports = Validator;
