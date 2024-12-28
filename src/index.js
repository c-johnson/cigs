const setup = () => {
  /* Grab elements */
  const rasterImageOutput = document.getElementById("raster-image");
  const selectFileInput = document.getElementById("select-file");
  const canvasElement = document.getElementById("canvas-workstation");

  /* Objects */
  let fileReader = new FileReader();

  window.imageFile = window.imageFile || {};
  window.imageObj = window.imageObj || {};

  /* Event listeners */
  selectFileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (file) {
      fileReader.onload = (ev) => {
        const base64ImageData = ev.target.result;
        logState({ base64ImageData });

        renderCanvasContext({ canvasElement, imageData: base64ImageData });
      };

      fileReader.readAsDataURL(file);
    } else {
      console.log("file not a thing");
    }
  });
};

const renderCanvasContext = ({ canvasElement, imageData }) => {
  const ctx = canvasElement.getContext("2d");

  ctx.fillStyle = "rgb(200 0 0)";
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = "rgb(0 0 200 / 50%)";
  ctx.fillRect(30, 30, 50, 50);

  logState({ ctx });
  debugger;
};

// TODO: Typescript-ify this up later
//         const vars =  { var1: var1, var2: var2, ... }
const logState = (vars) => {
  for (const key in vars) {
    if (vars.hasOwnProperty(key)) {
      console.log(key, " :>> ", vars[key]);
    }
  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  setup();
});
