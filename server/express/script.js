import express from 'express';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies (optional)
app.use(express.urlencoded({ extended: true }));

app.listen(8082, () => {
    console.log('Server is running on port 8082');
});

app.get('/', (req, res) => {
    res.send('<h1>Hello World! Vikas: I am Express</h1> <img src="https://akankshasabrey.com/wp-content/uploads/2024/06/IMG_9340-e1719661668230.jpg" alt="Akanksha Sabrey">');
}
);

app.post('/', (req, res) => {
    console.log(req.body);

    res.send(`Your Post Request is successful, we got your data`);
}
);
