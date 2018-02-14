button.addEventListener('click', post);

function post (e) {
  e.preventDefault();
  if (typeof JSON.parse(textarea.value) !== 'object'){
  	return;
  }
  if (typeof JSON.parse(textarea.value) === 'object'){
    let message = textarea.value;
    let callback = function (data) {
  	  $('#body').empty();
      data.forEach(item => {
        $('#body').append('<div>' + item + '</div>');
      })
    }
    $.ajax({
    type: "POST",
    url: '/',
    contentType: "application/json",
    dataType: "json",
    data: message,
    success: function(data){
  	  callback(data);
    }
    })
  }
}
