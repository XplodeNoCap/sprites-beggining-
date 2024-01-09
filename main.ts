sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.hearts, 100)
    rand = randint(0, 2)
    if (info.score() == 7) {
        scene.setBackgroundImage(assets.image`Shenron`)
    }
})
let projectile: Sprite = null
let rand = 0
let Onearmedwarrior = sprites.create(assets.image`One armed warrior`, SpriteKind.Player)
scene.setBackgroundColor(9)
controller.moveSprite(Onearmedwarrior)
Onearmedwarrior.setStayInScreen(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(assets.image`Dragonball`, 50, 0)
    projectile.setPosition(0, randint(0, 120))
})
