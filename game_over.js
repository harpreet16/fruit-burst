var Game_Over = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('gameover', 'over.jpg');
    },

    create : function() {

        // Create button to start game similar to the main menu.
        this.add.button(0, 0, 'gameover', this.startGame, this);

        // Last Score Info.
       // game.add.text(400, 450, "LAST SCORE", { font: "bold 24px sans-serif", fill: "#46c0f9", align: "center"});
        game.add.text(400, 370, count.toString(), { font: "bold 30px sans-serif", fill: "#210138", align: "center" });

    },

    startGame: function () {

        // Change the state to the actual game.
        count=0;
        this.state.start('Game');

    }

};
