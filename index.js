/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

const questions = [
    {
        type: 'input',
        name: 'url',
        message: 'Enter an URL: '
    },
]

// inquirer
inquirer.prompt(questions)
    .then(answers => {
        const URL = answers.url;
        var QR_code =  qr.image(URL, { type: 'png' });
        QR_code.pipe(fs.createWriteStream('QR_code.png'));

        fs.writeFile('URLniALi.txt', URL , (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          }); 
        
    });

