// FileName: index.js
// Import express
const bodyParser = require('body-parser');
let express = require('express')
let apiRoutes = require("./api-routes")
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 9988;
// Send message for default URL
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running on port " + port);
});
app.disable('etag');
// Add the code below to index.js
// Import routes
// Use Api routes in the App
app.use('/api', apiRoutes)

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {res.sendFile(path.join(__dirname,
'dist/index.html'));});

// Get port from environment and store in Express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));


// Import Body parser
let bodyParser = require('body-parser');
// Import MongoDB
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://test1:L1MIg2MNRfNsxiAM@cluster0-gcika.mongodb.net/test?retryWrites=true&w=majority';
 
// Database Name
const dbName = 'harpiedb';



let mongoose = require('mongoose');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());


