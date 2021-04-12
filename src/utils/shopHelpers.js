export function getSortedData(dataArray, sortMethod) {
  switch (sortMethod) {
    case "lowHigh":
      return dataArray.sort((a, b) => a.price - b.price)
    case "highLow":
      return dataArray.sort((a, b) => b.price - a.price)
    default:
      return dataArray
  }
}

const removeDuplicates = (arr) => arr.reduce((acc, current) => {
  const x = acc.find(item => item.id === current.id);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);

// ! This logic is bizarre
export function getFilteredData(dataArray, filters) {

  const appliedFilters = Object.entries(filters)
  // const in_stock = (product) => product.outofstock === false
  const men_clothing = dataArray.filter((product) => product.category === 'men clothing')
  const women_clothing = dataArray.filter((product) => product.category === 'women clothing')
  const jewelery = dataArray.filter((product) => product.category === 'jewelery')
  const electronics = dataArray.filter((product) => product.category === 'electronics')

  const filteredArray = appliedFilters.reduce((acc, filter) => {
    const filteredProducts = eval(filter[0])
    if (filter[1])
      return acc.concat(filteredProducts)
    return acc
  }, [])

  const output = (filteredArray)

  if (output.length !== 0) return output

  return dataArray

}