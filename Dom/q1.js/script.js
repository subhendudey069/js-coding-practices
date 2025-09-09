console.log('Js script loaded')


//Input form and live preview using dom 
const form = document.querySelector('.form1')
const emailInput = document.querySelector('.email')
const passInput = document.querySelector('.password')
const submitBtn = document.querySelector('.submit-button')
const resetBtn = document.querySelector('.reset-button')
const previewBtn = document.querySelector('.preview-button')
const showPassButton = document.querySelector('.show-password')

const emailPreview = document.querySelector('.email-preview')
const passPreview = document.querySelector('.password-preview')
const previewContainer = document.querySelector('.form-preview')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    alert(`Email: ${emailInput.value} Password: ${passInput.value}`)
})

emailInput.addEventListener('input',()=>{
    emailPreview.innerText = `Email: ${emailInput.value}`
})

passInput.addEventListener('input',()=>{
    passPreview.innerText = `Password: ${passInput.value}`
})

previewBtn.addEventListener('click',()=>{
    previewContainer.classList.toggle('hide-form-preview')
})

showPassButton.addEventListener('click',(e)=>{
    passInput.getAttribute('type') === 'text' ? passInput.setAttribute('type','password') : passInput.setAttribute('type','text')
    e.target.innerText = passInput.getAttribute('type') === 'text' ?  'Hide Pass'  : 'Show Pass'
})