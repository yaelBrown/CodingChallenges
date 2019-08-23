// 4. IP address question

function validIP(str) {
  var temp = str.split(".");
  var isValidIp = true;
  var tempEle = 0;
  
  var wasThereInvalid = true;
  
  function validOctet(str) {
    if (str === 0) {
      return false;
    }
    
    if (str <= 255) {
      return true;
    } else {
      return false;
    }
  }
  
  
  temp.forEach(function(e) {
    tempEle = parseInt(e);
    
    if (tempEle === 0) {
      isValidIp = false;
    }
    
    if (validOctet(tempEle)) {
      isValidIp = true;
    } else {
      isValidIp = false;
    };
    
    if (isValidIp === false) {
      wasThereInvalid = true;
    }
    
  })
   
  if (wasThereInvalid === true) {
    return false;
  } else {
    return true;
  }
}

console.log(validIP("0.0.0.123"));





// 5. Golomb Sequence 

function golombSequence(num) {
  var temp = []; 
  var repeatNumArr = [];
  
  for (var i = 0; i < num; i++) {
    temp.push(i + 1);
  }
  
  //   console.log(temp);
  
  temp.forEach(function(e, i) {
    for (var j = 0; j <= i; j++) {
      repeatNumArr.push(e);
    }
  })
  
  return repeatNumArr;
}

console.log(golombSequence(5));




