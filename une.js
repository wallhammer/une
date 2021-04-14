var hiddenBox = $( "#banner-message" );
$( "#servicios" ).on( "click", function( event ) {
  hiddenBox.show();
});

var imagen =['covers/IMG_25_03_2021_09_11_17.png','covers/IMG_01_03_2021_09_42_01.jpg','covers/IMG_09_12_2020_11_10_21.jpg','covers/IMG_13_03_2021_11_26_23.png','covers/IMG_24_04_2020_05_48_41.png','covers/IMG_22_03_2021_01_39_18.png'];
var cont =0;

function carrusel(contendero){
  contendero.addEventListenner('click',e =>{
    let atras = contendero.querySelector('.atras'),
    adelate = contendero.querySelector('.adelante'),
    img = contenedor.querySelector('img'),
    tgt =e.target;
    
    if(tgt == atras){
      if(cont > 0){
        img.src=imagen[cont-1];
        cont--;
      }else{
        img.src=imagen[imagen.length-1];
        cont=imagen.length-1;
      }
    }else if(tgt == adelate){
      if(cont < imagen.length-1){
        img.src=imagen[cont-1];
        cont++;
      }else{
        img.src=imagen[0];
        cont=0;
      }
    }
  })
}
document.addEventListener("DOMEContentLoaded",()=>{
  let contenedor = document.querySelector('.contenedor');
  carrusel
})