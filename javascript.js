function openLinkedin(){
    window.open('https://www.linkedin.com/in/therese-brunzell-120aba/', '_blank')
}

function hideText(){
    var x = document.getElementById("textDiv");
    var y = document.getElementById("topName");

    x.style.display = "none";
    y.style.display = "none"; 

}

function showText(){
    var x = document.getElementById("textDiv");
    var y = document.getElementById("topName");
    
    x.style.display = "block";
    y.style.display = "block"; 
}