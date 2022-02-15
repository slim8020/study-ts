function absolute( num:number ){
    if(num < 0 ){
        num *= -1;
    }

    return num;
}

module.exports = {
    pi: 3.141592,
    squareTwo: 1.414,
    absolute,
};