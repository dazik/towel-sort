// You should implement your task here.

module.exports = function towelSort(matrix) {
    let resarr = [];
    if (matrix === undefined || matrix.length === 0) {
        return resarr;
    }
    for (let i = 0; i < matrix.length; i++) {
        if ((i % 2) === 0) {
            resarr = resarr.concat(matrix[i]);
        } else {
            resarr = resarr.concat(matrix[i].reverse());
        }
    }
    console.log(resarr);
    return resarr;
}