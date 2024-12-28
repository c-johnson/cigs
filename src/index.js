const setup = () => {
  const rasterImageOutput = document.getElementById("raster-image");
  const selectFileInput = document.getElementById("select-file");
  let fileReader = new FileReader();

  window.imageFile = window.imageFile || {};
  window.imageObj = window.imageObj || {};

  selectFileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (file) {
      fileReader.onload = (ev) => {
        const base64file = ev.target.result;
        console.log("base64file :>> ", base64file);

        rasterImageOutput.src = base64file;

        window.imageFile = file;
        window.imageObj = base64file;
      };

      fileReader.readAsDataURL(file);
    } else {
      console.log("file not a thing");
    }

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
