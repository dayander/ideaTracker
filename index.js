//1
var http = require('http');
var express = require('express');
path = require('path');



//express start
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');

//MONGO STUFF
const MongoStore = require('connect-mongo');
var mongoose = require('mongoose');

const dbURI = "mongodb://dayander:Burton12!@ideatracker-shard-00-00-wwwir.mongodb.net:27017,ideatracker-shard-00-01-wwwir.mongodb.net:27017,ideatracker-shard-00-02-wwwir.mongodb.net:27017/tracker?ssl=true&replicaSet=ideaTracker-shard-0&authSource=admin&retryWrites=true";

mongoose.connect(dbURI);


var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mongoose.connection;

db.on('error', console.error.bind(console, '# MongoDB connection error:'));

//END OF MONGOOSE CONNECTION




//IDEAS DATABASE

var Ideas = require('./models/idea.js');


app.get('/ideas', function (req, res) {
    Ideas.find(function (err, ideas) {
        if(err){
            throw err;
        }
        console.log(ideas);

        res.json(ideas)

    })
})



//PROJECT TEST

var Projects = require('./models/projects.js');


app.get('/projects', function(req, res){
    console.log('projects');

    console.log('req: ', req.body)

    console.log(db.co)

    Projects.find(function(err, projects){
        if(err){
            throw err;
        }
        console.log(projects);
        res.json(projects)
    })
});

//END OF PROJECTS EXAMPLE





//ERROR HANDELING//

app.use(function (req,res) { //1
    res.render('404', {url:req.url}); //2
});


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

