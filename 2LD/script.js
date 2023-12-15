const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        navEl.classList.add('nav-scrolled'); 
        navEl.style.padding = "15px 0px"
    }
    else if (window.scrollY <= 100){
        navEl.classList.remove('nav-scrolled');
        navEl.style.padding = "30px 0px";
    }
});

let sections = document.querySelectorAll('section'); //sections = visi elementai kurie yra section tipo
let navLinks = document.querySelectorAll('header nav a'); //navLinks = visi a elemento linkai esantys {header nav} elementuose 

window.onscroll = () => { //naudoja funkcija kai vartotojas 'scrollina'
    sections.forEach(sec => { //atskirai tikrinamas kiekvienas section elementas su forEach
        let top = window.scrollY; //nustato kad kintamasis top yra lygus visam nuscrollintam keliui nuo virsaus
        let offset = sec.offsetTop-50; //offset yra lygus sekcijos virsaus padeciai
        let height = sec.offsetHeight; //height yra lygus sekcijos auksciui
        let id = sec.getAttribute('id'); //gauna sekcijos elemento atributa, kuris yra 'id'

        if(top >= offset && top < offset + height){ //patikrina kurios sekcijos ribose yra vartotojas
            navLinks.forEach(links => { //tikrinamas kiekvienas nav elemento linkas
                links.classList.remove('active'); //kiekvienam nav linko elementui istrinama active klase
                document.querySelector('header nav a[href*= ' + id +']').classList.add('active'); //prideda active klase sekanciam elementui su id
            });
        };
    });
};

var ytVideo = document.querySelector('#ytvideo');
var localVideo = document.querySelector('#localvideo');
var audioFile = document.querySelector('#audio')

function Youtube(){
    localVideo.src = "";
    audioFile.src = "";
    ytVideo.style.display = 'inline-block';
    localVideo.style.display = 'none';
    audioFile.style.display = 'none';
    ytVideo.src = "https://www.youtube.com/embed/jNQXAC9IVRw?si=YbWxM3tJsIrd9m0_";
}
function Video(){
    ytVideo.src = "";
    audioFile.src = "";
    ytVideo.style.display = 'none';
    localVideo.style.display = 'inline-block';
    audioFile.style.display = 'none';
    localVideo.src = "bunny.mp4";
}
function audio(){
    localVideo.src = "";
    ytVideo.src = "";
    ytVideo.style.display = 'none';
    localVideo.style.display = 'none';
    audioFile.src = "horse.mp3";
    audioFile.style.display = 'inline-block';

}

const buttons = document.querySelectorAll('#media button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.backgroundColor = 'orange';
        btn.style.color = 'white';
        btn.style.transform = 'scale(1.2)';
        btn.style.transition = '0.5s';
        buttons.forEach(otherBtn =>{
            if (otherBtn !== btn) {
                otherBtn.style.backgroundColor = ''; // or you can set it to the default color
                otherBtn.style.color = ''; // reset text color if needed
                otherBtn.style.transform = 'scale(1)';
                otherBtn.style.transition = '0.5s';
            }
        });
    });
});
function infoSaugojimas(){

let vardas = document.getElementById("vardas").value;
let pavarde = document.getElementById("pavarde").value;
let data = document.getElementById("metai").value;

let isvestiInfo = {
    Vardas: vardas,
    Pavarde: pavarde,
    Metai: data
};
var output = "Vartotojo vardas: " + isvestiInfo.Vardas + "<br>";
    output += "Vartotojo pavardė: " + isvestiInfo.Pavarde + "<br>";
    output += "Laukiama data: " + isvestiInfo.Metai + "<br>";
    let userDate = new Date(isvestiInfo.Metai);
    let currentDate = new Date();
  
    let timeDifference = userDate - currentDate;
    timeDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
    // Displaying the time difference in days
    if(timeDifference > 0){
        if (timeDifference <= 1000) {output += "<br>" + "<span style='font-size: 12px;'>Reikės laukti: " + timeDifference + " dienų</span><br>";}
        else if(timeDifference > 1000 && timeDifference < 7000) {output += "<br>" + "<span style='font-size: 16px;'>Reikės laukti: " + timeDifference + " dienų</span><br>";}
        else{output += "<br>" + "<span style='font-size: 20px;'>Reikės laukti: " + timeDifference + " dienų</span><br>";}
    }
    else{
        alert("Prašome įvesti ateities laukiamą datą");
        output += "<br>" + "Prašome įvesti ateities laukiamą datą" + "<br>";
    }
    console.log(isvestiInfo);
    document.getElementById("rezultatas").innerHTML = "<h3>Įvesta informacija:</h3>" + output;
}
