document.getElementById("ham").addEventListener("click", function(){

  document.getElementById("nav").style.transform = "translateY(0)";

  document.getElementById("cross").style.display = "flex";

  document.getElementById("ham").style.display = "none";

});

document.getElementById("cross").addEventListener("click", function(){

  document.getElementById("nav").style.transform = "translateY(-100%)";

  document.getElementById("cross").style.display = "none";

  document.getElementById("ham").style.display = "flex";

});