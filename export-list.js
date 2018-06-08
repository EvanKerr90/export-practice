var list = []


 var sortNumbers = function(a, b) {
  return (a - b);
}
  module.exports.storeList = function() {
    for (i = 0; i < arguments.length; i++)
    list.push(arguments[i])
  console.log(list)
  }
  module.exports.sortedList = function() {
  return list.sort(sortNumbers);
  }




