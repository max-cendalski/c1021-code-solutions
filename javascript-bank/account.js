/* exported Account */

function Account(number, holder, transactions) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) === true && amount > 0) {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) === true && amount > 0) {
    var newWithdraw = new Transaction('withdrawal', amount);
    this.transactions.push(newWithdraw);
    return true;
  } else {
    return false;
  }
};

// create two variables( vale = 0) for deposit and withdraw
// create 3 variable for result
// create loop and depend on type increment variable
//

Account.prototype.getBalance = function () {
  var deposit = 0;
  var withdraw = 0;
  var result = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposit += this.transactions[i].amount;
    } if (this.transactions[i].type === 'withdrawal') {
      withdraw += this.transactions[i].amount;
    }
  }
  result = deposit - withdraw;
  return result;
};
