// --- Botones ---
const bomLamBtn = document.getElementById("bom-lam");
const luzHorBtn = document.getElementById("luz-hor");
const luzLecBtn = document.getElementById("luz-lec");
const proAmbBtn = document.getElementById("pro-amb");
const modDinBtn = document.getElementById("mod-din");
const pisLumBtn = document.getElementById("pis-lum");
const lamEspBtn = document.getElementById("lam-esp");
const luzCorBtn = document.getElementById("luz-cor");
const luzEscBtn = document.getElementById("luz-esc");
const ilPerBtn = document.getElementById("il-per");
const ilEmeBtn = document.getElementById("il-eme");
const luzJarBtn = document.getElementById("luz-jar");
const sisRiegBtn = document.getElementById("sis-rieg");
const crisPanBtn = document.getElementById("cris-pan");
const perCorBtn = document.getElementById("per-cor");
const intIntBtn = document.getElementById("int-int");
const altIntBtn = document.getElementById("alt-int");
const venCroBtn = document.getElementById("ven-cro");
const cliIntBtn = document.getElementById("cli-int");
const espIntBtn = document.getElementById("esp-int");
const vidAcuBtn = document.getElementById("vid-acu");
const muebCarBtn = document.getElementById("mueb-car");
const sisAroBtn = document.getElementById("sis-aro");
const colParBtn = document.getElementById("col-par");
const venIntBtn = document.getElementById("ven-int");
const robSerBtn = document.getElementById("rob-ser");
const intArtBtn = document.getElementById("int-art");
const medConBtn = document.getElementById("med-con");
const senHumBtn = document.getElementById("sen-hum");
const senGasBtn = document.getElementById("sen-gas");
const sensHumBtn = document.getElementById("sens-hum");
const rocAutBtn = document.getElementById("roc-aut");
const asiIntBtn = document.getElementById("asi-int");
const altaIntBtn = document.getElementById("alta-int");

const refIntBtn = document.getElementById("ref-int");
const monSueBtn = document.getElementById("mon-sue");
const recMedBtn = document.getElementById("rec-med");

// --- Displays ---
const bomLamDisp = document.getElementById("bom-lam-disp");
const luzHorDisp = document.getElementById("luz-hor-disp");
const luzLecDisp = document.getElementById("luz-lec-disp");
const proAmbDisp = document.getElementById("pro-amb-disp");
const modDinDisp = document.getElementById("mod-din-disp");
const pisLumDisp = document.getElementById("pis-lum-disp");
const lamEspDisp = document.getElementById("lam-esp-disp");
const luzCorDisp = document.getElementById("luz-cor-disp");
const luzEscDisp = document.getElementById("luz-esc-disp");
const ilPerDisp = document.getElementById("il-per-disp");
const ilEmeDisp = document.getElementById("il-eme-disp");
const luzJarDisp = document.getElementById("luz-jar-disp");
const sisRiegDisp = document.getElementById("sis-rieg-disp");
const crisPanDisp = document.getElementById("cris-pan-disp");
const perCorDisp = document.getElementById("per-cor-disp");
const intIntDisp = document.getElementById("int-int-disp");
const altIntDisp = document.getElementById("alt-int-disp");
const venCroDisp = document.getElementById("ven-cro-disp");
const cliIntDisp = document.getElementById("cli-int-disp");
const espIntDisp = document.getElementById("esp-int-disp");
const vidAcuDisp = document.getElementById("vid-acu-disp");
const muebCarDisp = document.getElementById("mueb-car-disp");
const sisAroDisp = document.getElementById("sis-aro-disp");
const colParDisp = document.getElementById("col-par-disp");
const venIntDisp = document.getElementById("ven-int-disp");
const robSerDisp = document.getElementById("rob-ser-disp");
const intArtDisp = document.getElementById("int-art-disp");
const medConDisp = document.getElementById("med-con-disp");
const senHumDisp = document.getElementById("sen-hum-disp");
const senGasDisp = document.getElementById("sen-gas-disp");
const sensHumDisp = document.getElementById("sens-hum-disp");
const rocAutDisp = document.getElementById("roc-aut-disp");
const asiIntDisp = document.getElementById("asi-int-disp");
const altaIntDisp = document.getElementById("alta-int-disp");

const refIntDisp = document.getElementById("ref-int-disp");
const monSueDisp = document.getElementById("mon-sue-disp");
const recMedDisp = document.getElementById("rec-med-disp");

// --- Array para ocultar todos los displays fácilmente ---
const allDisplays = [
  bomLamDisp, luzHorDisp, luzLecDisp, proAmbDisp, modDinDisp, pisLumDisp, lamEspDisp, luzCorDisp, luzEscDisp,
  ilPerDisp, ilEmeDisp, luzJarDisp, sisRiegDisp, crisPanDisp, perCorDisp, intIntDisp, altIntDisp,
  venCroDisp, cliIntDisp, espIntDisp, vidAcuDisp, muebCarDisp, sisAroDisp, colParDisp, venIntDisp, robSerDisp,
  intArtDisp, medConDisp, senHumDisp, senGasDisp, sensHumDisp, rocAutDisp, asiIntDisp, altaIntDisp,refIntDisp, monSueDisp, recMedDisp
];

