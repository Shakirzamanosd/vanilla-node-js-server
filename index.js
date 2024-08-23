const http = require('http');
const fs = require('fs');
const port = 5500;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    const url = req.url;
 
    if (url === '/') {
        res.write(' This is the Home Page');
        res.end();
    }
    else if (url === '/about') {
        res.write('This is the About Page');
        res.end();
    }
    else if (url === '/contact') {
        res.write('This is the Contact Page');
        res.end();
    }
    else if (url === '/file-write') {
        fs.writeFile('demo.txt', "hello world", function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        res.write('writing file successful');
        res.end();
    }
    else {
        res.write('Hello World!');
        res.end();
    }
});

server.listen(port, () => {
  console.log(`Server is listening on ${port} port`);
});
