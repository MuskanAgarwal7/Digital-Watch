const para = document.querySelector(".para");

const currentTime = () => {
  let currTime = new Date();
  para.innerText = currTime.toLocaleTimeString();
};

setInterval(currentTime, 1000);
