class EmailBuilder {
  constructor() {
    this._mail = {
      from: "",
      to: "",
      title: "",
      cc: [],
      bcc: [],
      html: "",
    };
  }

  setFrom(address) {
    //walidacja
    this._mail.from = address;
    return this;
  }

  setTo(address) {
    this._mail.to = address;
    return this;
  }

  setTitle(title) {
    this._mail.title = title;
    return this;
  }

  setCc(ccAddresses) {
    this._mail.cc = [...ccAddresses];
    return this;
  }

  setBcc(bccAddresses) {
    this._mail.bcc = [...bccAddresses];
    return this;
  }

  setHtml(text) {
    this._mail.html = text;
    return this;
  }

  // Stwórz metody które będą zmieniać parametry from, to, title, cc, bcc, html

  buildMail = () => {
    Verification.checkIfHasOnlyStringOrUndefined(Object.values(this._mail));
    Verification.throwIfNoAdresseeOrReceipant(this._mail);
    this.reset();
    return JSON.stringify(this._mail);
    // return this._mail;
  };
}

class Verification {
  //
  static throwIfNoAdresseeOrReceipant = (obj) => {
    if (obj.from.length === 0 || obj.to.length === 0) {
      throw new Error(
        "Before sending an email you mast enter Adressee and Receipant email"
      );
    }
  };

  static throwIfNotString = (arr) => {
    if (!this.checkIfHasOnlyStringOrUndefined(arr)) {
      throw new Error("All values must be string");
    }
  };

  //przyjrzyj sie jeszcze raz
  static checkIfHasOnlyStringOrUndefined = (arr) => {
    return arr.every((item) => {
      if (typeof item === "object") {
        return this.checkIfHasOnlyStringOrUndefined(item);
      }
      return typeof item === "string" || item === undefined;
    });
  };
}

const newEmail = new EmailBuilder()
  .setFrom("michal.michal.o2pl")
  .setTo("mich.mich@op.pl")
  .setTitle("Jak się masz")
  .setCc("Basia.ww@op.pl", "Kasia.ww@op.pl")
  .buildMail();

console.log(newEmail);
const newEmail1 = new EmailBuilder()
  .setFrom("michal.michal.o2pl")
  .setTo("mich.mich@op.pl")
  .buildMail();

console.log(newEmail1);

const newEmail2 = new EmailBuilder()
  .setFrom("michal.michal.o2pl")
  .setTo("mich.mich@op.pl")
  .setHtml(
    "balaalajfsakdjhfsiludfhgiulsdf dsifhg ghdkjfg djhfg dsjfhg dfhgdkjf gdhfg dkjhfg dfgd fgjhdkfjg dhfg djfhg dkfg"
  )
  .buildMail();

console.log(newEmail2);
