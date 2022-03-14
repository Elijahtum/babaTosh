//Baba Tosh Shop.
//Welcome
let welcome = `Hi!\nwelcome to BABA TOSH SHOP`;
console.log(welcome);

console.log(`please select Account to log-In!!
Type: (1) to login as admin 
Type: (2) to login as customer`)


//Login Options


// Method 
// User input prompt Method
const prompt = require('prompt');

const options = {
    properties: {
      option: {
        description: "Answer",
        name: "number",
        type: "number",
        message: "Option must be a valid number",
        required: true
      },
    },
  };

  const logIn = {
    properties: {
      userName: {
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes',
        required: true
      },
      password: {
          hidden: true,
          replace: '*'
      }
    },
  };

  const newCustomer = {
    properties: {
      userName: {
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, with spaces, or dashes.',
        required: true,
      },
      password: {
          hidden: true,
          replace: '*'
      }
    },
  };

// prompt.start();

prompt.get(options, function (err, result) {
    if (err) { return onErr(err); }
    console.log(result.option)
    if (result.option === 1) {
        console.log(`Please enter your Admin Details to Log-In`)
        prompt.get(logIn, function (err, result){
        console.log(`Hello, ${result.userName} what would you like to Do?
        1) Stock Taking
        2) Accounting 
        3) Customer management`)
        })
    }
    if (result.option === 2) {
        console.log(`Please select if you are a new customer or returning 
        1) New cutomer 
        2) Returning Customer`)
        prompt.get(options, function (err, result){
            if (result.option === 1) {
                console.log(`We would love to set you up in the system
                please enter your details`)
            }
            else if (result.option === 2) {
                console.log(`Thank you for returning to our Shop.
                please logIn`)
            }
            prompt.get(logIn, function (err, result){
                console.log(`Hello, ${result.userName} your logIn was sucessfull!!
                1) To Shop
                2) To view Balance`)
            })
        })
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}