// --- Botones ---
const cliConCalBtn = document.getElementById("cli-con-cal");
const cliSenPreBtn = document.getElementById("cli-sen-pre");
const cliIntProBtn = document.getElementById("cli-int-pro");
const cliMonRemBtn = document.getElementById("cli-mon-rem");
const cliIntCliBtn = document.getElementById("cli-int-cli");
const cliComIluBtn = document.getElementById("cli-com-ilu");
const cliPanSolBtn = document.getElementById("cli-pan-sol");
const cliIntArtBtn = document.getElementById("cli-int-art");
const cliDetFugBtn = document.getElementById("cli-det-fug");
const cliApaAutBtn = document.getElementById("cli-apa-aut");

const cliMonProBtn = document.getElementById("cli-mon-pro");
const cliAlmBatBtn = document.getElementById("cli-alm-bat");
const cliPriEneBtn = document.getElementById("cli-pri-ene");
const cliMonConBtn = document.getElementById("cli-mon-con");
const cliAlePicBtn = document.getElementById("cli-ale-pic");
const cliEscProBtn = document.getElementById("cli-esc-pro");
const cliEscAhoBtn = document.getElementById("cli-esc-aho");
const cliAleAutBtn = document.getElementById("cli-ale-aut");
const cliSenVenBtn = document.getElementById("cli-sen-ven");
const cliVenIaBtn = document.getElementById("cli-ven-ia");
const cliPurAirBtn = document.getElementById("cli-pur-air");

// --- Displays ---
const cliConCalDisp = document.getElementById("cli-con-cal-disp");
const cliSenPreDisp = document.getElementById("cli-sen-pre-disp");
const cliIntProDisp = document.getElementById("cli-int-pro-disp");
const cliMonRemDisp = document.getElementById("cli-mon-rem-disp");
const cliIntCliDisp = document.getElementById("cli-int-cli-disp");
const cliComIluDisp = document.getElementById("cli-com-ilu-disp");
const cliPanSolDisp = document.getElementById("cli-pan-sol-disp");
const cliIntArtDisp = document.getElementById("cli-int-art-disp");
const cliDetFugDisp = document.getElementById("cli-det-fug-disp");
const cliApaAutDisp = document.getElementById("cli-apa-aut-disp");

const cliMonProDisp = document.getElementById("cli-mon-pro-disp");
const cliAlmBatDisp = document.getElementById("cli-alm-bat-disp");
const cliPriEneDisp = document.getElementById("cli-pri-ene-disp");
const cliMonConDisp = document.getElementById("cli-mon-con-disp");
const cliAlePicDisp = document.getElementById("cli-ale-pic-disp");
const cliEscProDisp = document.getElementById("cli-esc-pro-disp");
const cliEscAhoDisp = document.getElementById("cli-esc-aho-disp");
const cliAleAutDisp = document.getElementById("cli-ale-aut-disp");
const cliSenVenDisp = document.getElementById("cli-sen-ven-disp");
const cliVenIaDisp = document.getElementById("cli-ven-ia-disp");
const cliPurAirDisp = document.getElementById("cli-pur-air-disp");

// --- Array para ocultar todos los displays fácilmente ---
const allCliDisplays = [
  cliConCalDisp, cliSenPreDisp, cliIntProDisp, cliMonRemDisp, cliIntCliDisp,
  cliComIluDisp, cliPanSolDisp, cliIntArtDisp, cliDetFugDisp, cliApaAutDisp,
  cliMonProDisp, cliAlmBatDisp, cliPriEneDisp, cliMonConDisp, cliAlePicDisp,
  cliEscProDisp, cliEscAhoDisp, cliAleAutDisp, cliSenVenDisp, cliVenIaDisp,
  cliPurAirDisp
];

// --- Función para mostrar un display y ocultar los demás ---
function showCliDisplay(displayToShow) {
  allCliDisplays.forEach(d => d.style.display = "none");
  displayToShow.style.display = "block";
}

// --- Event listeners para los botones ---
cliConCalBtn.addEventListener("click", () => showCliDisplay(cliConCalDisp));
cliSenPreBtn.addEventListener("click", () => showCliDisplay(cliSenPreDisp));
cliIntProBtn.addEventListener("click", () => showCliDisplay(cliIntProDisp));
cliMonRemBtn.addEventListener("click", () => showCliDisplay(cliMonRemDisp));
cliIntCliBtn.addEventListener("click", () => showCliDisplay(cliIntCliDisp));
cliComIluBtn.addEventListener("click", () => showCliDisplay(cliComIluDisp));
cliPanSolBtn.addEventListener("click", () => showCliDisplay(cliPanSolDisp));
cliIntArtBtn.addEventListener("click", () => showCliDisplay(cliIntArtDisp));
cliDetFugBtn.addEventListener("click", () => showCliDisplay(cliDetFugDisp));
cliApaAutBtn.addEventListener("click", () => showCliDisplay(cliApaAutDisp));

cliMonProBtn.addEventListener("click", () => showCliDisplay(cliMonProDisp));
cliAlmBatBtn.addEventListener("click", () => showCliDisplay(cliAlmBatDisp));
cliPriEneBtn.addEventListener("click", () => showCliDisplay(cliPriEneDisp));
cliMonConBtn.addEventListener("click", () => showCliDisplay(cliMonConDisp));
cliAlePicBtn.addEventListener("click", () => showCliDisplay(cliAlePicDisp));
cliEscProBtn.addEventListener("click", () => showCliDisplay(cliEscProDisp));
cliEscAhoBtn.addEventListener("click", () => showCliDisplay(cliEscAhoDisp));
cliAleAutBtn.addEventListener("click", () => showCliDisplay(cliAleAutDisp));
cliSenVenBtn.addEventListener("click", () => showCliDisplay(cliSenVenDisp));
cliVenIaBtn.addEventListener("click", () => showCliDisplay(cliVenIaDisp));
cliPurAirBtn.addEventListener("click", () => showCliDisplay(cliPurAirDisp));


let botEraser = document.getElementById("erase--disp");

botEraser.addEventListener("click", () => {
    // Lado izquierdo
    cliConCalDisp.style.display = "none";
    cliSenPreDisp.style.display = "none";
    cliIntProDisp.style.display = "none";
    cliMonRemDisp.style.display = "none";
    cliIntCliDisp.style.display = "none";
    cliComIluDisp.style.display = "none";
    cliPanSolDisp.style.display = "none";
    cliIntArtDisp.style.display = "none";
    cliDetFugDisp.style.display = "none";
    cliApaAutDisp.style.display = "none";

    // Lado derecho
    cliMonProDisp.style.display = "none";
    cliAlmBatDisp.style.display = "none";
    cliPriEneDisp.style.display = "none";
    cliMonConDisp.style.display = "none";
    cliAlePicDisp.style.display = "none";
    cliEscProDisp.style.display = "none";
    cliEscAhoDisp.style.display = "none";
    cliAleAutDisp.style.display = "none";
    cliSenVenDisp.style.display = "none";
    cliVenIaDisp.style.display = "none";
    cliPurAirDisp.style.display = "none";
});

