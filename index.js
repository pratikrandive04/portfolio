document.querySelector(".close").style.display="none";
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebargo");
    if(document.querySelector(".sidebar").classList.contains("sidebargo")){
        document.querySelector(".close").style.display="none"
        document.querySelector(".menu").style.display="inline"
    }
    else{
        document.querySelector(".menu").style.display="none"
        setTimeout(() => {
            document.querySelector(".close").style.display="inline"
        }, 400);
    }
});