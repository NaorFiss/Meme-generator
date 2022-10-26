"use strict"

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

renderMeme()

function renderMeme() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    const cureMeme = getMeme()
    const elImg = new Image()
    elImg.src = [cureMeme.imgUrl]
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(cureMeme.lineTxt, 30, 40)
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = 5
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'black'
    gCtx.font = '40px Arial'
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function onInputText(txt) {
    setLineTxt(txt)
    renderMeme()
}
