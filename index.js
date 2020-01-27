var express = require('express');
var app = express();
var director=require('../movies_api_sequelize/routes/director')
var movie=require('../movies_api_sequelize/routes/movie')
var db = require('./models');
const bodyParser = require('body-parser')
const logger=require('./winston')



app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

app.use(require("morgan")("combined", { "stream": logger.stream }));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/api/directors',director.getDirectors)
app.get('/api/directors/:directorId', director.getDirectorById)
app.post('/api/directors', director.createDirector)
app.put('/api/directors/:directorId', director.updateDirectorById)
app.delete('/api/directors/:directorId', director.deleteDirectorById)

app.get('/api/movies',movie.getMovies)
app.post('/api/movies',movie.createMovie)
app.get('/api/movies/:movieId',movie.getMovieById)
app.put('/api/movies/:movieId',movie.updateMovieById)
app.delete('/api/movies/:movieId',movie.deleteMovieById)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(3000, function() {
    db.sequelize.sync();
});
