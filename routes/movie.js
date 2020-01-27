var db = require('../models');
var Movies=db.movies;

const getMovies= function(req, res) {
    Movies.findAll()
        .then(function (users) {
            res.status(200).json(users);
        })
        .catch((error)=>{
            res.status(500).json(error);
        })
}


const getMovieById=function(req, res) {
    Movies.findAll({
        where: {
            id: req.params.movieId
        }
    })
        .then(function (result) {
            //console.log(result)
            if(result.length==0){
                res.status(404).json("No record Found")
            }
            else{
                res.status(200).json(result);
            }
        })
        .catch((error)=>{
            res.status(500).json(error);
        })
}


const createMovie=function(req, res) {
        Movies.create({
            title: req.body.title,
            description:req.body.description,
            runtime: req.body.runtime,
            genre: req.body.genre,
            rating: req.body.rating,
            metascore:req.body.metascore,
            votes: req.body.votes,
            gross_earning_in_mil:req.body.gross_earning_in_mil,
            director_id:req.body.director_id,
            actor:req.body.actor,
            year:req.body.year
        }).then(function (result) {
            res.status(201).json(result);
        })
            .catch((error)=>{
                res.status(500).json(error);
            })

}


const updateMovieById= function(req, res) {
    console.log(req.body)
        Movies.update({
            title: req.body.title,
            description:req.body.description,
            runtime: req.body.runtime,
            genre: req.body.genre,
            rating: req.body.rating,
            metascore:req.body.metascore,
            votes: req.body.votes,
            gross_earning_in_mil:req.body.gross_earning_in_mil,
            director_id:req.body.director_id,
            actor:req.body.actor,
            year:req.body.year
        }, {
            where: {
                id: req.params.movieId
            }
        })
            .then(function (result) {
                console.log(result)
                if (result[0] == 0) {
                    res.status(404).json("No record Found")
                } else {
                    res.status(200).json(result);
                }
            })
            .catch((error) => {
                res.status(500).json(error);
            })
}

const deleteMovieById= function(req, res) {
    Movies.destroy({
        where: {
            id: req.params.movieId
        }
    }).then(function (result) {
            console.log(result)
            if (result==0) {
                res.status(404).json("No record Found")
            } else {
                res.status(200).json(result);
            }
        })
        .catch((error) => {
            res.status(500).json(error);
        })

}


module.exports={
    getMovies,
    getMovieById,
    createMovie,
    updateMovieById,
    deleteMovieById
}
