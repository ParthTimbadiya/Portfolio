// preloader code

let loader = document.getElementById("preloader");
addEventListener("load", () => {
  loader.style.display = "none";
});

// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

onscroll = () => {
  section.forEach((sec) => {
    let top = scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      // active section for animation scroll

      sec.classList.add("show-animate");
    } else {
      // animate that repeate an scroll use this
      sec.classList.remove("show-animate");
    }
  });
  let header = document.querySelector("header");

  header.classList.toggle("sticky", scrollY > 100);

  // remove toggle icon and navbar

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // animation footer onscroll

  let footer = document.querySelector("footer");
  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

// about page

let address = document.getElementById("address");
let readMore = document.getElementById("readMore");

readMore.addEventListener("click", () => {
  address.classList.toggle("classNone");
});

// project page

let backImg = document.getElementsByClassName("drop");
let gif = document.getElementsByClassName("center");

for (let i = 0; i < backImg.length; i++) {
  backImg[i].style.backgroundImage = `url(./image/background/${i}.jpg)`;

  let secondContent = `<h2><img src="image/gifimag/${i}.webp" alt=""></h2>`;

  gif[i].innerHTML = secondContent;

  console.log(gif[i]);
  console.log(i);
}

var hoverE = document.getElementsByClassName("drop_bg");
for (let i = 0; i < hoverE.length; i++) {
  hoverE[i].addEventListener("mouseenter", () => {
    document.getElementsByClassName("single-content")[i].style.fontWeight =
      "bolder";
    document.getElementsByClassName("single-content")[i].style.color = "black";
    document.getElementsByClassName("drop_bg")[
      i
    ].style.backgroundImage = `linear-gradient(170deg, rgba(255,255,255,.5), rgba(255,255,255,.5)), url("./image/background/${i}.jpg")`;
  });
}

for (let i = 0; i < hoverE.length; i++) {
  hoverE[i].addEventListener("mouseleave", () => {
    document.getElementsByClassName("drop_bg")[
      i
    ].style.backgroundImage = `url("./image/background/${i}.jpg")`;
  });
}

// form submited

function sendMail(event) {
  //   event.preventDefault();
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mono: document.getElementById("mono").value,
    mono: document.getElementById("emailsub").value,
    message: document.getElementById("message").value,
  };

  const serviseID = "service_ofr3rxb";
  const templateID = "template_ktum3v3";

  emailjs
    .send(serviseID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mono").value = "";
      document.getElementById("emailsub").value = "";
      document.getElementById("message").value = "";

      console.log(res);

      alert("Your Message Sent Successfully");
    })
    .catch((err) => console.log(err));
}

document.getElementById("formSend").addEventListener("click", sendMail());




