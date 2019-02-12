const hotDrinks = ['coffe', 'latte', 'tea', 'chocolate'];
const hotLevel = ['very hot', 'hot', 'hot', 'medium'];

$.each(hotDrinks, function( index, value ) {

  $.each(hotLevel, function (v, i) {
    $('.drinks').append('<li class="list-group-item modal-list">' + value + ' ' + i + '</li>');

    // $('.modal-list').append(' ' + '<b>' + v + ' ' + i + '</b>');
    
  })
});

$( document ).ready(function() {

const toggleColor = () => {  
  $('body').toggleClass('bg-color');    
}

$('#bg-btn').click(toggleColor);

const selectAll = document.querySelector('.select-all');

selectAll.addEventListener('click', function () {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');

  [...checkboxes].map(check => check.checked = true);

})

const unselect = document.querySelector('.unselect');

unselect.addEventListener('click', function () {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');

  [...checkboxes].map(check => check.checked = false);
})
  

});

const copyToClipboard = () => {
  const textField = $('#clipboard-field');
  textField.select();
  document.execCommand("copy");
  $('.alert-info').text('copied! ' + textField.val());
  $('.alert-info').css("display","block");
}
