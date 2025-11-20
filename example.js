//change the color of the web page in every 1 second
let color = ["red", "green", "blue", "yellow", "orange", "purple", "black"];
let i = 0;
setInterval(() => {
  document.body.style.backgroundColor = color[i];
  i++;
  if (i == color.length) {
    i = 0;
  }
}, 1000);
