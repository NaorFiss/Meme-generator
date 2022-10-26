"use strict"

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'politic'] },
{ id: 2, url: 'img/2.jpg', keywords: ['funny', 'animals'] }]

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
    console.log("inside getMeme: imgId: ", gImgs[gMeme.selectedImgId - 1].id)
    const cureImg = gImgs.find(img => img.id === gMeme.selectedImgId)
    console.log("after find cureImg", cureImg)
    var cureMeme = {
        imgUrl: cureImg.url,
        lineTxt: gMeme.lines[gMeme.selectedLineIdx].txt
    }
    return cureMeme
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setImg(imgId) {
    console.log("setImg")
    const img = gImgs.find(img => img.id === gMeme.selectedImgId)
    const cureMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [
            {
                txt: '',
                size: 0,
                align: 'left',
                color: 'red'
            }
        ]

    }
    gMeme = cureMeme
    console.log("gMeme: ", gMeme)
}