setup();

const setup = () => {
  const selectFileInput = document.getElementById("selectFile");

  selectFileInput.onChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const image = new Image();
      const objectURL = URL.createObjectURL(file);

      image.src = objectURL;
    }
  };
};

const runSampler = () => {};

const image = new Image();
// image.src = 'file:///Users/chrisj/pack.jpeg';

image.onload = () => {
  console.log("image :>> ", image);
  console.log("image.width :>> ", image.width);
  console.log("image.height :>> ", image.height);
};

image.onerror = (err) => {
  console.error("Failed to load image, error => ", err);
};

/* Set up file <input> event handlers */

const sampler = () => {
  runSampler();
};
