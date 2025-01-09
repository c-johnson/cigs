// The latest and greatest in artifical intelligence!
const ALGORITHMS = [() => {}, () => {}];

if (window.test) {
  console.log("[sampler] window.test - loaded");
  window.test();
} else {
  console.log("[sampler] window.test - not loaded");
}

const rasterElement = document.getElementById("raster-image");

rasterElement.addEventListener("load", () => {
  console.log("[raster-image] element loaded! top-level");
});

const setup = () => {
  /* Grab elements */
  const rasterElement = document.getElementById("raster-image");
  const selectFileInput = document.getElementById("select-file");
  const canvasElement = document.getElementById("canvas-workstation");
  const cssElement = document.getElementById("css-output");

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

        // TODO [bug]: Wait for `renderRaster` to finish, via a promise, before running `renderCanvas`
        renderRaster({ rasterElement, base64ImageData });

        rasterElement.addEventListener("load", () => {
          console.log(
            "[raster-image] element loaded! inside setup -> selectFileInput;change "
          );

          renderCanvas({ canvasElement, base64ImageData });
          renderCSS({ cssElement, show: true });
        });

        // TODO [bug]: Actually, this doesn't use the JS event loop!
        // TODO [bug]: It uses the DOM.ContentLoaded event, so hook into that instead.
        // setTimeout(() => {
        //   renderCanvas({ canvasElement, base64ImageData });
        //   renderCSS({ cssElement, show: true });
        // }, 100);
      };

      fileReader.readAsDataURL(file);
    } else {
      console.log("file not a thing");
    }
  });
};

const renderRaster = ({ rasterElement, base64ImageData }) => {
  rasterElement.classList.remove("hidden");
  rasterElement.src = base64ImageData;
};

const renderCSS = ({ cssElement, show }) => {
  if (show) {
    cssElement.classList.remove("hidden");
  }
  if (!show) {
    cssElement.classList.add("hidden");
  }
};

const renderCanvas = ({ canvasElement, base64ImageData }) => {
  const ctx = canvasElement.getContext("2d");

  // const srcImage = document.getElementById("raster-image");
  // ctx.drawImage(srcImage, 0, 0, 313, 500);

  // Q: Background color for <canvas>?
  // https://stackoverflow.com/a/27645436/28971795
  // i think nearest solution is using drawimage before drawing canvas object

  // this.drawImage({
  //     image:"imagebg2.png", // image filled by bg color
  //     destRect : [0, 0, this.Canvas1.width, this.Canvas1.height]
  // });

  ctx.fillStyle = "rgb(200 0 0)";
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = "rgb(0 0 200 / 50%)";
  ctx.fillRect(30, 30, 50, 50);

  // ****************************************
  // Q: Ok design nerds
  //      What is the best font to use
  //      🔫
  // ****************************************
  ctx.font = `72px Verdana`;
  ctx.filleStyle = "white";
  ctx.fillText("Hi!", 200, 100, 300);

  // ****************************************
  //      More drawing examples
  // ****************************************

  // Change Canvas font:
  // https://stackoverflow.com/questions/58287374/how-to-change-font-size-of-canvas-text

  // ctx.fillStyle = "blue";
  // ctx.fillRect(0, 0, 500, 100);

  // ctx.font = `50px Verdana`;
  // ctx.fillStyle = "white";
  // ctx.fillText("Hello!", 120, 60, 300);

  // ****************************************
  //      //developer.mozilla.org/en-US/play
  // ****************************************

  logState({ ctx });

  const srcImage = document.getElementById("raster-image");

  console.log("srcImage loaded");

  // ctx.drawImage(srcImage, 0, 0);
  ctx.drawImage(srcImage, 0, 0, 313, 500);
  // ctx.drawImage(srcImage, 93, 0, 313, 500, 0, 0, 313, 500);

  if (window.sampler) {
    console.log("[sampler] window.sampler - loaded");
    window.sampler(base64ImageData);
  } else {
    console.log("[sampler] window.sampler - not loaded");
  }
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
