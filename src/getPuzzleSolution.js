const _ = require("lodash");

var getPuzzuleSolution = (original, hopedResult, maxState, val = 1) => {
  var maxLength = original.length;
  var result;
  var calcOriginal = (original, calcArr) => {
    var tmp = _.cloneDeep(original);
    tmp.map((item, index) => {
      item.nodeTo.map((item2) => {
        tmp[item2].value += val * calcArr[index];
        tmp[item2].value = tmp[item2].value % 3;
      });
    });
    tmp = tmp.map((item) => item.value);
    return tmp;
  };

  var getAllPossibleShortestSolution = (maxState, maxLength) => {
    var resultArray = [];
    for (let i = 0; i < Math.pow(maxState, maxLength); i++) {
      var result = [];
      var nextNum = i;
      for (let j = maxLength - 1; j >= 0; j--) {
        result.push(parseInt(nextNum / Math.pow(maxState, j)));
        nextNum = i % Math.pow(maxState, j);
      }
      (resultArray[
        result.reduce((sum, current) => sum + current)
      ] = resultArray[result.reduce((sum, current) => sum + current)]
        ? resultArray[result.reduce((sum, current) => sum + current)]
        : []).push(result);
    }
    return resultArray;
  };
  var a = getAllPossibleShortestSolution(maxState, maxLength);

  getAllPossibleShortestSolution(maxState, maxLength).find((item) => {
    result = item.find((item2) => {
      var a = calcOriginal(original, item2);
      return calcOriginal(original, item2) == hopedResult;
    });
    return result;
  });

  return result;
};
var original = [
  {
    value: 0,
    nodeTo: [0, 1, 2],
  },
  {
    value: 1,
    nodeTo: [0, 1],
  },
  {
    value: 2,
    nodeTo: [0, 2],
  },
];

var hopedResult = [2, 2, 2];
var maxState = 3;
var val = 1;
console.log(getPuzzuleSolution(original, hopedResult, maxState));
