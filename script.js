    


const start = document.querySelector('.start'), 
    start1 = document.querySelector('.start1'),     
    start2 = document.querySelector('.start2'), 
    start3 = document.querySelector('.start3'); 
 
 
start.onclick = function(){ 
    start.classList.toggle('hide'); 
};

start1.onclick = function(){ 
    start1.classList.toggle('hide'); 
}; 
 
start2.onclick = function(){ 
    start2.classList.toggle('hide'); 
}; 
 
start3.onclick = function(){ 
    start3.classList.toggle('hide'); 
};

 /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onClick = function(event) {
if (!event.target.matches('.searchBarButton1')) {

  var dropdowns = document.getElementsByClassName("dropdownСontent");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

 /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.searchBarButton2')) {

  var dropdowns1 = document.getElementsByClassName("dropdownСontent2")
  var i;
  for (i = 0; i < dropdowns1.length; i++) {
    var openDropdown = dropdowns1[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.searchBarButton3')) {

  var dropdowns1 = document.getElementsByClassName("dropdownСontent3")
  var i;
  for (i = 0; i < dropdowns1.length; i++) {
    var openDropdown = dropdowns1[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
