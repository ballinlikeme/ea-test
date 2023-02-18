document.addEventListener('DOMContentLoaded', () => {
     const button = document.getElementById('submit')
     const input = document.getElementById('email')

     const modal = document.getElementById('modal')
     const modalError = document.getElementById('modal-error')
     const errModalText = document.getElementById('err-modal-text')

     const closeBtns = [...document.getElementsByClassName('close-modal')]

     const closeModal = () => {
          modal.classList.remove('active')
          modalError.classList.remove('active')
     }

     input.oninput = () => {
          
          input.checkValidity() 
               ? button.disabled = false 
               : button.disabled = true

     }

     button.onclick = async () => {
          if (!button.disabled) {
               const email = input.value
               if (email === '') {
                    return
               }
               try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/', {
                         method: "POST",
                         body: JSON.stringify({email})
                    }) // Фейк апи вернет 404 статус код
                    input.value = ''
                    // if (response.status !== 200) throw new Error('Something went wrong')
                    modal.classList.add('active')
               } catch (error) {
                    modalError.classList.add('active')
                    errModalText.textContent = error.message
               }
          }
     }

     closeBtns.forEach(btn => btn.onclick = closeModal)

})