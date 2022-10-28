const fs = require('fs');
const folderName = process.argv[2] || 'MyProject'

try
{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`,"");    
    fs.writeFileSync(`${folderName}/app.js`, "");
    fs.writeFileSync(`${folderName}/styles.css`, "");
    console.log("Finished :)")
}
catch (e)
{
    console.log("fix me :(");
    console.log(e);
}