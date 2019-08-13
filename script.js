$('.avanti').on('click', function(){
  Slide($(".slider"), "N")
/*   var immagineAttiva = $('.slider img.active');

  immagineAttiva.removeClass('active');

  var prossimaImmagine = immagineAttiva.next();
  
  console.log(prossimaImmagine)
  
  if (prossimaImmagine.length != 0) {
	  
    prossimaImmagine.addClass('active');
	
  } else {
	  
    $('.slider img').first().addClass('active');
	
  }
 */
});

$('.indietro').on('click',function(){
	Slide($(".slider"), "p")
  //var immagineAttiva = $('.slider img.active');
//
  //immagineAttiva.removeClass('active');
//
  //var immaginePrecedente = immagineAttiva.prev();
  //
  //console.log(immaginePrecedente)
  //
  //if (immaginePrecedente.length != 0) {
	//  
  //  immaginePrecedente.addClass('active');
	//
  //} else {
	//  
  //  $('.slider img').last().addClass('active');
  //}
});

$(() => {
  setInterval(()=>{
    Slide($(".slider"), "N")
  }, 3000)
})

function Slide(selector, direction){
  
  var active = selector.find('img.active');

  active.removeClass('active');
  var nextImage;
  if(direction === "N"){
    nextImage = active.next();
  }
  else{
    nextImage = active.prev();

  }
console.log(nextImage)
  
  if (nextImage.length != 0) {
	  
    nextImage.addClass('active');
	
  } else {
    var images = selector.find('img');
    if(direction === "N"){
      images.first().addClass('active');
    }
    else{
      images.last().addClass('active');
  
    }
    //selector.find('img').first().addClass('active');
	
  }
}
