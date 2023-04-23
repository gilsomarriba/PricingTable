function updateTimer() {
    future = Date.parse("jun 22, 2024 01:00:00");
    now = new Date();
    diff = future - now;
  
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    secs = Math.floor((diff % (1000 * 60)) / 1000);
  
    timeStr = ('000' + days).slice(-3) + ' : ' +
              ('00' + hours).slice(-2) + ' : ' +
              ('00' + mins).slice(-2) + ' : ' +
              ('00' + secs).slice(-2);
  
    document.getElementById("timer").innerHTML = timeStr;
  }
  setInterval(updateTimer, 1000);