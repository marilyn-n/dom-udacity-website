  const loremDisplay = () => {
    $('p').toggleClass('align show-text radius');
  }

  $('button:first-child').click(loremDisplay);

  $( "li" ).click(function() {
    $(this).toggleClass( "highlight" );
  });

  const toggleColor = () => {  
    $('body').toggleClass('bg-color');    
  }

  $('#bg-btn').click(toggleColor);


// $('input').keydown(function(event) {
//   console.log(event.key);
//   console.log(event.keyCode);
  
//   const b = $("<b></b>").text(event.key)
//   $('div').append(b)
  
// });

// const txt2 = $("<b></b>").text("Text:   ")

// $('div').append(txt2)

// show modal
$( document ).ready(function() {
    console.log( "ready!" );
    $(".open-modal").click(function(){
    $("#exampleModal").addClass('show');
    $('.close-modal').click(function () {
      $("#exampleModal").removeClass('show');
    })
  });
});