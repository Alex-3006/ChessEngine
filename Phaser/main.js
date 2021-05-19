class Main extends Phaser.Scene {
    constructor() {
        super("main");
    }

    preload() {
        this.load.image('BlackPawn', 'assets/BlackPawn.png');
        this.load.image('WhitePawn', 'assets/WhitePawn.png');
        this.load.image('BlackRook', 'assets/BlackRook.png');
        this.load.image('WhiteRook', 'assets/WhiteRook.png');
        this.load.image('BlackHorse', 'assets/BlackHorse.png');
        this.load.image('WhiteHorse', 'assets/WhiteHorse.png');
        this.load.image('BlackBishop', 'assets/BlackBishop.png');
        this.load.image('WhiteBishop', 'assets/WhiteBishop.png');
        this.load.image('BlackQueen', 'assets/BlackQueen.png');
        this.load.image('WhiteQueen', 'assets/WhiteQueen.png');
        this.load.image('BlackKing', 'assets/BlackKing.png');
        this.load.image('WhiteKing', 'assets/WhiteKing.png');
        this.load.image('Board', './assets/Board.png');
    }

    create() {
        Board = this.add.sprite(380, 380, 'Board').setScale(0.9, 0.9);
        WhiteRook1 = this.add.sprite(120, 60, 'WhiteRook').setScale(2, 2);
        WhiteRook2 = this.add.sprite(695, 60, 'WhiteRook').setScale(2, 2);
        WhiteHorse1 = this.add.sprite(205, 60, 'WhiteHorse').setScale(2, 2);
        WhiteHorse2 = this.add.sprite(615, 60, 'WhiteHorse').setScale(2, 2);
        WhiteBishop1 = this.add.sprite(285, 60, 'WhiteBishop').setScale(2, 2);
        WhiteBishop2 = this.add.sprite(530, 60, 'WhiteBishop').setScale(2, 2);
        WhiteKing = this.add.sprite(365, 60, 'WhiteKing').setScale(2, 2);
        WhiteQueen = this.add.sprite(450, 60, 'WhiteQueen').setScale(2, 2);
        WhitePawn1 = this.add.sprite(120, 140, 'WhitePawn').setScale(2, 2);
        WhitePawn2 = this.add.sprite(205, 140, 'WhitePawn').setScale(2, 2);
        WhitePawn3 = this.add.sprite(285, 140, 'WhitePawn').setScale(2, 2);
        WhitePawn4 = this.add.sprite(365, 140, 'WhitePawn').setScale(2, 2);
        WhitePawn5 = this.add.sprite(450, 140, 'WhitePawn').setScale(2, 2);
        WhitePawn6 = this.add.sprite(530, 140, 'WhitePawn').setScale(2, 2);
        WhitePawn7 = this.add.sprite(615, 140, 'WhitePawn').setScale(2, 2);
        WhitePawn8 = this.add.sprite(695, 140, 'WhitePawn').setScale(2, 2);

        BlackRook1 = this.add.sprite(120, 635, 'BlackRook').setScale(2, 2);
        BlackRook2 = this.add.sprite(695, 635, 'BlackRook').setScale(2, 2);
        BlackHorse1 = this.add.sprite(205, 635, 'BlackHorse').setScale(2, 2);
        BlackHorse2 = this.add.sprite(615, 635, 'BlackHorse').setScale(2, 2);
        BlackBishop1 = this.add.sprite(285, 635, 'BlackBishop').setScale(2, 2);
        BlackBishop2 = this.add.sprite(530, 635, 'BlackBishop').setScale(2, 2);
        BlackKing = this.add.sprite(365, 635, 'BlackKing').setScale(2, 2);
        BlackQueen = this.add.sprite(450, 635, 'BlackQueen').setScale(2, 2);
        BlackPawn1 = this.add.sprite(120, 550, 'BlackPawn').setScale(2, 2);
        BlackPawn2 = this.add.sprite(205, 550, 'BlackPawn').setScale(2, 2);
        BlackPawn3 = this.add.sprite(285, 550, 'BlackPawn').setScale(2, 2);
        BlackPawn4 = this.add.sprite(365, 550, 'BlackPawn').setScale(2, 2);
        BlackPawn5 = this.add.sprite(450, 550, 'BlackPawn').setScale(2, 2);
        BlackPawn6 = this.add.sprite(530, 550, 'BlackPawn').setScale(2, 2);
        BlackPawn7 = this.add.sprite(615, 550, 'BlackPawn').setScale(2, 2);
        BlackPawn8 = this.add.sprite(695, 550, 'BlackPawn').setScale(2, 2);

        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (cursors.left.isDown) {
            
        }
    }
}