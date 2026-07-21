document.addEventListener('DOMContentLoaded', () => {
  // Parse MikroTik time format (e.g., "15m", "1h 30m 5s", "10s")
  const countdownEl = document.getElementById('countdown');
  
  if (countdownEl) {
    let mkTime = countdownEl.innerText.trim();
    
    // MikroTik variable $(session-time-left) sometimes has spaces or just text like "15m"
    // If it's empty, do nothing
    if (mkTime && mkTime.indexOf('$(') === -1) {
      let seconds = parseMkTime(mkTime);
      if (seconds > 0) {
        startCountdown(seconds, countdownEl);
      }
    }
  }

  function parseMkTime(mkStr) {
    let totalSeconds = 0;
    
    // Remove spaces
    mkStr = mkStr.replace(/\s/g, '');
    
    // Match hours, minutes, seconds (e.g. 1h, 15m, 30s)
    let hMatch = mkStr.match(/(\d+)h/);
    let mMatch = mkStr.match(/(\d+)m/);
    let sMatch = mkStr.match(/(\d+)s/);
    
    if (hMatch) totalSeconds += parseInt(hMatch[1]) * 3600;
    if (mMatch) totalSeconds += parseInt(mMatch[1]) * 60;
    if (sMatch) totalSeconds += parseInt(sMatch[1]);
    
    return totalSeconds;
  }

  function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    
    setInterval(function () {
      hours = parseInt(timer / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      if (hours > 0) {
        display.textContent = hours + ":" + minutes + ":" + seconds;
      } else {
        display.textContent = minutes + ":" + seconds;
      }

      if (--timer < 0) {
        timer = 0;
        // Optional: refresh page to trigger disconnect redirect
        window.location.reload();
      }
    }, 1000);
  }
});
