const hotDrinks = ['coffe', 'latte', 'tea', 'chocolate'];
const hotLevel = ['very hot', 'hot', 'hot', 'medium'];

// $.each(hotLevel, function (i, v) {
//   $('.hot-level').append('<li class="list-group-item">' + i + ' ' + v + '</li>');
// })

// $.each(hotDrinks, function( index, value ) {
//   $('.drinks').append('<li class="list-group-item">' + index + ' ' + value + '</li>');
// });




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


// const loremDisplay = () => {
//   $('p').toggleClass('align show-text radius');
// }

// $('.show-lorem').click(loremDisplay);

// $( "li" ).click(function() {
//   $(this).toggleClass( "highlight" );
// });