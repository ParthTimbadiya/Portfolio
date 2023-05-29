const change_back = () => {
  let color = document.getElementById("select").value;
  document.getElementById("main-select").style.backgroundColor = color;
};

const change_font = () => {
  let font = document.getElementById("fontchange").value;
  document.getElementById("main-select").style.fontFamily = font;
};
