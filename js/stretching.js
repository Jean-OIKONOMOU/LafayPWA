const container = document.querySelector(".container--main")
const stretchingPoses = [
  { name: "1", image: "img/stretching/1.png" },
  { name: "2", image: "img/stretching/2.png" },
  { name: "3", image: "img/stretching/3.png" },
  { name: "4", image: "img/stretching/4.png" },
  { name: "5", image: "img/stretching/5.png" },
  { name: "6", image: "img/stretching/6.png" },
  { name: "7", image: "img/stretching/7.png" },
  { name: "8", image: "img/stretching/8.png" },
  { name: "9", image: "img/stretching/9.png" },
  { name: "10", image: "img/stretching/10.png" },
  { name: "11", image: "img/stretching/11.png" },
  { name: "12", image: "img/stretching/12.png" },
  { name: "13", image: "img/stretching/13.png" },
  { name: "14", image: "img/stretching/14.png" },
  { name: "15", image: "img/stretching/15.png" },
  { name: "16", image: "img/stretching/16.png" },
  { name: "17", image: "img/stretching/17.png" },
  { name: "18", image: "img/stretching/18.png" },
  { name: "19", image: "img/stretching/19.png" },
  { name: "20", image: "img/stretching/20.png" },
  { name: "21", image: "img/stretching/21.png" },
  { name: "22", image: "img/stretching/22.png" },
  { name: "23", image: "img/stretching/23.png" },
  { name: "24", image: "img/stretching/24.png" },
  { name: "25", image: "img/stretching/25.png" },
  { name: "26", image: "img/stretching/26.png" },
  { name: "27", image: "img/stretching/27.png" },
  { name: "28", image: "img/stretching/28.png" },
  { name: "29", image: "img/stretching/29.png" },
  { name: "30", image: "img/stretching/30.png" },
  { name: "31", image: "img/stretching/31.png" },
  { name: "32", image: "img/stretching/32.png" },
  { name: "33", image: "img/stretching/33.png" },
  { name: "34", image: "img/stretching/34.png" },
  { name: "35", image: "img/stretching/35.png" }
]

// const showStretchingPoses = () => {
//     let output = ""
//     stretchingPoses.forEach(
//       ({ name, image }) =>
//         (output += `
//                 <div class="card">
//                   <img class="card--avatar" id="stretchingImage" src=${image} />
//                 </div>
//                 `)
//     )
//     container.innerHTML = output
//   }

let output = ""
output += `<div class="card"><img class="card--avatar" id="stretchingImage" src=${stretchingPoses[0].image} alt=${stretchingPoses[0].name}/></div>`;
container.innerHTML = output;

let imgCounter = 0;

document.onkeydown = checkKeyStretch;

function checkKeyStretch(e) {
  // e = e || window.event;

  if (e.keyCode == '39') {
    nextImage();
  } else if (e.keyCode == '37') {
    previousImage();
  } else if (e.keyCode == '72') {
    let currentUrl = window.location.href;
    window.location.href = "http://127.0.0.1:5500/index.html";
  }  
}

const nextImage = () => {
  imgCounter++;
  if (imgCounter == stretchingPoses.length) {
    imgCounter = 0;
  };
  console.log(imgCounter);
  document.getElementById("stretchingImage").src = stretchingPoses[imgCounter].image; 
  document.getElementById("stretchingImage").alt = stretchingPoses[imgCounter].name; 
};

const previousImage = () => {
  imgCounter--;
  if (imgCounter < 0) {
    imgCounter = stretchingPoses.length-1;
  };
  console.log(imgCounter);
  document.getElementById("stretchingImage").src = stretchingPoses[imgCounter].image;
  document.getElementById("stretchingImage").alt = stretchingPoses[imgCounter].name; 
};
    