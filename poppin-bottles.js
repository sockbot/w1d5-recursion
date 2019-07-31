let bottleCount = 0;
let emptyCount = 0;
let capCount = 0;

const countBottles = function(money, emptyBottles, bottleCaps) {
  if ((money < 2) && (emptyBottles < 2) && (bottleCaps < 4)) {
    console.log('FINAL BOTTLECOUNT:', bottleCount);
    console.log("type of bottle cound", typeof bottleCount);
    return bottleCount;
  } else {
    // count the number of new full bottles
    let bottlesFromMoney = Math.floor(money / 2);
    let bottlesFromEmpties = Math.floor(emptyBottles / 2);
    let bottlesFromCaps = Math.floor(bottleCaps / 4);
    let newBottles = bottlesFromMoney + bottlesFromEmpties + bottlesFromCaps;
    bottleCount += newBottles;

    // calculate unused money, empties, and caps
    let unusedMoney = money - (bottlesFromMoney * 2);
    let unusedEmpties = emptyBottles - (bottlesFromEmpties * 2);
    let unusedCaps = bottleCaps - (bottlesFromCaps * 4);

    console.log("New bottles:", newBottles);
    console.log("Empties count:", emptyBottles);
    console.log("Caps count:", bottleCaps);
    console.log("Running bottle count:", bottleCount);
    console.log("------------------------------");
    // count new bottles with output
    let emptiesOutput = newBottles;
    let capsOutput = newBottles;
    return countBottles(unusedMoney, emptiesOutput + unusedEmpties, capsOutput + unusedCaps);
  }
};

module.exports = countBottles;