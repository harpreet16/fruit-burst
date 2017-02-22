var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('menu', 'main.jpg');

        game.load.audio('s1', [ 'door_open.wav']);

    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        this.add.button(0, 0, 'menu', this.startGame, this);
        m = game.add.audio('s1');
        m.play();

    },

    startGame: function () {

        // Change the state to the actual game.
        m.stop();
        this.state.start('Game');

    }

};
