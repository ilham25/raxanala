const galleryContainer = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const fullImg = document.querySelector(".full-img");

const imgData = [
  {
    title: "Pict 1",
    source: "./assets/img/gallery/g1.png",
  },
  {
    title: "Pict 2",
    source: "./assets/img/gallery/g2.png",
  },
  {
    title: "Pict 3",
    source: "./assets/img/gallery/g3.png",
  },
  {
    title: "Pict 4",
    source: "./assets/img/gallery/g4.png",
  },
  {
    title: "Pict 5",
    source: "./assets/img/gallery/g5.png",
  },
  {
    title: "Pict 6",
    source: "./assets/img/gallery/g6.png",
  },
  {
    title: "Pict 7",
    source: "./assets/img/gallery/g7.png",
  },
  {
    title: "Pict 8",
    source: "./assets/img/gallery/g8.png",
  },
  {
    title: "Pict 9",
    source: "./assets/img/gallery/g9.png",
  },
  {
    title: "Pict 10",
    source: "./assets/img/gallery/g10.png",
  },
];

const generateElement = (size, dataLength) => {
  galleryContainer.innerHTML = "";
  // const fillData = (dataLength) => {
  //   for (let index = 0; index < dataLength; index++) {
  //     imgData.push({
  //       title: `Data ${index + 1}`,
  //       source: `https://picsum.photos/${size}?random=${index + 1}`,
  //     });
  //   }
  // };
  // if (dataLength <= 20) {
  //   fillData(dataLength);
  // }

  imgData.forEach((data) => {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    imgContainer.setAttribute("title", data.title);

    imgContainer.innerHTML = `<img src="${data.source}" alt="${data.title}" />`;

    imgContainer.addEventListener("click", () => {
      modal.classList.toggle("active");
      fullImg.src = data.source;
      fullImg.classList.toggle("open");
    });
    galleryContainer.appendChild(imgContainer);
  });
};

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("active");
    fullImg.classList.remove("open");
  }
});

generateElement();
