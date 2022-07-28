class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => { 
      this.currentTime+=1; // elle augmente d'une seconde conte +1 chaque seconde
      setInterval(printTimeCallback, 1000)
     // if (PrintTimeCallback){
       // printTimeCallback();
      // } 
    }, 1000); // toutes les unes secondes
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
