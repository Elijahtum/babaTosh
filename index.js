//Baba Tosh Shop.
//Welcome
let welcome = `Hi!\nwelcome to BABA TOSH SHOP`;
console.log(welcome);

//User input 
const prompt = require('prompt');

const properties = [
    {
        name: 'username',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'password',
        hidden: true
    }
];

prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    // console.log('Command-line input received:');
    console.log('Welcome ' + result.username + ' To Baba Tosh Shop.');
    // console.log('  Password: ' + result.password);
});

function onErr(err) {
    console.log(err);
    return 1;
}