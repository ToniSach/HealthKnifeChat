var socket = io.connect('http://localhost:3000/', { 'forceNew': true });
//escuchamos el evento messages
// data tendr� el array de mensajes  que env�a el servidor
socket.on('messages', function(data) {  
  //console.log(data);
  render(data);
})
// esta funci�n se encarga de pintar en el HTML los mensajes
function render (data) {  
  var html = data.map(function(elem, index) {
    return(`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
            </div>`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;

  document.getElementById('texto').value = '';

}

function addMessage(e) {  

  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', message);
  return false;
}