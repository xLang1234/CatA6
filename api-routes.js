// api-routes.js
// Initialize express router
let router = require('express').Router();
var http = require("http");
var querystring = require('querystring');

// Import MongoDB
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://test1:L1MIg2MNRfNsxiAM@cluster0-gcika.mongodb.net/test?retryWrites=true&w=majority';
 
// Database Name
const dbName = 'test1';
var db = null;
MongoClient.connect(url, function(err, client) {
   assert.equal(null, err);
   console.log("Connected successfully to server");
 
   var cb = function(res) {
        console.log("Operation completed : " , res);
      }
  
   db = client.db(dbName);
   //insertDocuments(db, cb );
 });

//http://192.168.1.183:9988/api?action=read&data={%22a%22:2}&entity=Contact

router.post('/', function (req, res) {
    HandleRequests(req , res);
})
router.get('/', function (req, res) {
    console.log("Request : " , req)
    // console.log("res : " , res);
    HandleRequests(req , res);
});

// router.post('/login', function (req, res) {
//     doLogin(req , res);
// })
// router.get('/login', function (req, res) {
//     doLogin(req , res);
// });

var initiateCreate = function ( res, data , entity){
    var cb = function(resp){
        console.log("TCL: cb -> resp", resp)
        var successCount = 0;
        var errorCount = 0;
        var errorMsg = [];
        if(resp != undefined){
            if(Array.isArray(resp)){
                for (var i  = 0 ; i < resp.length ; i++){
                    if(resp[i].err == null){
                        successCount += 1;
                    }
                    else {
                        errorCount += 1;
                        errorMsg.push("\n" + resp[i].err );
                    }
                }
            }
            res.end("Inserted " + successCount + " records into " + entity + "\nErrorCount : " + errorCount + "\nError Message : " + errorMsg);
        }
        else{
            res.end("Inserted with no results from resp.")
        }
        
    }
    insertDocuments(cb, data , entity);
}

var initiateRead = function (res, data , entity){
    var query = JSON.parse(data);
    var cb = function(result){
        console.log("TCL: cb -> result", result)
        res.json(removeIdFromDocument(result));
    }
    findDocuments(cb, query , entity);
}

var initiateUpdate = function (res , data ,entity ){
    var cb = function(result){
        console.log("TCL: cb -> result", result)
        res.end("Update : " , JSON.stringify(result));
    }
    updateDocument(cb, data , entity);
}

var initiateDelete = function (res , data , entity){
    var cb = function(result){
        console.log("TCL: cb -> result", result)
        res.end("Delete : " , JSON.stringify(result));
    }
    removeDocument(cb, data , entity);
}

var initiateDuplicateCheck = function ( res , data , entity ){
    var cb = function (result){
        if(result.length > 0){
            res.end("1");
        }
        else{
            res.end("0");
        }
    }

    findDocuments(cb, data , entity);
}


var HandleRequests = function ( req , res){
    var curAction = req.query.action;
    var data = req.query.data;
    var entity = req.query.entity;
    
    
    


     

    // console.log(res)
    if(curAction == undefined || entity == undefined || data == undefined){
        res.writeHead(200, {

        });

        res.end("Either Action / Entity / Data is missing; \nSample call : http://192.168.1.183:9988/api?action=read&data={a%22:2}&entity=Contact")
    }
    else {
        console.log("TCL: HandleRequests -> data", data)
        var query = JSON.parse(data);
        
        switch(curAction){
            case "create":
                initiateCreate(res, data , entity);
                break;
            case "read":
                initiateRead(res , data , entity);
                break;
            case "update":
                initiateUpdate(res , data , entity);
                break;
            case "delete":
                initiateDelete(res , data , entity);
                break;
            case "readDup":
                initiateDuplicateCheck( res, data , entity);
                break;
            // case "createSecure":
            //     initiateCreateSecure(res, data , entity);
            //     break;
            // case "readSecure":
            //     initiateReadSecure(res , data , entity);
            //     break;
            // case "updateSecure":
            //     initiateUpdateSecure(res , data , entity);
            //     break;
            // case "deleteSecure":
            //     initiateDeleteSecure(res , data , entity);
            //     break;
            default:
                res.end("Action " + curAction + " is not registered.");
        }
    }
}


