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

const addFileImage = () => {
  const fileElements = document.getElementsByClassName('file');

  [...fileElements].map(fileElement => {
    const filename = fileElement.textContent;
    const extension = filename.substr(filename.length -3);

    console.log(extension);
    console.log(filename);
    
    if(extension === 'png') {
      fileElement.innerHTML = `<i class="fas fa-image"></i> ${fileElement.innerHTML}` 
        
    } else if (extension === 'xml') {
      fileElement.innerHTML = `<i class="fas fa-file-xml"></i> ${fileElement.innerHTML}`
    }

     else if (extension === 'pdf') {
      fileElement.innerHTML = `<i class="fas fa-file-pdf"></i> ${fileElement.innerHTML}`
    }

     else if (extension === 'jpg') {
      fileElement.innerHTML = `<i class="fas fa-file-upload"></i> ${fileElement.innerHTML}`
    }

    else if (extension === 'xml') {
      fileElement.innerHTML = `<i class="fas fa-file-alt"></i> ${fileElement.innerHTML}`
    }

    else if (extension === 'mp4') {
      fileElement.innerHTML = `<i class="fas fa-file-video"></i> ${fileElement.innerHTML}`
    }

    else if (extension === 'mov') {
      fileElement.innerHTML = `<i class="fas fa-file-audio"></i> ${fileElement.innerHTML}`
    }

    else if (extension === 'txt') {
      fileElement.innerHTML = `<i class="fas fa-file-word"></i> ${fileElement.innerHTML}`
    }

    else if (extension === 'css') {
      fileElement.innerHTML = `<i class="fas fa-file-code"></i> ${fileElement.innerHTML}`
    }

    else if (extension === 'zip') {
      fileElement.innerHTML = `<i class="fas fa-file-archive"></i> ${fileElement.innerHTML}`
    }

    
  })
  


  
}


