class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === 'function'){
        printTimeCallback();
      }
    }, 1000);
    }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value <= 9){
      return `0${value}`;
    } return `${value}`;
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
return `${minutes}:${secondes}`
  }
}
