
 const plantaatual =  localStorage.getItem('plantas');
 const planta1 =  document.getElementById('planta1');
 const planta2 =  document.getElementById('planta2');

 if(plantaatual === '1'){

   planta1.style.display ='block';


 }else if(plantaatual === '2'){

     planta2.style.display ='block'
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
    
        searchBox.value = "";
        filterList("");
    
        if (optionsContainer.classList.contains("active")) {
          searchBox.focus();
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
    }, false);
  }
  catch(error){
  
  }

  $('#metros1').change(function(e){
    planta2.style.display='none';
    planta1.style.display='block';
 })
  
 $('#metros2').change(function(e){
    planta1.style.display='none';
    planta2.style.display ='block'
 })
 
 const canvas  =  document.getElementById('canvas');


function start(){
    
    if($('#canvas').css('display') === 'none')
    {
        canvas.style.display = 'block';
    }
    else
    {
        canvas.style.display = 'none'
    }

}


 function _(selector){
    return document.querySelector(selector);
  }

  function setup(){
    let canvas = createCanvas(1920, 1060);
    canvas.parent("canvas-wrapper");
    
  }

  function mouseDragged(){
    let type = _("#pen-pencil").checked?"pencil":"brush";
    let color = _("#pen-color").value;
    fill(color);
    stroke(color);
    if(type == "pencil"){
      line(pmouseX, pmouseY, mouseX, mouseY);
    } else {
      ellipse(mouseX, mouseY, size);
    }
  }
  _("#reset-canvas").addEventListener("click", function(){
    setup()
  });
 



