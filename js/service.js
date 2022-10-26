"use strict"

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'politic'] }];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getMeme() {
    const img = gImgs.find(img => img.id === gMeme.selectedImgId);
    var cureMeme = {
        imgUrl: img.url,
        lineTxt: gMeme.lines[gMeme.selectedLineIdx].txt
    }
    return cureMeme
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}