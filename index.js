function produceDrivingRange(range) {
  return function(start, end){
    let distance = (Math.abs(parseInt(end) - parseInt(start)));
    let rangeDiff = Math.abs(range - distance);

    if (distance < range) {
      return `within range by ${rangeDiff}`;
    } else {
      return `${rangeDiff} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return tip * fare;
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
