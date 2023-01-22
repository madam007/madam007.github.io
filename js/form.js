const scriptURL = 'https://script.google.com/macros/s/AKfycby7CgLrnojD-eINAHkmGDgCxykBDRbzy82PxDRWfJMVOtEcGlwPK27d40VrjdXpVWwj/exec'
const form = document.forms['submit-to-google-sheet']
const btnkirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const succes = document.querySelector('.alert');
// DOM
form.addEventListener('submit', e => {
  e.preventDefault()
  //ketika tombol submit di klik
  
  // tampilkan tombol loading hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnkirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // tampilkan tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnkirim.classList.toggle('d-none');
        //tampilkan alert
        succes.classList.toggle('d-none');
        //riset forum
        form.reset();
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})


