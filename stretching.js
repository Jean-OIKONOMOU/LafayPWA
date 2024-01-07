const container = document.querySelector(".stretchingContainer")
const stretchingPoses = [
  { name: "1", image: "img/stretching/1.jpg" },
  { name: "2", image: "img/stretching/2.jpg" }
  // ,
  // { name: "3", image: "img/stretching/3.jpg" },
  // { name: "4", image: "img/stretching/4.jpg" },
  // { name: "5", image: "img/stretching/5.jpg" },
  // { name: "6", image: "img/stretching/6.jpg" },
  // { name: "7", image: "img/stretching/7.jpg" },
  // { name: "8", image: "img/stretching/8.jpg" },
  // { name: "9", image: "img/stretching/9.jpg" },
  // { name: "10", image: "img/stretching/10.jpg" },
  // { name: "11", image: "img/stretching/11.jpg" },
  // { name: "12", image: "img/stretching/12.jpg" },
  // { name: "13", image: "img/stretching/13.jpg" },
  // { name: "14", image: "img/stretching/14.jpg" },
  // { name: "15", image: "img/stretching/15.jpg" },
  // { name: "16", image: "img/stretching/16.jpg" },
  // { name: "17", image: "img/stretching/17.jpg" },
  // { name: "18", image: "img/stretching/18.jpg" },
  // { name: "19", image: "img/stretching/19.jpg" },
  // { name: "20", image: "img/stretching/20.jpg" },
  // { name: "21", image: "img/stretching/21.jpg" },
  // { name: "22", image: "img/stretching/22.jpg" },
  // { name: "23", image: "img/stretching/23.jpg" },
  // { name: "24", image: "img/stretching/24.jpg" },
  // { name: "25", image: "img/stretching/25.jpg" },
  // { name: "26", image: "img/stretching/26.jpg" },
  // { name: "27", image: "img/stretching/27.jpg" },
  // { name: "28", image: "img/stretching/28.jpg" },
  // { name: "29", image: "img/stretching/29.jpg" },
  // { name: "30", image: "img/stretching/30.jpg" },
  // { name: "31", image: "img/stretching/31.jpg" },
  // { name: "32", image: "img/stretching/32.jpg" },
  // { name: "33", image: "img/stretching/33.jpg" },
  // { name: "34", image: "img/stretching/34.jpg" },
  // { name: "35", image: "img/stretching/35.jpg" },
]

const showStretchingPoses = () => {
    let output = ""
    stretchingPoses.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showStretchingPoses)