const container = document.querySelector(".container--main");
let imgCounter = 0;
var poses;

//*********************************//
const levelOnePoses = [
    { name: "1", image: "img/stretching/1.png", sets: 1 },
    { name: "2", image: "img/stretching/2.png", sets: 1 },
    { name: "3", image: "img/stretching/3.png", sets: 1 },
    { name: "4", image: "img/stretching/4.png", sets: 1 },
    { name: "5", image: "img/stretching/5.png", sets: 1 },
    { name: "6", image: "img/stretching/6.png", sets: 1 },
    { name: "7", image: "img/stretching/7.png", sets: 1 },
    { name: "8", image: "img/stretching/8.png", sets: 1 },
    { name: "9", image: "img/stretching/9.png", sets: 1 },
    { name: "10", image: "img/stretching/10.png", sets: 1 },
    { name: "11", image: "img/stretching/11.png", sets: 1 },
    { name: "12", image: "img/stretching/12.png", sets: 1 },
    { name: "13", image: "img/stretching/13.png", sets: 1 },
    { name: "14", image: "img/stretching/14.png", sets: 1 },
    { name: "15", image: "img/stretching/15.png", sets: 1 },
    { name: "16", image: "img/stretching/16.png", sets: 1 },
    { name: "17", image: "img/stretching/17.png", sets: 1 },
    { name: "18", image: "img/stretching/18.png", sets: 1 },
    { name: "19", image: "img/stretching/19.png", sets: 1 },
    { name: "20", image: "img/stretching/20.png", sets: 1 },
    { name: "21", image: "img/stretching/21.png", sets: 1 },
    { name: "22", image: "img/stretching/22.png", sets: 1 },
    { name: "23", image: "img/stretching/23.png", sets: 1 },
    { name: "24", image: "img/stretching/24.png", sets: 1 },
    { name: "25", image: "img/stretching/25.png", sets: 1 },
    { name: "26", image: "img/stretching/26.png", sets: 1 },
    { name: "27", image: "img/stretching/27.png", sets: 1 },
    { name: "28", image: "img/stretching/28.png", sets: 1 },
    { name: "29", image: "img/stretching/29.png", sets: 1 },
    { name: "30", image: "img/stretching/30.png", sets: 1 },
    { name: "31", image: "img/stretching/31.png", sets: 1 },
    { name: "32", image: "img/stretching/32.png", sets: 1 },
    { name: "33", image: "img/stretching/33.png", sets: 1 },
    { name: "34", image: "img/stretching/34.png", sets: 1 },
    { name: "35", image: "img/stretching/35.png", sets: 1 }
];

const levelTwoPoses = [
    { name: "1", image: "img/workout/B.png" , sets: 3 },
    { name: "2", image: "img/workout/A1.png", sets: 3 },
    { name: "3", image: "img/workout/D.png" , sets: 1 },
    { name: "4", image: "img/workout/C4.png", sets: 3 },
    { name: "5", image: "img/workout/E.png" , sets: 3 },
    { name: "6", image: "img/workout/F.png" , sets: 3 },
    { name: "7", image: "img/workout/G.png" , sets: 3 },
    { name: "8", image: "img/workout/K2.png", sets: 3 }
];



//********************************//

const nextImage = () => {
    imgCounter++;
    if (imgCounter == poses.length) {
        imgCounter = 0;
    };
    document.getElementById("stretchingImage").src = poses[imgCounter].image;
    document.getElementById("stretchingImage").alt = poses[imgCounter].name;
    document.getElementById("sets").innerHTML = poses[imgCounter].sets + " sets";
};

const previousImage = () => {
    imgCounter--;
    if (imgCounter < 0) {
        imgCounter = poses.length - 1;
    };
    document.getElementById("stretchingImage").src = poses[imgCounter].image;
    document.getElementById("stretchingImage").alt = poses[imgCounter].name;
    document.getElementById("sets").innerHTML = poses[imgCounter].sets + " sets";    
};

document.onkeydown = checkKeyStretch;

function checkKeyStretch(e) {
    // e = e || window.event;

    if (e.keyCode == '39') {
        nextImage();
    } else if (e.keyCode == '37') {
        previousImage();
    }
}

const levelOne = (images) => {
    showControls();
    
    let output = ""
    output += `<div class="card"><img class="card--avatar" id="stretchingImage" src=${images[0].image} alt=${images[0].name}/><h1 id="sets" style="margin-top:10px;font-size:2rem;">${images[0].sets} sets</h1></div>`;
    container.innerHTML = output;

    poses = levelOnePoses;
}

const levelTwo = (images) => {
    showControls();

    let output = ""
    output += `<div class="card"><img class="card--avatar" id="stretchingImage" src=${images[0].image} alt=${images[0].name}/><h1 id="sets" style="margin-top:10px;font-size:2rem;">${images[0].sets} sets</h1></div>`;
    container.innerHTML = output;

    poses = levelTwoPoses;
}

const showControls = () => {
    const leftArrow = document.querySelector(".previous");
    const rightArrow = document.querySelector(".next");
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "visible";

    const container = document.querySelector(".container--main");
    container.style.backgroundColor = "white";
}