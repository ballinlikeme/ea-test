window.addEventListener("DOMContentLoaded", () => {

     const daysField = document.getElementById('days')
     const hoursField = document.getElementById('hours')
     const minutesField = document.getElementById('minutes')
     const secondsField = document.getElementById('seconds')

     const daysLabel = document.getElementById('days-label')
     const hoursLabel = document.getElementById('hours-label')
     const minutesLabel = document.getElementById('minutes-label')
     const secondsLabel = document.getElementById('seconds-label')

     window.onresize = () => {
          if (window.innerWidth <= 768) {
               daysLabel.textContent = "DD"
               hoursLabel.textContent = "HH"
               minutesLabel.textContent = "MM"
               secondsLabel.textContent = "SS"
          } else {
               daysLabel.textContent = "Days"
               hoursLabel.textContent = "Hours"
               minutesLabel.textContent = "Minutes"
               secondsLabel.textContent = "Seconds"
          }
     }

     const endDate = {
          year: "2023",
          month: "05",
          day: "31",
          hours: "00",
          minutes: "00",
          seconds: "00",
     }

     const endDateString = `${endDate.year}-${endDate.month}-${endDate.day}T${endDate.hours}:${endDate.minutes}:${endDate.seconds}`;

     let timer = setInterval(() => {
          const now = new Date()
          const date = new Date(endDateString)
          const left = date - now
          if (left <= 0) return clearInterval(timer)
          const result = new Date(left)
          const monthsLeft = result.getUTCMonth()
          let daysLeft = result.getUTCDate() - 1
          let hoursLeft = result.getUTCHours()
          let minutesLeft = result.getUTCMinutes()
          let secondsLeft = result.getUTCSeconds()

          if (monthsLeft > 0) {
               
               const currentMonth = new Date().getMonth()
               const currentYear = new Date().getFullYear()

               for (let i = 1; i <= monthsLeft; i++) {
                    daysLeft += new Date(currentYear, currentMonth + i, 0).getDate()
               }
          }

          daysField.textContent = daysLeft < 10 ? `0${daysLeft}` : daysLeft 
          hoursField.textContent = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft
          minutesField.textContent = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft
          secondsField.textContent = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
     }, 1000)
})