var cors = require('cors')
// FileName: index.js
// Import express
const bodyParser = require('body-parser');
let express = require('express')
const http = require('http');
const path = require('path');
let apiRoutes = require("./api-routes")
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 3000;
// Send message for default URL
app.disable('etag');
// Add the code below to index.js
// Import routes
// Use Api routes in the App
app.use(cors());
app.use('/api', apiRoutes)

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {res.sendFile(path.join(__dirname,
'dist/index.html'));});
// Create HTTP server
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));


// Import Body parser
// Import MongoDB
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://test1:L1MIg2MNRfNsxiAM@cluster0-gcika.mongodb.net/test?retryWrites=true&w=majority';
 
// Database Name
const dbName = 'harpiedb';


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());


