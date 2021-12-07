// Ensure everything is loaded first
window.onload = function() {
    init();
    }
    function init(){
     console.log('Ready');
     }
    
    //Slideshow
    $("#slideshow > div:gt(0)").hide();
    
    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);
    
    
    //Lyrics with buttons
    //Assign a num to slideIndex
    //Call showSlides using that index
    var slideIndex = 1;
    showSlides(slideIndex);
    
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " active";
    }
    
    var mode = "no";
    
    function lightMode(){
        console.log("Light Mode Toggled")
        document.body.style.backgroundColor = "#FFFFFF";
        document.getElementById("homeContent").style.backgroundColor="#FFFFFF";
        document.getElementById("aboutContent").style.backgroundColor="#FFFFFF";
        document.getElementById("liveContent").style.backgroundColor="#FFFFFF";
        document.getElementById("photosContent").style.backgroundColor="#FFFFFF";
        document.getElementById("lyricsContent").style.backgroundColor="#FFFFFF";
        document.getElementById("header").style.backgroundColor="#FFFFFF";
        document.getElementById("footer").style.backgroundColor="#FFFFFF";
        document.getElementById("homeContent").style.backgroundColor="#FFFFFF";
        document.getElementById("demo").style.backgroundColor="#FFFFFF";	
        $("p").css("color", "#000000");
        $("h1").css("color", "#000000");
        $("a").css("color", "#000000");
        $("header").css("backgroundColor", "#FFFFFF");
        $(".prev").css("color", "#FFFFFF")
        localStorage.setItem('mode', 'light')
        console.log(localStorage.getItem('mode'))
    }
    
    function darkMode(){
        console.log("Dark Mode Toggled")
        document.body.style.backgroundColor = "#000000";
        document.getElementById("homeContent").style.backgroundColor="#000000";
        document.getElementById("aboutContent").style.backgroundColor="#000000";
        document.getElementById("liveContent").style.backgroundColor="#000000";
        document.getElementById("photosContent").style.backgroundColor="#000000";
        document.getElementById("lyricsContent").style.backgroundColor="#000000";
        document.getElementById("header").style.backgroundColor="#000000";
        document.getElementById("footer").style.backgroundColor="#000000";
        document.getElementById("homeContent").style.backgroundColor="#000000";
        document.getElementById("demo").style.backgroundColor="#000000";
        $("p").css("color", "#FFFFFF");
        $("h1").css("color", "#FFFFFF");
        $("a").css("color", "#FFFFFF");
        $("header").css("backgroundColor", "#000000");
        $(".prev").css("color", "#FFFFFF")
        localStorage.setItem('mode', '2')
        console.log(localStorage.getItem('mode'))
    }
    
    if(localStorage.getItem('mode') === ('light')){
         console.log("Local is light")
         lightMode();
     }
    
    else if(localStorage.getItem('mode') === ('dark')){
        console.log("Local is dark")
        darkMode();
    }