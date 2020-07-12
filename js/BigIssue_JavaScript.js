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