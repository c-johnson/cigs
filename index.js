const setup = () => {
  debugger;
  const selectFileInput = document.getElementById("selectFile");

  window.imageFile = window.imageFile || {};

  selectFileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    debugger;

    if (file) {
      debugger;
      const image = new Image();
      const objectURL = URL.createObjectURL(file);

      image.src = objectURL;
    }

    window.imageFile = file;
    window.imageObj = image;

    logState();
  });
};

const logState = () => {
  debugger;
  console.log("window.imageFile :>> ", window.imageFile);
  console.log("window.imageObj :>> ", window.imageObj);
};

// const image = new Image();
// // image.src = 'file:///Users/chrisj/pack.jpeg';

// image.onload = () => {
//   console.log("image :>> ", image);
//   console.log("image.width :>> ", image.width);
//   console.log("image.height :>> ", image.height);
// };

// image.onerror = (err) => {
//   console.error("Failed to load image, error => ", err);
// };

setup();
