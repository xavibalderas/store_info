

function slide(position){
  $('.slide').css('display', 'none');
  $('#' + position).css('display', 'block');
  ga('send', 'event', 'Info screen', 'click', position);
}
