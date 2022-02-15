const Email = require("./email");
const Validator = require("./validator");

class EmailBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.email = new Email();
  }

  setFrom(address) {
    Validator.throwIfNotString(address);
    Validator.throwIfNotEmail(address);
    this.email.from = address;
    return this;
  }

  setTo(address) {
    Validator.throwIfNotString(address);
    Validator.throwIfNotEmail(address);
    this.email.to = address;
    return this;
  }

  setTitle(title) {
    Validator.throwIfNotString(title);
    this.email.title = title;
    return this;
  }

  setCc(...ccAddresses) {
    Validator.throwIfNotOnlyStringsInArr([...ccAddresses]);
    Validator.throwIfNotOnlyEmailsInArr([...ccAddresses]);
    this.email.cc = [...ccAddresses];
    return this;
  }

  setBcc(...bccAddresses) {
    Validator.throwIfNotOnlyStringsInArr([...bccAddresses]);
    Validator.throwIfNotOnlyEmailsInArr([...bccAddresses]);
    this.email.bcc = [...bccAddresses];
    return this;
  }

  setHtml(text) {
    Validator.throwIfNotString(text);
    this.email.html = text;
    return this;
  }

  getEmail() {
    console.log(this.email);
  }

  buildMail = () => {
    this.throwIfNoAdresseeOrReceipant();
    const result = JSON.stringify(this.email);
    this.reset();
    return result;
    // return this._mail;
  };

  throwIfNoAdresseeOrReceipant = () => {
    if (this.email.from.length === 0 || this.email.to.length === 0) {
      throw new Error(
        "Before sending an email you must enter Adressee and Receipant email"
      );
    }
  };
}

module.exports = EmailBuilder;
