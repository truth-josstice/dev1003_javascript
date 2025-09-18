//Import ExpressJS Package
const express = require('express');
// Create an Express Application
const app = express();
// Define a port to listen to requests
const PORT = 3000;
// Import the router and assign to a variable
// The name of the variable does not matter
const someRouterImported = require('./router');
// Tell the server to use the router,
// and specify a prefix for the router
app.use("/someFancyRouter", someRouterImported)

// Any further data to give server would be here.

// To tell the server to expect HTTP verbs other than GET, we need to configure it to use middleware
// Middleware is code that runs between the request being received and the response being sent
// The middleware we are using here is built into ExpressJS
// It configures the server to be able to handle data in JSON format and URL-encoded format
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Tell the server:
// - configure the server instance to respond to an additional route
// - the route will be a HTTP GET request on the homepage of the server (eg. http://localhost:3000/)
app.get('/', (request, response) => {
    // The resposne object manages all things regarding what gets returned to the client
    // In this case, we tell the response to send a message in HTML to the client
    response.send('<h1>Hello from ExpressJS!</h1>');
});

// Once the server has been configured, tell it to start listening to web traffic
app.listen(PORT, () => {
    // This logged message will appear in the terminal, not the browser
    console.log(`Example app listening on PORT ${PORT}.`);
});

// Note: To run this server, use the command `node index.js` in the terminal
// Then open a web browser and navigate to http://localhost:3000 to see the result.

function messageWithVerb(request, response) {
    response.send(`Received a request with the ${request.method} HTTP verb!`);
};

// POST route on localhost:3000/mirror
// with JSON body content containing a "message" variable
app.post('/mirror', (request, response) => {
    // Any submitted JSON keys will be on "body"
    // Access them with object syntax:
    let message = request.body.message;

    // Something fun to show that we can work with
    // the submitted JSON data:
    message = message.split("").reverse().join("");

    // Send back a response to the client:
    response.json({
        egassem: message
    });
});

// A GET route on localhost:3000/html
// that returns a full HTML page   
app.get('/html', (request, response) => {
    let page = `
    <h1>Homepage</h1>
    <p>Some text content.</p>
    <h2>It is currently ${new Date().toLocaleString('default', {weekday:'long'})}, all day!</h2>
    `
    response.send(page);
});

// A GET route on localhost:3000/json
// that returns a JSON object  
app.get('/json', (request, response) => {
    let someObject = {
        name: "Alex",
        isCool: true
    }
    response.json(someObject);
});

app.get('/', messageWithVerb); 
app.post('/', messageWithVerb);
app.put('/', messageWithVerb);
app.patch('/', messageWithVerb);
app.delete('/', messageWithVerb);