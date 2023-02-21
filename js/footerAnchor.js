document.addEventListener('DOMContentLoaded', () => {
     const footerLink = document.getElementById('footer-link')

     footerLink.onclick = () => {
          footerLink.classList.toggle('active')
     }
})