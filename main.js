// For About Tablinks

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab"); 
}



// For sideMenu in Phone
var sidemenu = document.getElementById("sidemenu");


function openmenu(){
    sidemenu.style.right = "0"
}

function closemenu(){
    sidemenu.style.right = "-200px"
}


// For text Typing in Header
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Frontend Dev";
    }, 4100);
    setTimeout(() => {
        text.textContent = "Web Designer";
    }, 8200);
}

textLoad();
setInterval(textLoad, 12000);