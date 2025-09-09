// ================== VARIABLES ==================

// Botones
const negSenMov = document.getElementById("neg-sen-mov");
const negResAut = document.getElementById("neg-res-aut");
const negAjuTem = document.getElementById("neg-aju-tem");
const negInvAut = document.getElementById("neg-inv-aut");
const negSenPes = document.getElementById("neg-sen-pes");
const negCamVis = document.getElementById("neg-cam-vis");
const negPedAut = document.getElementById("neg-ped-aut");
const negPanVit = document.getElementById("neg-pan-vit");
const negAjuAut = document.getElementById("neg-aju-aut");
const negCamIa  = document.getElementById("neg-cam-ia");
const negCamInt = document.getElementById("neg-cam-int");
const negCamRec = document.getElementById("neg-cam-rec");

const negPorAut = document.getElementById("neg-por-aut");
const negSenSeg = document.getElementById("neg-sen-seg");
const negConEst = document.getElementById("neg-con-est");
const negBalCar = document.getElementById("neg-bal-car");
const negComEne = document.getElementById("neg-com-ene");
const negCarInt = document.getElementById("neg-car-int");
const negIntCar = document.getElementById("neg-int-car");
const negHorEco = document.getElementById("neg-hor-eco");
const negRobAyu = document.getElementById("neg-rob-ayu");
const negRobAsp = document.getElementById("neg-rob-asp");
const negRobLle = document.getElementById("neg-rob-lle");

// Displays
const negSenMovDisp = document.getElementById("neg-sen-mov-disp");
const negResAutDisp = document.getElementById("neg-res-aut-disp");
const negAjuTemDisp = document.getElementById("neg-aju-tem-disp");
const negInvAutDisp = document.getElementById("neg-inv-aut-disp");
const negSenPesDisp = document.getElementById("neg-sen-pes-disp");
const negCamVisDisp = document.getElementById("neg-cam-vis-disp");
const negPedAutDisp = document.getElementById("neg-ped-aut-disp");
const negPanVitDisp = document.getElementById("neg-pan-vit-disp");
const negAjuAutDisp = document.getElementById("neg-aju-aut-disp");
const negCamIaDisp  = document.getElementById("neg-cam-ia-disp");
const negCamIntDisp = document.getElementById("neg-cam-int-disp");
const negCamRecDisp = document.getElementById("neg-cam-rec-disp");

const negPorAutDisp = document.getElementById("neg-por-aut-disp");
const negSenSegDisp = document.getElementById("neg-sen-seg-disp");
const negConEstDisp = document.getElementById("neg-con-est-disp");
const negBalCarDisp = document.getElementById("neg-bal-car-disp");
const negComEneDisp = document.getElementById("neg-com-ene-disp");
const negCarIntDisp = document.getElementById("neg-car-int-disp");
const negIntCarDisp = document.getElementById("neg-int-car-disp");
const negHorEcoDisp = document.getElementById("neg-hor-eco-disp");
const negRobAyuDisp = document.getElementById("neg-rob-ayu-disp");
const negRobAspDisp = document.getElementById("neg-rob-asp-disp");
const negRobLleDisp = document.getElementById("neg-rob-lle-disp");

// Lista de todos los displays
const allNegDisplays = [
  negSenMovDisp, negResAutDisp, negAjuTemDisp, negInvAutDisp, negSenPesDisp,
  negCamVisDisp, negPedAutDisp, negPanVitDisp, negAjuAutDisp, negCamIaDisp,
  negCamIntDisp, negCamRecDisp, negPorAutDisp, negSenSegDisp, negConEstDisp,
  negBalCarDisp, negComEneDisp, negCarIntDisp, negIntCarDisp, negHorEcoDisp,
  negRobAyuDisp, negRobAspDisp, negRobLleDisp
];

// ================== FUNCIONES ==================

// Oculta todos y muestra solo el seleccionado
function showOnly(display) {
  allNegDisplays.forEach(d => d.style.display = "none");
  display.style.display = "block";
}

// ================== EVENTOS ==================

negSenMov.addEventListener("click", () => showOnly(negSenMovDisp));
negResAut.addEventListener("click", () => showOnly(negResAutDisp));
negAjuTem.addEventListener("click", () => showOnly(negAjuTemDisp));
negInvAut.addEventListener("click", () => showOnly(negInvAutDisp));
negSenPes.addEventListener("click", () => showOnly(negSenPesDisp));
negCamVis.addEventListener("click", () => showOnly(negCamVisDisp));
negPedAut.addEventListener("click", () => showOnly(negPedAutDisp));
negPanVit.addEventListener("click", () => showOnly(negPanVitDisp));
negAjuAut.addEventListener("click", () => showOnly(negAjuAutDisp));
negCamIa.addEventListener("click", () => showOnly(negCamIaDisp));
negCamInt.addEventListener("click", () => showOnly(negCamIntDisp));
negCamRec.addEventListener("click", () => showOnly(negCamRecDisp));

negPorAut.addEventListener("click", () => showOnly(negPorAutDisp));
negSenSeg.addEventListener("click", () => showOnly(negSenSegDisp));
negConEst.addEventListener("click", () => showOnly(negConEstDisp));
negBalCar.addEventListener("click", () => showOnly(negBalCarDisp));
negComEne.addEventListener("click", () => showOnly(negComEneDisp));
negCarInt.addEventListener("click", () => showOnly(negCarIntDisp));
negIntCar.addEventListener("click", () => showOnly(negIntCarDisp));
negHorEco.addEventListener("click", () => showOnly(negHorEcoDisp));
negRobAyu.addEventListener("click", () => showOnly(negRobAyuDisp));
negRobAsp.addEventListener("click", () => showOnly(negRobAspDisp));
negRobLle.addEventListener("click", () => showOnly(negRobLleDisp));

// ================== BOTÓN ERASER ==================

var botEraser = document.getElementById("erase--disp");

botEraser.addEventListener("click", function() {
    negSenMovDisp.style.display = "none";
    negResAutDisp.style.display = "none";
    negAjuTemDisp.style.display = "none";
    negInvAutDisp.style.display = "none";
    negSenPesDisp.style.display = "none";
    negCamVisDisp.style.display = "none";
    negPedAutDisp.style.display = "none";
    negPanVitDisp.style.display = "none";
    negAjuAutDisp.style.display = "none";
    negCamIaDisp.style.display = "none";
    negCamIntDisp.style.display = "none";
    negCamRecDisp.style.display = "none";

    negPorAutDisp.style.display = "none";
    negSenSegDisp.style.display = "none";
    negConEstDisp.style.display = "none";
    negBalCarDisp.style.display = "none";
    negComEneDisp.style.display = "none";
    negCarIntDisp.style.display = "none";
    negIntCarDisp.style.display = "none";
    negHorEcoDisp.style.display = "none";
    negRobAyuDisp.style.display = "none";
    negRobAspDisp.style.display = "none";
    negRobLleDisp.style.display = "none";
});

