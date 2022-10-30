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
    renderMeme()
}

function onChangeFontSize(fontSize) {
    changeFontSize(fontSize)
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    console.log("getElementsByName ", document.getElementsByName('txt-line'))
    document.getElementsByName('textLine').placeholder = getText()
    renderMeme()
}

function onClickMeme() {
    var elMeme = document.querySelector('.meme-editor')
    elMeme.classList.remove('hide')
    var elMainGallery = document.querySelector('.main-galery')
    elMainGallery.classList.add('hide')
}

function onClickGallery() {
    var elMeme = document.querySelector('.meme-editor')
    elMeme.classList.add('hide')
    var elMainGallery = document.querySelector('.main-galery')
    elMainGallery.classList.remove('hide')
}

function onAddLine() {
    addLine()
}

function onDeleteLine() {
    deleteLine()
}

