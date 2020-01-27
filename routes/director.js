var db = require('../models');
const logger=require('../winston')

var Directors=db.directors;

const getDirectors= function(req, res) {
    Directors.findAll()
        .then(function (users) {

            res.status(200).json(users);
        })
        .catch((error)=>{
            logger.error(error.stack)
            res.status(500).json(error);
        })
}

const getDirectorById=function(req, res) {
    Directors.findAll({
        where: {
            id: req.params.directorId
        }
    })
        .then(function (result) {
            //console.log(result)
            if(result==0){
                res.status(404).json("No record Found")
            }
            else{
                res.status(200).json(result);
            }
        })
        .catch((error)=>{
            logger.error(error.stack)
            res.status(500).json(error);
        })
}



const createDirector=function(req, res) {
    console.log(req.body)
    let variable
    for(let column in req.body){variable=column}
    //console.log(variable)
    if (variable == "name") {

        Directors.create({
            name: req.body.name
        }).then(function (result) {
            res.status(201).json(result);
        })
            .catch((error)=>{
                logger.error(error.stack)
                res.status(500).json(error);
            })
    }
    else{
        res.status(422).json("invalid data")
    }
}


const updateDirectorById= function(req, res) {
    const id = parseInt(req.params.directorId)
    let variable = Object.keys(req.body)[0]
    if (variable == "name")
    {

        Directors.update({name: req.body.name}, {
            where: {
                id: req.params.directorId
            }
        })
            .then(function (result) {
                //console.log(result)
                if (result.length == 0) {
                    res.status(404).json("No record Found")
                } else {
                    res.status(200).json(result);
                }
            })
            .catch((error) => {
                logger.error(error.stack)
                res.status(500).json(error);
            })
    }
    else{
        res.status(422).json("invalid data")
    }
}

const deleteDirectorById= function(req, res) {
    Directors.destroy({
        where: {
            id: req.params.directorId
        }
    })
        .then(function (result) {
            //console.log(result)
            if (result == 0) {
                logger.error("No Record Found");
                res.status(404).json("No record Found")
            } else {
                res.status(200).json(result);
            }
        })
        .catch((error) => {
            logger.error(error.stack);
            res.status(500).json(error);
        })

}


module.exports={
    getDirectors,
    getDirectorById,
    createDirector,
    updateDirectorById,
    deleteDirectorById
}
