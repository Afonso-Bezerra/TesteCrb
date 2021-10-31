function go_planta(){

  let input = document.getElementById('segundo').textContent;

  let input2 = document. getElementById('primeiro').textContent;

  let checkbox1 = document.getElementById('check1');
  
  let checkbox2 =  document.getElementById('check2');

  //Verifica as CheckBox
  if( checkbox1.checked === false  && checkbox2.checked === false){
    swal(
      "Campos incompletos!",
      "Não esqueça de preenchê-los.",
      "warning",
   )
  }else{
    //Se uma delas estiver marcada, verifica o layout

        if(input ==='Open Living'){

          //verifica a metragem
          if(input2 === '200m²' || input2 === '150m²'){
            localStorage.setItem('plantas' , 1);
            window.location = '../planta/index.html';
          }
          else{
            swal(
              "Campos incompletos!",
              "Não esqueça de preenchê-los.",
              "warning",
           )
          }
          
        }else if(input === 'Sky Windown'){
      
          if(input2 === '200m²' || input2 === '150m²'){
            localStorage.setItem('plantas' , 2);
            window.location = '../planta/index.html';
          }
          else{
            swal(
              "Campos incompletos!",
              "Não esqueça de preenchê-los.",
              "warning",
           )
          }
          }else{
            swal(
            "Campos incompletos!",
            "Não esqueça de preenchê-los.",
            "warning",
                )
        } 
    }

  }


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

$('.toggle').on('click', function() {
$('.menu').toggleClass('expanded');  
$('span').toggleClass('hidden');  
$('.container , .toggle').toggleClass('close');  
});


document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
return evt.touches ||             
     evt.originalEvent.touches; 
}                                                     

function handleTouchStart(evt) {
const firstTouch = getTouches(evt)[0];                                      
xDown = firstTouch.clientX;                                      
yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
if ( ! xDown || ! yDown ) {
    return;
}

var xUp = evt.touches[0].clientX;                                    
var yUp = evt.touches[0].clientY;

var xDiff = xDown - xUp;
var yDiff = yDown - yUp;

if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
    if ( xDiff > 0 ) {
      plusDivs(1) 
    } else {
      plusDivs(-1)
    }                       
} 
/* reset values */
xDown = null;
yDown = null;                                             
};


function marcaDesmarca(caller) {
    var checks = document.querySelectorAll('input[type="checkbox"]');    
    for(let i = 0; i < checks.length; i++) {
      checks[i].checked = checks[i] == caller;   
    }
  }

try{
  const selectedAll = document.querySelectorAll(".selected");

  selectedAll.forEach((selected) => {
    const optionsContainer = selected.previousElementSibling;
    const searchBox = selected.nextElementSibling;
  
    const optionsList = optionsContainer.querySelectorAll(".option");
  
    selected.addEventListener("click", () => {
      if (optionsContainer.classList.contains("active")) {
        optionsContainer.classList.remove("active");
      } else {
        let currentActive = document.querySelector(".options-container.active");
  
        if (currentActive) {
          currentActive.classList.remove("active");
        }
  
        optionsContainer.classList.add("active");
      }

    }, false);
  
    optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
      }, false);
    });
  
    searchBox.addEventListener("keyup", function (e) {
      filterList(e.target.value);
    }, false);
  
    const filterList = (searchTerm) => {
      searchTerm = searchTerm.toLowerCase();
      optionsList.forEach((option) => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
          option.style.display = "block";
        } else {
          option.style.display = "none";
        }
      });
    };
  });
}
catch(error){

}