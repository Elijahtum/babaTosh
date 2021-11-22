//Baba Tosh Shop.
//Welcome
let welcome = `Hi!\nwelcome to BABA TOSH SHOP`;
console.log(welcome);

console.log(`please select Account to log-In!!
select 1 to login as admin 
select 2 to login as customer`)


//Login Options


// Method 
// User input prompt Method
const prompt = require('prompt');

const options = {
    properties: {
      option: {
        description: "Option",
        name: "number",
        type: "number",
        message: "Option must be a valid number",
        required: true,
      },
    },
  };

  const admin = {
    properties: {
      userName: {
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes',
        required: true,
      },
      password: {
          hiden: true,
          replace: '*',
      }
    },
  };

  const newCustomer = {
    properties: {
      userName: {
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes',
        required: true,
      },
      password: {
          hiden: true,
          replace: '*',
      }
    },
  };

prompt.start();

prompt.get(options, function (err, result) {
    if (err) { return onErr(err); }
    console.log(result.option)
    if (result.option === 1) {
        console.log(`Please enter your Admin Details to Log-In`)
        prompt.get(admin, function (err, result){
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
            prompt.get(admin)
        })
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}


