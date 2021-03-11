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

function notifyModal(title, text, icon, confirmButtonText) {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  })
}

document.getElementById('colorButton').addEventListener('click', () => {
  // notifyAlert("This is a message", "success")
  // notifyModal('Title', 'Hello', 'success', 'All good!')
  // attention.toast({ title: 'Hello world', icon: 'error' })
  attention.error({ title: 'Oops!' })
  // console.log(myModule()["success"]())
})

const attention = myModule()

// myModule encloses other functions, toast, success...
// if we imagine toast or success were thousands of lines of code
// now we can access these using the var attention above
function myModule() {
  const toast = (c) => {
    // c will be overwritten by the const {} below, i.e. if is c is not specified
    // we use the default values below
    const { title = '', icon = 'success', position = 'top-end' } = c

    const Toast = Swal.mixin({
      toast: true,
      // using the values above
      title,
      position,
      icon,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    })
    // Run
    Toast.fire({})
  }

  const success = (c) => {
    const { title = '', icon = 'success', text = '', footer = '' } = c
    Swal.fire({
      icon,
      title,
      text,
      footer,
    })
  }

  const error = (c) => {
    const { title = '', icon = 'error', text = '', footer = '' } = c
    Swal.fire({
      icon,
      title,
      text,
      footer,
    })
  }


  return {
    toast,
    success,
    error
  }
}
