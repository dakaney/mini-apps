button.addEventListener('click', post);

function post (e) {
  e.preventDefault();
  let message = textarea.value;
  let callback = function (data) {
    body.textContent = data;
  }
  $.ajax({
  type: "POST",
  url: '/',
  contentType: "application/json",
  dataType: "json",
  data: message,
  success: function(data){
  	callback(JSON.stringify(data));
  }
  })
}

