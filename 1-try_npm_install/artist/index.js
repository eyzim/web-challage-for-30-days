const figlet = require('figlet')
const color = require('colors')

const output = process.argv[2];
const choose_color = process.argv[3];

figlet(output, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    if(choose_color)
    {
        console.log(data.red);
    }
    else
        console.log(data.rainbow);
});