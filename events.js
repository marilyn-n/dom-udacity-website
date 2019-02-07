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