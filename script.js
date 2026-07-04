// Typing Effect

const text = "Computer Engineering Student";

let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,100);
    }
}

typing();


// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML="☀️";
    }
    else{
        themeBtn.innerHTML="🌙";
    }

});


// Scroll To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// Scroll Animation

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});