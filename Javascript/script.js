const { Chess } = require('./chess');
const chess = new Chess();

chess.move('e5')

console.log(chess.ascii());