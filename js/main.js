;(function () {
  'use strict'
  window.addEventListener(
    'load',
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          'submit',
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          },
          false
        )
      })
    },
    false
  )
})()

const elem = document.getElementById('reservation-dates')
const rangepicker = new DateRangePicker(elem, {
  // Change date format
  format: 'yyyy-mm-dd',
})


function notifyAlert(text, type) {
  notie.alert({
    type,
    text,
  })
}

function notifyModal(title, text, icon, button) {
  swal({
    title,
    text,
    icon,
    button
  });
}


document.getElementById("colorButton").addEventListener("click",() => {
  // notifyAlert("This is a message", "success")
  notifyModal("Title","Hello", "success","All good!")
  
})


// function errorAlert(msg) {
//   notie.alert({
//     type: "error",
//     text: msg,
    
//   })
// }


// function warningAlert(msg) {
//   notie.alert({
//     type: "warning",
//     text: msg,
    
//   })
// }
