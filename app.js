const timeInMilliSeconds = ()=> {
    const currentTime = new Date().getTime()
    const currentTimeInMilliseconds = document.getElementById('milliSeconds')
    currentTimeInMilliseconds.innerHTML = currentTime
}

 timeInMilliSeconds()
 setInterval(timeInMilliSeconds, 100)
const currentDate = () => {
    const date = ('Thursday')
    const todaysDate = document.getElementById('date')
    todaysDate.innerHTML = date
}
currentDate()