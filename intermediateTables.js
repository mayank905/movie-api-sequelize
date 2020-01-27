let fs = require('fs');
let arrayobj = JSON.parse(fs.readFileSync('./data.txt', 'utf8'));
let movies=[]
let finalMovies=[]
let finalDirectors=[]
let directors=[]
for(let i=0;i<arrayobj.length;i++){
    let entry=[]
    for(let j in arrayobj[i]){
        let value=arrayobj[i][j]
        entry.push(value)
    }
    let value=arrayobj[i].Director
    directors.push(value)
    movies.push(entry)
}
//console.log(movies)
directors=[...new Set(directors)]

for(let i=0;i<directors.length;i++){
    let j=i+1
    str='{"id":'+j+', "name": "'+directors[i]+'"}'
    str1=JSON.parse(str)
    finalDirectors.push(str1)
}


// fs.appendFile('directors.txt', finalDirectors, function (err) {
//     if (err) {
//         // append failed
//     } else {
//         // done
//     }
// })





    for(let i=0;i<directors.length;i++){

        let values = [directors[i]]
    }

    for(let j=0;j<movies.length;j++){
        let n=j+1
        let k
        for( k=0; k<directors.length; k++){

            // console.log(directors[k])
            if(directors[k] === movies[j][9]){
                // console.log(k)
                break
            }
        }


        let values=movies[j]
        values.splice(9,1,k+1)



        let str2='{ "id":'+values[0]+',"title": "'+values[1]+'",'
            +'"description": "'+values[2]+'",'
            +'"runtime": "'+values[3]+'",'
            +'"genre": "'+values[4]+'",'
            +'"rating": "'+values[5]+'",'
            +'"metascore": "'+values[6]+'",'
            +'"votes": "'+values[7]+'",'
            +'"gross_earning_in_mil": "'+values[8]+'",'
            +'"director_id": "'+values[9]+'",'
            +'"actor": "'+values[10]+'",'
            +'"year": "'+values[11]+'"}'

        let str3=JSON.parse(str2)
        finalMovies.push(str3)
        //console.log(finalMovies)

}
//console.log(finalMovies)
module.exports = {
    finalMovies,
    finalDirectors
}

