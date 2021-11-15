
let ship = sprites.create(img`
    . . . . . b b b b b b . . . . .
    . . . b b 9 9 9 9 9 9 b b . . .
    . . b b 9 9 9 9 9 9 9 9 b b . .
    . b b 9 d 9 9 9 9 9 9 9 9 b b .
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b .
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b
    . b 5 3 3 3 d 9 9 9 9 d d 5 b .
    . b d 5 3 3 3 3 3 3 3 d 5 b b .
    . . b d 5 d 3 3 3 3 5 5 b b . .
    . . . b b 5 5 5 5 5 5 b b . . .
    . . . . . b b b b b b . . . . .
`, SpriteKind.Player)
ship.setPosition(20,60)
controller.moveSprite(ship,0, 100)
ship.setStayInScreen (true)
game.onUpdateInterval(1000, function () {
    let rock = sprites.create(img`
        . . . . . . . e c 7 . . . . . .
        . . . . e e e c 7 7 e e . . . .
        . . c e e e e c 7 e 2 2 e e . .
        . c e e e e e c 6 e e 2 2 2 e .
        . c e e e 2 e c c 2 4 5 4 2 e .
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
        . e e e 2 2 2 2 2 2 2 2 2 4 e .
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
        . . 2 e e 2 2 2 2 2 4 4 2 e . .
        . . . 2 2 e e 4 4 4 2 e e . . .
        . . . . . 2 2 e e e e . . . . .
    `, SpriteKind.Enemy)
    rock.setPosition(150, randint(0, 120))

    rock.setVelocity(-40, 0)
    
    rock.setFlag(SpriteFlag.AutoDestroy, true)
    
})
info.setScore(0)

sprites.onDestroyed(SpriteKind.Enemy, function (sprite){

    info.changeScoreBy(1)
})