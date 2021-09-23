var modal =  document.getElementById("Modal");
var modalInput =  document.getElementById("ModalInput");

modal.addEventListener('show.bs.modal', function(){
    modalInput.focus();
})