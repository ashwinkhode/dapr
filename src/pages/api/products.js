// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {

  const fetchData = await fetch('https://fakestoreapi.com/products')
  const response = await fetchData.json()

  res.status(200).json(response)
}
