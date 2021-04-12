// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dataModifer = async (array) => {

  // ! Hard coding bc I am exhausted. Will right better solution later
  const idChecker = async (id) => await id === 4 || await id === 8 || await id === 12 || await id === 16 || await id === 20

  const pArray = array.map(async value => {
    return {
      ...value,
      mrp: Math.floor(await value.price + Math.random() * 100),
      outofstock: await idChecker(value.id)
    }
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
