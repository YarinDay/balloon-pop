'use strict'

var gBalloons = [
    { id: 0, bottom: 0, speed: 5 },
    { id: 1, bottom: 0, speed: 7 },
    { id: 2, bottom: 0, speed: 13 },
    { id: 3, bottom: 0, speed: 10 },
    { id: 4, bottom: 0, speed: 11 },
]

var gIntervalId
var gPopBalloon

function init() {
    renderBalloons()
}

function startGame() {
    gIntervalId = setInterval(moveBalloons, 20)
}

function moveBalloons() {
    var elBalloons = document.querySelectorAll('.balloon')
    for (var i = 0; i < gBalloons.length; i++) {
        var balloon = gBalloons[i]

        var elBalloon = elBalloons[i]

        balloon.bottom += balloon.speed

        elBalloon.style.bottom = balloon.bottom + 'px'

        if (balloon.bottom > 1000) {
            clearInterval(gIntervalId)
        }


    }
}

function popBalloon(i) {
    gPopBalloon = setInterval(fade, 10)
    var elBalloons = document.querySelectorAll('.balloon')
    var elBalloon = elBalloons[i]
    var opacity = 100
    function fade() {
        if (opacity === 0) {
            clearInterval(gPopBalloon)
            elBalloon.style.display = 'none'
        } else{
            opacity -=5
            console.log(opacity);
            elBalloon.style.opacity = opacity + '%'
        }
}


var newPopSound = new Audio('sound/PopSound.mp3')
newPopSound.play()

}

function renderBalloons() {
    var strHTML = ''
    for (var i = 0; i < gBalloons.length; i++) {
        strHTML +=
            `\n<div class="balloon balloon${i + 1}" onclick="popBalloon(${i})">
               
             </div>`
    }

    var elSky = document.querySelector('.sky')
    elSky.innerHTML = strHTML
}
