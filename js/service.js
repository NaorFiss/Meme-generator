"use strict"

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gImgs = [
    { id: "1", url: 'img/1.jpg', keywords: ['funny', 'politic'] },
    { id: "2", url: 'img/2.jpg', keywords: ['funny', 'animals'] },
    { id: "3", url: 'img/3.jpg', keywords: ['funny', 'animals'] },
    { id: "4", url: 'img/4.jpg', keywords: ['funny', 'animals'] },
    { id: "5", url: 'img/5.jpg', keywords: ['funny', 'animals'] },
    { id: "6", url: 'img/6.jpg', keywords: ['funny', 'animals'] },
    { id: "7", url: 'img/7.jpg', keywords: ['funny', 'animals'] },
    { id: "8", url: 'img/8.jpg', keywords: ['funny', 'animals'] },
    { id: "9", url: 'img/9.jpg', keywords: ['funny', 'animals'] },
    { id: "10", url: 'img/1.jpg', keywords: ['funny', 'politic'] },
    { id: "11", url: 'img/11.jpg', keywords: ['funny', 'politic'] },
    { id: "12", url: 'img/12.jpg', keywords: ['funny', 'animals'] },
    { id: "13", url: 'img/13.jpg', keywords: ['funny', 'animals'] },
    { id: "14", url: 'img/14.jpg', keywords: ['funny', 'animals'] },
    { id: "15", url: 'img/15.jpg', keywords: ['funny', 'animals'] },
    { id: "16", url: 'img/16.jpg', keywords: ['funny', 'animals'] }
]

let gMeme = {
    selectedImgId: '',
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: '40',
            align: 'left',
            color: 'white',
            x: '30'
        },
    ]
}
function deleteLine() {
    var idx = gMeme.selectedLineIdx
    gMeme.lines.splice(idx, 1)
}
function addLine() {
    var newLIne = makeLine()
    gMeme.lines.push(newLIne)
}
function makeLine() {
    return {
        txt: '',
        size: '40',
        align: 'left',
        color: 'white',
        x: '30'
    }
}
function getText() {
    return gMeme.lines[gMeme.selectedLineIdx].txt
}
function getImg() {
    var cureImg = gImgs.find(img => +img.id === +gMeme.selectedImgId)
    return cureImg.url
}

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setImg(imgId) {
    const img = gImgs.find(img => img.id === imgId)
    gMeme.selectedImgId = imgId
}

function getFontSize(idx) {
    return gMeme.lines[idx].size
}

function getFillStyle(idx) {
    var lineColor = gMeme.lines[idx].color
    return lineColor
}

function getSelectedLineIdx() {
    return gMeme.selectedLineIdx
}

function changeColor(lineColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = lineColor
}

function changeFontSize(fontSize) {
    gMeme.lines[gMeme.selectedLineIdx].size = fontSize
}

function switchLine() {
    gMeme.selectedLineIdx = (gMeme.lines.length === gMeme.selectedLineIdx + 1) ? 0 : gMeme.selectedLineIdx + 1
    console.log(gMeme.lines[gMeme.selectedLineIdx].txt)
    setLineTxt(gMeme.lines[gMeme.selectedLineIdx].txt)

}

