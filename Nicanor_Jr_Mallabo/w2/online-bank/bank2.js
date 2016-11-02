console.log("Online Bank v2");

var createAccounts = function(currentBalance) {
    var balance = currentBalance;
    var amount;

    return {
        deposit: function() {
            balance =+ amount;
        },

        withdraw: function() {
            balance =- amount;
        },

        getBalance: function() {
            return balance = 0;
            
        },

        setBalance: function()
        {

        }
    } //return functions of namespace
} //namespace 