// --- Función para mostrar un display y ocultar los demás ---
function showDisplay(displayToShow) {
  allDisplays.forEach(d => d.style.display = "none");
  displayToShow.style.display = "block";
}

// --- Event listeners para los botones ---
bomLamBtn.addEventListener("click", () => showDisplay(bomLamDisp));
luzHorBtn.addEventListener("click", () => showDisplay(luzHorDisp));
luzLecBtn.addEventListener("click", () => showDisplay(luzLecDisp));
proAmbBtn.addEventListener("click", () => showDisplay(proAmbDisp));
modDinBtn.addEventListener("click", () => showDisplay(modDinDisp));
pisLumBtn.addEventListener("click", () => showDisplay(pisLumDisp));
lamEspBtn.addEventListener("click", () => showDisplay(lamEspDisp));
luzCorBtn.addEventListener("click", () => showDisplay(luzCorDisp));
luzEscBtn.addEventListener("click", () => showDisplay(luzEscDisp));
ilPerBtn.addEventListener("click", () => showDisplay(ilPerDisp));
ilEmeBtn.addEventListener("click", () => showDisplay(ilEmeDisp));
luzJarBtn.addEventListener("click", () => showDisplay(luzJarDisp));
sisRiegBtn.addEventListener("click", () => showDisplay(sisRiegDisp));
crisPanBtn.addEventListener("click", () => showDisplay(crisPanDisp));
perCorBtn.addEventListener("click", () => showDisplay(perCorDisp));
intIntBtn.addEventListener("click", () => showDisplay(intIntDisp));
altIntBtn.addEventListener("click", () => showDisplay(altIntDisp));
venCroBtn.addEventListener("click", () => showDisplay(venCroDisp));
cliIntBtn.addEventListener("click", () => showDisplay(cliIntDisp));
espIntBtn.addEventListener("click", () => showDisplay(espIntDisp));
vidAcuBtn.addEventListener("click", () => showDisplay(vidAcuDisp));
muebCarBtn.addEventListener("click", () => showDisplay(muebCarDisp));
sisAroBtn.addEventListener("click", () => showDisplay(sisAroDisp));
colParBtn.addEventListener("click", () => showDisplay(colParDisp));
venIntBtn.addEventListener("click", () => showDisplay(venIntDisp));
robSerBtn.addEventListener("click", () => showDisplay(robSerDisp));
intArtBtn.addEventListener("click", () => showDisplay(intArtDisp));
medConBtn.addEventListener("click", () => showDisplay(medConDisp));
senHumBtn.addEventListener("click", () => showDisplay(senHumDisp));
senGasBtn.addEventListener("click", () => showDisplay(senGasDisp));
sensHumBtn.addEventListener("click", () => showDisplay(sensHumDisp));
rocAutBtn.addEventListener("click", () => showDisplay(rocAutDisp));
asiIntBtn.addEventListener("click", () => showDisplay(asiIntDisp));
altaIntBtn.addEventListener("click", () => showDisplay(altaIntDisp));

refIntBtn.addEventListener("click", () => showDisplay(refIntDisp));
monSueBtn.addEventListener("click", () => showDisplay(monSueDisp));
recMedBtn.addEventListener("click", () => showDisplay(recMedDisp));


let botEraser = document.getElementById("erase--disp")

botEraser.addEventListener("click", () => {
    bomLamDisp.style.display = "none";
    luzHorDisp.style.display = "none";
    luzLecDisp.style.display = "none";
    proAmbDisp.style.display = "none";
    modDinDisp.style.display = "none";
    pisLumDisp.style.display = "none";
    lamEspDisp.style.display = "none";
    luzCorDisp.style.display = "none";
    luzEscDisp.style.display = "none";
    ilPerDisp.style.display = "none";
    ilEmeDisp.style.display = "none";
    luzJarDisp.style.display = "none";
    sisRiegDisp.style.display = "none";
    crisPanDisp.style.display = "none";
    perCorDisp.style.display = "none";
    intIntDisp.style.display = "none";
    altIntDisp.style.display = "none";
    venCroDisp.style.display = "none";
    cliIntDisp.style.display = "none";
    espIntDisp.style.display = "none";
    vidAcuDisp.style.display = "none";
    muebCarDisp.style.display = "none";
    sisAroDisp.style.display = "none";
    colParDisp.style.display = "none";
    venIntDisp.style.display = "none";
    robSerDisp.style.display = "none";
    intArtDisp.style.display = "none";
    medConDisp.style.display = "none";
    senHumDisp.style.display = "none";
    senGasDisp.style.display = "none";
    sensHumDisp.style.display = "none";
    rocAutDisp.style.display = "none";
    asiIntDisp.style.display = "none";
    altaIntDisp.style.display = "none";

    refIntDisp.style.display = "none";
    monSueDisp.style.display = "none";
    recMedDisp.style.display = "none";
})


