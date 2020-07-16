var areaShows = document.querySelectorAll(".areaShow")
var areaMaps = document.querySelectorAll(".areaMap")

for (let index = 0; index < areaShows.length; index++){
    const areaShow = areaShows[index];
    const areaMap = areaMaps[index];

    areaShow.onclick = function () {
        clearAllActive()
        areaShow.classList.add("areaOn")
        areaMap.classList.add("mapOn")
    }
}

function clearAllActive() {
    for (let index = 0; index < areaShows.length; index++){
        const areaShow = areaShows[index];
        const areaMap = areaMaps[index];
        areaShow.classList.remove("areaOn")
        areaMap.classList.remove("mapOn")
    }
}
// -----------------------------------------------------------------------
var mobileAreas = document.querySelectorAll(".mobileArea")
var mobileStores = document.querySelectorAll(".mobileStore")

for (let index = 0; index < mobileAreas.length; index++) {
    const mobileArea = mobileAreas[index];
    const mobileStore = mobileStores[index];

    mobileArea.onclick = function () {
        clearAllShow()
        mobileArea.classList.add("areaOpen")
        mobileStore.classList.add("storeOn")
    }
}

function clearAllShow() {
    for (let index = 0; index < mobileAreas.length; index++) {
        const mobileArea = mobileAreas[index];
        const mobileStore = mobileStores[index];
        mobileArea.classList.remove("areaOpen")
        mobileStore.classList.remove("storeOn")
    }
}



// // jimmy
// var buttonNorth = document.querySelector(".btnNorth")
// // console.log(buttonNorth)
// var buttonCenter = document.querySelector(".btnCenter")
// var buttonSouth = document.querySelector(".btnSouth")
// var buttonEast = document.querySelector(".btnEast")
// var contentNorth = document.querySelector(".contentNorth")
// // console.log(contentNorth)
// var contenCenter = document.querySelector(".contenCenter")
// var contentSouth = document.querySelector(".contentSouth")
// var contentEast = document.querySelector(".contentEast")


// button_Second.onclick = function(){
//     // console.log(buttonSecond)
//     clearAll()
    
//     tab_Second.classList.add("active")
//     button_Second.classList.add("active")

// }

// button_Third.onclick = function(){
//     // console.log(buttonSecond)
//     clearAll()
//     tab_Third.classList.add("active")
//     button_Third.classList.add("active")
    

// }

// button_One.onclick = function(){
//     // console.log(buttonSecond)
//     clearAll()
//     tab_One.classList.add("active")
//     button_One.classList.add("active")

// }

// function clearAll(){
//     tab_One.classList.remove("active")
//     tab_Second.classList.remove("active")
//     tab_Third.classList.remove("active")

//     button_One.classList.remove("active")
//     button_Third.classList.remove("active")
//     button_Second.classList.remove("active")
//     console.log(clearAll)

// }












// 
// var sideTitle = document.querySelector(".outlineFixed")
// console.log(sideTitle)
// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 1080) {
//         sideTitle.classList.add('active')

//     } else {
//         sideTitle.classList.remove('active')


//     }
// };