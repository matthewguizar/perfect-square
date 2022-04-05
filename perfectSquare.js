const perfectSquare = (sq) => {
    let num; 
    let nextNum;
    if (Math.sqrt(sq) % 1 === 0){
    num = Math.sqrt(sq)
    nextNum = num + 1
}else {
    console.log( -1)
}
console.log( nextNum*nextNum)
}
perfectSquare(289)