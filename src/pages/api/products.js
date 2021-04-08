// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dataModifer = async (array) => {

  const pArray = array.map(async value => {
    return {...value, mrp: Math.floor(await value.price + Math.random() * 100)}
  })
  const rArray = await Promise.all(pArray)

  return rArray
}

export default async (req, res) => {

  const fetchData = await fetch('https://fakestoreapi.com/products')
  const response = await fetchData.json()
  const result = await dataModifer(response)

  res.status(200).json(result)
}
