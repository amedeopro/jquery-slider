$('.avanti').click(function(){
  var immagineAttiva = $('.slider img.active');

  $('.slider img').removeClass('active');

  var prossimaImmagine = immagineAttiva.next('img');

  if (prossimaImmagine.length != 0) {
    immagineAttiva.addClass('active');
  } else {
    $('.slider img').first().addClass('active');
  }

});

$('.indietro').click(function(){
  var immagineAttiva = $('.active');

  $('.slider img').removeClass('active');

  immagineAttiva.prev('img').addClass('active');
});
