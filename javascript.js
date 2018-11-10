let sliderImages = document.querySelectorAll('.slide'),
    clickUno = document.querySelector('#uno'),
    clickDos = document.querySelector('#dos'),
    clickTres = document.querySelector('#tres'),
    fecha = document.querySelectorAll('.fecha')
    current = 0;

    //borra todas las imagenes
function reset() {
  for(var i=0; i< sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
    fecha[i].style.display = 'none';
  }
}

//inicia el carrusel
function startSlide(){
  reset();
  sliderImages[0].style.display = 'block';
  fecha[0].style.display = 'block';
}

function slideUno() {
  reset();
  if(current==0){
    sliderImages[current].style.display = 'block';
    fecha[current].style.display = 'block';
  }
  if(current==1){
    sliderImages[current - 1].style.display = 'block';
    fecha[current - 1].style.display = 'block';
    current--;
  }
  if(current==2)
  {
    sliderImages[current - 2].style.display = 'block';
    fecha[current - 2].style.display = 'block';
    current=current-2;
  }


}

function slideDos() {
  reset();
  if(current==0){
    sliderImages[current + 1].style.display = 'block';
    fecha[current + 1].style.display = 'block';
    current++;
  }
  if(current==1){
    sliderImages[current].style.display = 'block';
    fecha[current].style.display = 'block';
  }
  if(current==2){
    sliderImages[current - 1].style.display = 'block';
    fecha[current - 1].style.display = 'block';
    current--;
  }
}

function slideTres() {
  reset();
  if(current==0){
    sliderImages[current + 2].style.display = 'block';
    fecha[current + 2].style.display = 'block';
    current = current + 2;
  }
  if(current==1){
    sliderImages[current + 1].style.display = 'block';
    fecha[current + 1].style.display = 'block';
    current++;
  }
  if(current==2){
    sliderImages[current].style.display = 'block';
    fecha[current].style.display = 'block';
  }
}

//listeners
clickUno.addEventListener('click', function(){
  slideUno();
})

clickDos.addEventListener('click', function(){
  slideDos();
})

clickTres.addEventListener('click', function(){
  slideTres();
})

startSlide();

function toggleOverlay(){
	var overlay = document.getElementById('overlay');
	var specialBox = document.getElementById('specialBox');
  overlay.style.opacity = .8;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox.style.display = "none";
	} else {
		overlay.style.display = "block";
		specialBox.style.display = "block";
	}
}

