const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {
    //Check if the item should be counted based on 'itemsToCount'.
    if (itemsToCount[item]) {
    // If the item is not in 'results', initialize it with a count of 1; otherwise, increment the count.
      !results[item] ? results[item] = 1 : results[item] += 1;
    }
  }
  return results;
};

module.exports = countOnly;