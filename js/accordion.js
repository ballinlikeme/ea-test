document.addEventListener('DOMContentLoaded', () => {
     const items = [...document.getElementsByClassName('events__item')]
     const enums = [...document.getElementsByClassName('item__header')]

     console.log(enums)

     enums.forEach(elem => {
          elem.onclick = () => {
               if (elem.parentElement.classList.contains('active')) return
               items.forEach(item => {
                    if (item.classList.contains('active')) {
                         item.classList.remove('active')
                         elem.parentElement.classList.add('active')
                    }
               })
               
          }
     })
})