import {createServer} from 'node:http';

const server = createServer((req,res)=>{

    if(req.url==='/' && req.method==='GET'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello World! Vikas2 </h1> <img src="https://akankshasabrey.com/wp-content/uploads/2024/06/IMG_9340-e1719661668230.jpg" alt="Akanksha Sabrey">');
        res.end();
    }
    else if(req.url==='/about' && req.method==='GET'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Us</h1> <p>This is about us page</p>');
        res.end();
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }

});

server.listen(8082,()=>{
    console.log('Server is running on port 8082');
});