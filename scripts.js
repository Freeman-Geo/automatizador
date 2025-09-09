const camIntDisp = document.getElementById("cam-int-disp");
const camOcuDisp = document.getElementById("cam-ocu-disp");
const sensMovDisp = document.getElementById("sens-mov-disp");
const sensVibDisp = document.getElementById("sens-vib-disp");
const cerrEleDisp = document.getElementById("cerr-ele-disp");
const llavVirDisp = document.getElementById("llav-vir-disp");
const sirVolDisp = document.getElementById("sir-vol-disp");
const luzEstDisp = document.getElementById("luz-est-disp");
const ruEnDisp = document.getElementById("ru-en-disp");
const llamAutDisp = document.getElementById("llam-aut-disp");
const botPanDisp = document.getElementById("bot-pan-disp");
const humNegDisp = document.getElementById("hum-neg-disp");
const gasPimDisp = document.getElementById("gas-pim-disp");
const plaEleDisp = document.getElementById("pla-ele-disp");
const rocTinDisp = document.getElementById("roc-tin-disp");
const menVozDisp = document.getElementById("men-voz-disp");
const cerrYinDisp = document.getElementById("cerr-yin-disp");
const yyyYyyDisp = document.getElementById("yyy-yyy-disp");
const recFacDisp = document.getElementById("rec-fac-disp");
const detComDisp = document.getElementById("det-com-disp");
const porGarDisp = document.getElementById("por-gar-disp");
const deteHumDisp = document.getElementById("dete-hum-disp");
const detFugDisp = document.getElementById("det-fug-disp");
const alMedDisp = document.getElementById("al-med-disp");
const segPerDisp = document.getElementById("seg-per-disp");
const ilExDisp = document.getElementById("il-ex-disp");
const drVolDisp = document.getElementById("dr-vol-disp");

function ocultarTodos() {
    camIntDisp.style.display = "none";
    camOcuDisp.style.display = "none";
    sensMovDisp.style.display = "none";
    sensVibDisp.style.display = "none";
    cerrEleDisp.style.display = "none";
    llavVirDisp.style.display = "none";
    sirVolDisp.style.display = "none";
    luzEstDisp.style.display = "none";
    ruEnDisp.style.display = "none";
    llamAutDisp.style.display = "none";
    botPanDisp.style.display = "none";
    humNegDisp.style.display = "none";
    gasPimDisp.style.display = "none";
    plaEleDisp.style.display = "none";
    rocTinDisp.style.display = "none";
    menVozDisp.style.display = "none";
    cerrYinDisp.style.display = "none";
    yyyYyyDisp.style.display = "none";
    recFacDisp.style.display = "none";
    detComDisp.style.display = "none";
    porGarDisp.style.display = "none";
    deteHumDisp.style.display = "none";
    detFugDisp.style.display = "none";
    alMedDisp.style.display = "none";
    segPerDisp.style.display = "none";
    ilExDisp.style.display = "none";
    drVolDisp.style.display = "none";
}

// Eventos click individuales
document.getElementById("cam-int").addEventListener("click", function() {
    ocultarTodos();
    camIntDisp.style.display = "block";
});

document.getElementById("cam-ocu").addEventListener("click", function() {
    ocultarTodos();
    camOcuDisp.style.display = "block";
});

document.getElementById("sens-mov").addEventListener("click", function() {
    ocultarTodos();
    sensMovDisp.style.display = "block";
});

document.getElementById("sens-vib").addEventListener("click", function() {
    ocultarTodos();
    sensVibDisp.style.display = "block";
});

document.getElementById("cerr-ele").addEventListener("click", function() {
    ocultarTodos();
    cerrEleDisp.style.display = "block";
});

document.getElementById("llav-vir").addEventListener("click", function() {
    ocultarTodos();
    llavVirDisp.style.display = "block";
});

document.getElementById("sir-vol").addEventListener("click", function() {
    ocultarTodos();
    sirVolDisp.style.display = "block";
});

