import '../scss/style.scss'

function updateTime() {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  if (hours < 10) hours = '0' + hours
  if (minutes < 10) minutes = '0' + minutes
  if (seconds< 10) seconds = '0' + seconds
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`
}

setInterval(updateTime, 1000)