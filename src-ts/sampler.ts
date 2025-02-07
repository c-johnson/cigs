const test = () => {
  console.log("[sampler] hello!");
};

const sampler = () => {
  console.log("sampler code!");
};

window.test = test;
window.sampler = sampler;
