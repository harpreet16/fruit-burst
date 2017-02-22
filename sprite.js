//var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
var timer;
var total=1;
var count=0;
var mu,music;
var Game={


preload: function() {

    game.load.image('back','back.png');
    game.load.image('grapes','grapes.png');
    game.load.image('guava','guava.png');
    game.load.image('watermelon','watermelon.png');
    game.load.image('orange','orange.png');

    game.load.audio('boden', 'bodenstaendig_2000_in_rock_4bit.ogg');
     game.load.audio('m2',  'numkey_wrong.wav');



},

create: function() {

    mu = game.add.audio('m2');
    music = game.add.audio('boden');
    
    music.play();
    timer=game.time.create(false);
    timer.loop(1000,updateCounter,this);
        timer.start();

    function updateCounter()
    {
        total++;
        if(total==11)
        {
            music.stop();
            alert("YOU LOST  :(");
            mu.play();
    game.state.start('Game_Over');
    total=1;
    }
}

     game.add.image(0, 0, 'back');

   
     
    

    var mx = game.width - game.cache.getImage('grapes').width;
    var my = game.height - game.cache.getImage('grapes').height;

    for (var i = 0; i < 10; i++)

    {
       game.add.image(game.rnd.integerInRange(0, mx), game.rnd.integerInRange(0, my), 'guava');
         game.add.image(game.rnd.integerInRange(0, mx), game.rnd.integerInRange(0, my), 'watermelon');
           game.add.image(game.rnd.integerInRange(0, mx), game.rnd.integerInRange(0, my), 'orange');


        var sprite = game.add.sprite(game.rnd.integerInRange(0, mx), game.rnd.integerInRange(0, my), 'grapes');

        sprite.inputEnabled = true;

        sprite.input.useHandCursor = true;

        sprite.events.onInputDown.add(destroySprite, this);
    }

function destroySprite (sprite) {

    sprite.destroy();
    count++;
    if(count==10) 
    {
        music.stop();
        alert("YOU WON :)");
        game.state.start('Game_Over');
        total=1;

}
 
}
},

update: function()
{
    game.debug.text('TIME: ' + total,32,32);
     game.debug.text('SCORE: ' + count,700,32);
} 
};