document.getElementById("luz-est").addEventListener("click", function() {
    ocultarTodos();
    luzEstDisp.style.display = "block";
});

document.getElementById("ru-en").addEventListener("click", function() {
    ocultarTodos();
    ruEnDisp.style.display = "block";
});

document.getElementById("llam-aut").addEventListener("click", function() {
    ocultarTodos();
    llamAutDisp.style.display = "block";
});

document.getElementById("bot-pan").addEventListener("click", function() {
    ocultarTodos();
    botPanDisp.style.display = "block";
});

document.getElementById("hum-neg").addEventListener("click", function() {
    ocultarTodos();
    humNegDisp.style.display = "block";
});

document.getElementById("gas-pim").addEventListener("click", function() {
    ocultarTodos();
    gasPimDisp.style.display = "block";
});

document.getElementById("pla-ele").addEventListener("click", function() {
    ocultarTodos();
    plaEleDisp.style.display = "block";
});

document.getElementById("roc-tin").addEventListener("click", function() {
    ocultarTodos();
    rocTinDisp.style.display = "block";
});

document.getElementById("men-voz").addEventListener("click", function() {
    ocultarTodos();
    menVozDisp.style.display = "block";
});

document.getElementById("cerr-yin").addEventListener("click", function() {
    ocultarTodos();
    cerrYinDisp.style.display = "block";
});

document.getElementById("yyy-yyy").addEventListener("click", function() {
    ocultarTodos();
    yyyYyyDisp.style.display = "block";
});

document.getElementById("rec-fac").addEventListener("click", function() {
    ocultarTodos();
    recFacDisp.style.display = "block";
});

document.getElementById("det-com").addEventListener("click", function() {
    ocultarTodos();
    detComDisp.style.display = "block";
});

document.getElementById("por-gar").addEventListener("click", function() {
    ocultarTodos();
    porGarDisp.style.display = "block";
});

document.getElementById("dete-hum").addEventListener("click", function() {
    ocultarTodos();
    deteHumDisp.style.display = "block";
});

document.getElementById("det-fug").addEventListener("click", function() {
    ocultarTodos();
    detFugDisp.style.display = "block";
});

document.getElementById("al-med").addEventListener("click", function() {
    ocultarTodos();
    alMedDisp.style.display = "block";
});

document.getElementById("seg-per").addEventListener("click", function() {
    ocultarTodos();
    segPerDisp.style.display = "block";
});

document.getElementById("il-ex").addEventListener("click", function() {
    ocultarTodos();
    ilExDisp.style.display = "block";
});

document.getElementById("dr-vol").addEventListener("click", function() {
    ocultarTodos();
    drVolDisp.style.display = "block";
});

let botEraser = document.getElementById("erase--disp")

botEraser.addEventListener("click",()=>{
    camIntDisp.style.display = "none";
    camOcuDisp.style.display = "none";
    sensMovDisp.style.display = "none";
    sensVibDisp.style.display = "none";
    cerrEleDisp.style.display = "none";
    llavVirDisp.style.display = "none";
    sirVolDisp.style.display = "none";
    luzEstDisp.style.display = "none";
    ruEnDisp.style.display = "none";
    llamAutDisp.style.display = "none";
    botPanDisp.style.display = "none";
    humNegDisp.style.display = "none";
    gasPimDisp.style.display = "none";
    plaEleDisp.style.display = "none";
    rocTinDisp.style.display = "none";
    menVozDisp.style.display = "none";
    cerrYinDisp.style.display = "none";
    yyyYyyDisp.style.display = "none";
    recFacDisp.style.display = "none";
    detComDisp.style.display = "none";
    porGarDisp.style.display = "none";
    deteHumDisp.style.display = "none";
    detFugDisp.style.display = "none";
    alMedDisp.style.display = "none";
    segPerDisp.style.display = "none";
    ilExDisp.style.display = "none";
    drVolDisp.style.display = "none";
})



