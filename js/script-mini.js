var search=document.querySelector(".search");var popup=document.querySelector(".map-search");var minus=document.querySelector(".minus");var plus=document.querySelector(".plus");var minus2=document.querySelector(".children-minus");var plus2=document.querySelector(".children-plus");popup.classList.add("map-search-close");search.addEventListener("click",function(event){event.preventDefault();popup.classList.toggle("map-search-close");});window.addEventListener("keydown",function(event){if(event.keyCode===27){if(!popup.classList.contains("map-search-close")){popup.classList.add('map-search-close');}}});minus.addEventListener("click",function(event){event.preventDefault();var val1=document.getElementById("adult").value;val1=val1-'1';if(val1<0){val1=0;}
document.getElementById("adult").value=val1;});plus.addEventListener("click",function(event){event.preventDefault();var val2=document.getElementById("adult").value;val2++;document.getElementById("adult").value=val2;});minus2.addEventListener("click",function(event){event.preventDefault();var val3=document.getElementById("children").value;val3=val3-'1';if(val3<0){val3=0;}
document.getElementById("children").value=val3;});plus2.addEventListener("click",function(event){event.preventDefault();var val4=document.getElementById("children").value;val4++;document.getElementById("children").value=val4;});
