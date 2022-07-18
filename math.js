function mean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce((acc,curr) => {
        return acc + curr;
    }) / nums.length;
}

function median(nums){
    nums.sort((a,b) => a - b);

    let middleIdx = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) { 
        median = (nums[middleIdx] + nums[middleIdx - 1])/2;
    } else {
        median = nums[middleIdx];
    }
    return median
}

function frequencyCounter(arr){
    return arr.reduce((acc,next) =>{
        acc[next] = (acc[next] || + 1) + 1;
        return acc;
    }, {});
} 

function mode(arr){
    let freqCounter = frequencyCounter(arr);

    let count = 0;
    let most;
    
    for(let key in most) {
        if (freqCounter[key] > count){
            most = key;
            count = freqCounter[key];
        }
    }
}

function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
}

module.exports = {
    frequencyCounter,
    mean,
    median,
    mode,
    convertAndValidateNumsArray
  };
  