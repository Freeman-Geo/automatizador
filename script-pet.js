// === GET ELEMENTS - BOTONES ===
let petRieAutBtn = document.getElementById("pet-rie-aut");
let petLuzJarBtn = document.getElementById("pet-luz-jar");
let petIntHomBtn = document.getElementById("pet-int-hom");
let petCamExtBtn = document.getElementById("pet-cam-ext");
let petCamResBtn = document.getElementById("pet-cam-res");
let petCamSenBtn = document.getElementById("pet-cam-sen");
let petComIntBtn = document.getElementById("pet-com-int");

let petAliAutBtn = document.getElementById("pet-ali-aut");
let petProHorBtn = document.getElementById("pet-pro-hor");
let petDetChiBtn = document.getElementById("pet-det-chi");
let petFueAguBtn = document.getElementById("pet-fue-agu");
let petFilNotBtn = document.getElementById("pet-fil-not");
let petPueAccBtn = document.getElementById("pet-pue-acc");
let petChiRasBtn = document.getElementById("pet-chi-ras");
let petCamDisBtn = document.getElementById("pet-cam-dis");
let petSenActBtn = document.getElementById("pet-sen-act");
let petCollMidBtn = document.getElementById("pet-coll-mid");
let petLimAutBtn = document.getElementById("pet-lim-aut");
let petAreIntBtn = document.getElementById("pet-are-int");
let petRobAspBtn = document.getElementById("pet-rob-asp");

// === GET ELEMENTS - DISPLAYS ===
let petRieAutDisp = document.getElementById("pet-rie-aut-disp");
let petLuzJarDisp = document.getElementById("pet-luz-jar-disp");
let petIntHomDisp = document.getElementById("pet-int-hom-disp");
let petCamExtDisp = document.getElementById("pet-cam-ext-disp");
let petCamResDisp = document.getElementById("pet-cam-res-disp");
let petCamSenDisp = document.getElementById("pet-cam-sen-disp");
let petComIntDisp = document.getElementById("pet-com-int-disp");

let petAliAutDisp = document.getElementById("pet-ali-aut-disp");
let petProHorDisp = document.getElementById("pet-pro-hor-disp");
let petDetChiDisp = document.getElementById("pet-det-chi-disp");
let petFueAguDisp = document.getElementById("pet-fue-agu-disp");
let petFilNotDisp = document.getElementById("pet-fil-not-disp");
let petPueAccDisp = document.getElementById("pet-pue-acc-disp");
let petChiRasDisp = document.getElementById("pet-chi-ras-disp");
let petCamDisDisp = document.getElementById("pet-cam-dis-disp");
let petSenActDisp = document.getElementById("pet-sen-act-disp");
let petCollMidDisp = document.getElementById("pet-coll-mid-disp");
let petLimAutDisp = document.getElementById("pet-lim-aut-disp");
let petAreIntDisp = document.getElementById("pet-are-int-disp");
let petRobAspDisp = document.getElementById("pet-rob-asp-disp");

// === FUNCION PARA OCULTAR TODOS LOS DISPLAYS ===
function hideAllDisplays() {
    petRieAutDisp.style.display = "none";
    petLuzJarDisp.style.display = "none";
    petIntHomDisp.style.display = "none";
    petCamExtDisp.style.display = "none";
    petCamResDisp.style.display = "none";
    petCamSenDisp.style.display = "none";
    petComIntDisp.style.display = "none";

    petAliAutDisp.style.display = "none";
    petProHorDisp.style.display = "none";
    petDetChiDisp.style.display = "none";
    petFueAguDisp.style.display = "none";
    petFilNotDisp.style.display = "none";
    petPueAccDisp.style.display = "none";
    petChiRasDisp.style.display = "none";
    petCamDisDisp.style.display = "none";
    petSenActDisp.style.display = "none";
    petCollMidDisp.style.display = "none";
    petLimAutDisp.style.display = "none";
    petAreIntDisp.style.display = "none";
    petRobAspDisp.style.display = "none";
}

// === EVENT LISTENERS - BOTONES ===
petRieAutBtn.addEventListener("click", () => {
    hideAllDisplays();
    petRieAutDisp.style.display = "block";
});
petLuzJarBtn.addEventListener("click", () => {
    hideAllDisplays();
    petLuzJarDisp.style.display = "block";
});
petIntHomBtn.addEventListener("click", () => {
    hideAllDisplays();
    petIntHomDisp.style.display = "block";
});
petCamExtBtn.addEventListener("click", () => {
    hideAllDisplays();
    petCamExtDisp.style.display = "block";
});
petCamResBtn.addEventListener("click", () => {
    hideAllDisplays();
    petCamResDisp.style.display = "block";
});
petCamSenBtn.addEventListener("click", () => {
    hideAllDisplays();
    petCamSenDisp.style.display = "block";
});
petComIntBtn.addEventListener("click", () => {
    hideAllDisplays();
    petComIntDisp.style.display = "block";
});

petAliAutBtn.addEventListener("click", () => {
    hideAllDisplays();
    petAliAutDisp.style.display = "block";
});
petProHorBtn.addEventListener("click", () => {
    hideAllDisplays();
    petProHorDisp.style.display = "block";
});
petDetChiBtn.addEventListener("click", () => {
    hideAllDisplays();
    petDetChiDisp.style.display = "block";
});
petFueAguBtn.addEventListener("click", () => {
    hideAllDisplays();
    petFueAguDisp.style.display = "block";
});
petFilNotBtn.addEventListener("click", () => {
    hideAllDisplays();
    petFilNotDisp.style.display = "block";
});
petPueAccBtn.addEventListener("click", () => {
    hideAllDisplays();
    petPueAccDisp.style.display = "block";
});
petChiRasBtn.addEventListener("click", () => {
    hideAllDisplays();
    petChiRasDisp.style.display = "block";
});
petCamDisBtn.addEventListener("click", () => {
    hideAllDisplays();
    petCamDisDisp.style.display = "block";
});
petSenActBtn.addEventListener("click", () => {
    hideAllDisplays();
    petSenActDisp.style.display = "block";
});
petCollMidBtn.addEventListener("click", () => {
    hideAllDisplays();
    petCollMidDisp.style.display = "block";
});
petLimAutBtn.addEventListener("click", () => {
    hideAllDisplays();
    petLimAutDisp.style.display = "block";
});
petAreIntBtn.addEventListener("click", () => {
    hideAllDisplays();
    petAreIntDisp.style.display = "block";
});
petRobAspBtn.addEventListener("click", () => {
    hideAllDisplays();
    petRobAspDisp.style.display = "block";
});

// === BOTON ERASER PARA OCULTAR TODOS ===
let botEraser = document.getElementById("erase--disp");
botEraser.addEventListener("click", () => {
    hideAllDisplays();
});
