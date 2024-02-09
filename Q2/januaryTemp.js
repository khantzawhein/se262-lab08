const fs = require('node:fs');


var january = "48,42,68\n";
january += "48,42,69\n";
january += "49,42,69\n";
january += "49,42,61\n";
january += "49,42,65\n";
january += "49,42,62\n";
january += "49,42,62\n";

fs.writeFile('./sfjanaverages.txt', january, err => {
    err ? console.log(err) : console.log('File written successfully');
})

fs.readFile('./sfjanaverages.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }

    let lines = data.trim().split('\n');

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim().split(',');
        console.log(`\nDay ${i+1}`)
        console.log(`Mean: ${line[0]}`)
        console.log(`Low: ${line[1]}`)
        console.log(`High: ${line[2]}`)

    }
})

