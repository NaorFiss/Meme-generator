"use strict"

var gElCanvas
var gCtx

function onInit() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function renderMeme() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    const cureImg = getImg()
    const elImg = new Image()
    elImg.src = [cureImg]
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        var cureMeme = getMeme()
        cureMeme.lines.forEach((line, index) => {
            var text = line.txt
            setLineDefinitions(index)
            if (index === 0) { drawText(text, 30, 40) }
            else if (index === 1) { drawText(text, 30, 370) }
            else { drawText(text, 30, 205) }
        })
    }
}

function setLineDefinitions(idx) {
    gCtx.fillStyle = getFillStyle(idx)
    const fontSize = getFontSize(idx)
    gCtx.font = fontSize + 'px Impact'
}
function drawText(text, x, y) {
    gCtx.strokeStyle = 'black'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onInputText(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
    onClickMeme()
}

function onChangeColor(lineColor) {
    changeColor(lineColor)
}

function onChangeFontSize(fontSize) {
    changeFontSize(fontSize)
}

function onSwitchLine() {
    switchLine()
}

function onClickMeme() {
    var elMeme = document.querySelector('.meme-editor')
    elMeme.classList.add('open')
}

function onClickGallery() {
    var elMeme = document.querySelector('.meme-editor')
    elMeme.classList.remove('open')
}

function onAddLine() {
    addLine()
}


