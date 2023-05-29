const form_input_focus = () => {
  document.getElementById("my-form").style.backgroundColor = "#EEE3CB";
};
const form_input_blur = () => {
  document.getElementById("my-form").style.backgroundColor = "white";
};

const mykey_up = () => {
  document.getElementById("my-pass").style.border = "2px solid black";
};

const show_pass = () => {
  let password = document.getElementById("my-pass");
  password.setAttribute("type", "text");
  document.getElementById("my-btn").innerText = "Hide Password";
};
const hide_pass = () => {
  let password = document.getElementById("my-pass");
  password.setAttribute("type", "password");
  document.getElementById("my-btn").innerText = "Show Password";
};
