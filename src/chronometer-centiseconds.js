class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback();
      }
    }, 10);
    }

  getMinutes() {
   return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return (this.currentTime / 100) % 60;
    }

  getCentiseconds() {
    return this.currentTime % 100  
}

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigitNumber = value.toString();
    if (twoDigitNumber.length === 1){
      return twoDigitNumber = '0' + twoDigitNumber;
    } else if (twoDigitNumber.length >= 2) {      
      return twoDigitNumber.slice(0,2)
    }
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let secondes = this.computeTwoDigitNumber(this.getSeconds());
    let centisecondes = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${secondes}.${centisecondes}`  
  }
}
