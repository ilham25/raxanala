const galleryContainer = document.querySelector(".gallery");

const imgData = [];

const generateElement = (size, dataLength) => {
  galleryContainer.innerHTML = "";
  const fillData = (dataLength) => {
    for (let index = 0; index < dataLength; index++) {
      imgData.push({
        title: `Data ${index + 1}`,
        source: `https://picsum.photos/${size}?random=${index + 1}`,
      });
    }
  };
  if (dataLength <= 20) {
    fillData(dataLength);
  }
  imgData.forEach((data) => {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    imgContainer.setAttribute("title", data.title);

    imgContainer.innerHTML = `<img src="${data.source}" alt="${data.title}" />`;

    imgContainer.addEventListener("click", () => {
      console.log(data.title);
      console.log(data.source);
    });

    galleryContainer.appendChild(imgContainer);
  });
};

generateElement(300, 8);