// This function does conversion for queries to array types. Easy to insert.
var convertJSONToArray = function ( data ){
    console.log("TCL: convertJSONToArray -> data", data)

    data = JSON.parse(data);
    if( Array.isArray(data) ){
        return data
    }
    else{
        var arr = [];
        arr.push(data);
        console.log("arr : " , arr)
        return arr;
    }
}

var removeIdFromDocument = function ( data ){
    if( Array.isArray(data) ){
        for( var i = 0 ; i < data.length ; i++){    
            delete data[i]._id;
        }
    }
    else{
        delete data._id
    }
    return data;
}


var doLogin = function ( req , res ){
    var username = req.username;
    var password = req.password;
    var entity = "User";

    var loginCallback = function (docs){
        console.log("doc : " + docs.toString());
    }
    findDocuments( loginCallback, req , entity);
}

var insertOneDocument = function ( collection , convertedQuery , cb , i )
{
    collection.insert((convertedQuery), function(err, result) {
        cb ({ err : err , result : result} , i);
    });
}

const insertDocuments = function(callback , query , entity) {

    // Existing issue : Unable to add in data with duplicated primary key. 
    // To solve , insert one by one and check for error.
    // If error is found , and is a duplicate primary key , do an update instead of insert.

    var convertedQuery = convertJSONToArray(query);
    var collection = db.collection(entity);
    
    if( Array.isArray(convertedQuery) ){
        console.log("Array : " , Array.isArray(convertedQuery))
        var end = convertedQuery.length - 1;
        var allRes = [];
        var cb = function (res , i ){
            console.log("Results : " , res);
            allRes.push(res);
            if(i == end){
                callback ( allRes );
            }
            else{
                console.log("Insert might fail.");
            }
            // 
        }
        for( var i = 0 ; i < convertedQuery.length; i++){
            insertOneDocument(collection , convertedQuery[i] , cb , i );
        }
    }
    else{
        var cb = function (res){
            console.log("Results : " , res);
            callback ( [res.result] );
        }
        insertOneDocument(collection , convertedQuery , cb , 0);
    }
  }
  
  const findDocuments = function(callback , query , entity) {
    // Get the Contact collection
    const collection = db.collection(entity);
    // Find some Contact
    //query = JSON.parse(query);
    collection.find(query).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
  
  const updateDocument = function(callback , query , entity) {
    // Get the Contact collection
    const collection = db.collection(entity);
    console.log("Typeof , " , typeof query);
    var key = JSON.parse(query).username;
    
    var q = { "username" : key };

    if (entity == "Cat")
        q = { "name" : JSON.parse(query).name }
    console.log("TCL: updateDocument -> key", key)
    
    // Update document where a is 2, set b equal to 1

    collection.updateMany(q
      , { $set: JSON.parse(query) }, function(err, result) {
      console.log("Updated the document : " , result);
      console.log("Err : " , err);
      
      callback(result);
    });
  }
  
  const removeDocument = function(callback , query , entity) {
    // Get the Contact collection
    const collection = db.collection(entity);
    // Delete document where a is 3
    collection.deleteMany( query , function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document");
      callback(result);
    });
  }

// var contactController = require('./contactController');
// // Contact routes

// var loginController = require('.loginController');
// router.route('/login')
//     .get(doLogin)
//     .post(doLogin);
// router.route('/contacts/:contact_id')
//     .get(findDocuments)
//     .patch(updateDocument)
//     .put(updateDocument)
//     .delete(removeDocument);
// Export API routes
module.exports = router;
