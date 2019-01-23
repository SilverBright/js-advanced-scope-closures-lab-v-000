function produceDrivingRange(blockRange) {
	return function (block1, block2) {
		//The parseInt() function parses a string and returns an integer
		let range = parseInt(block2) - parseInt(block1)

		if (range < blockRange) {
      		return `within range by ${blockRange - range}`
    		} else {
      		return `${range - blockRange} blocks out of range`
    	}
  	}
 }


function produceTipCalculator (percentageTip) {
  	return function(total) {
    	return total * percentageTip
  	}
}

function createDriver() {
    let driverId = 0;

    return class Driver {
        constructor(name) {
            this.id = ++ driverId;
            this.name = name;
        }
    }
}