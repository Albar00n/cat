const text = document.getElementById("text");

//body color & text
const look = document.getElementById("look");

look.addEventListener("click", () => {
    document.body.style.backgroundColor = "#FFF8E1";
    const welcom = document.createElement("h1");


    text.prepend(welcom);
});

//
const body = document.getElementById("body");

let h = document.createElement("h2");

h.style.backgroundColor = "#FFF8E1";
h.style.textAlign = "center";
h.style.fontFamily = "Neonderthaw";

setTimeout(() => {
    h.classList.add("hh");
    h.innerText = "albaron";
    body.append(h);
}, 5000);

// /

const buy = document.querySelectorAll(".omer");
const dia = document.querySelector("dialog");


buy.forEach(item => {
    item.addEventListener("click", () => {
        dia.show();

    })
});

buy.addEventListener("click", () => {
    dia.show();
});

const clos = document.querySelector(".clos");

clos.addEventListener("click", () => {
    dia.close();
});

cuteAlert({
    type: "warning",
    title: "Wellcome",
    message: "",
    buttonText: "Okay",
});