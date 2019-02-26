module.exports = {
    addR : (arr = [], elem) => [ ...arr, elem ],
    addL : (arr = [], elem) => [ elem, ...arr ],
    rmR : (arr = []) => arr.filter( (elem, i)=> i != arr.length -1 ? elem : null ),
    rmL : (arr = []) => arr.filter( (elem, i)=> i != 0 ? elem : null ),
    list : (arr = []) => arr.map( elem => console.log(elem))
}