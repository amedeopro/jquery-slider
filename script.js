$('.avanti').on('click', function(){
  
  var immagineAttiva = $('.slider img.active');

  immagineAttiva.removeClass('active');

  var prossimaImmagine = immagineAttiva.next();
  
  console.log(prossimaImmagine)
  
  if (prossimaImmagine.length != 0) {
	  
    prossimaImmagine.addClass('active');
	
  } else {
	  
    $('.slider img').first().addClass('active');
	
  }

});

$('.indietro').on('click',function(){
	
  var immagineAttiva = $('.slider img.active');

  immagineAttiva.removeClass('active');

  var immaginePrecedente = immagineAttiva.prev();
  
  console.log(immaginePrecedente)
  
  if (immaginePrecedente.length != 0) {
	  
    immaginePrecedente.addClass('active');
	
  } else {
	  
    $('.slider img').last().addClass('active');
  }
});
