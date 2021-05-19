let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: 0xfffffffff,
    scene: [Main],
    title: "Journey",
    version: "0.0.1",
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
};

let game = new Phaser.Game(config);
let Board;
let WhiteRook1;
let WhiteRook2;
let BlackRook1;
let BlackRook2;
let WhiteHorse1;
let WhiteHorse2;
let BlackHorse1;
let BlackHorse2;
let WhiteBishop1;
let WhiteBishop2;
let BlackBishop1;
let BlackBishop2;
let WhiteQueen;
let BlackQueen;
let WhiteKing;
let BlackKing;
let WhitePawn1;
let WhitePawn2;
let WhitePawn3;
let WhitePawn4;
let WhitePawn5;
let WhitePawn6;
let WhitePawn7;
let WhitePawn8;
let BlackPawn1;
let BlackPawn2;
let BlackPawn3;
let BlackPawn4;
let BlackPawn5;
let BlackPawn6;
let BlackPawn7;
let BlackPawn8;
let cursors;