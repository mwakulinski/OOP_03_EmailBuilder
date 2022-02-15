const EmailBuilder = require("./email-builder");

const builder = new EmailBuilder();

const newEmail = builder
  .setFrom("michal.michal@o2pl")
  .setTo("mich.mich@op.pl")
  .setTitle("Jak się masz")
  .setCc("Basia.ww@op.pl", "Kasia.ww@op.pl")
  .buildMail();

console.log(newEmail);

const newEmail1 = builder
  .setFrom("michal.michal@o2pl")
  .setTo("mich.mich@op.pl")
  .buildMail();

console.log(newEmail1);

const newEmail2 = builder
  .setFrom("michal.michal@o2pl")
  .setTo("mich.mich@op.pl")
  .setHtml(
    "balaalajfsakdjhfsiludfhgiulsdf dsifhg ghdkjfg djhfg dsjfhg dfhgdkjf gdhfg dkjhfg dfgd fgjhdkfjg dhfg djfhg dkfg"
  )
  .buildMail();

console.log(newEmail2);
