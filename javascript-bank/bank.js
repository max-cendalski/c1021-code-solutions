/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

// check getBalance if it's positive integer
// create object
// increment balance
// add newAccount to accounts

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) === true && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

// create for loop to check all bank accounts
// compare them with number (argument)

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};
// create result variable
// loop through all accounts and add value from getBalance() to result
Bank.prototype.getTotalAssets = function () {
  var result = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    result += this.accounts[i].getBalance();
  }
  return result;
};
