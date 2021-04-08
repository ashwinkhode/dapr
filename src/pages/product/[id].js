import {useRouter} from 'next/router'
import useSWR from 'swr'

import {server} from '../../../config'

import ProductDetails from '../../components/ProductDetails/ProductDetails'

const fetchCall = async (data, id) => {

    const result = await (async (item) => {
        for (let i = 0; i < item.length; i++) {
            const isEqual = (await item[i].id) === parseInt(id)
            if (isEqual) return await item[i];
            if (isEqual) break;
        }
    })(data);

    return result
};

const generatePaths = async (array) => {

    const pArray = array.map(async value => {
        return {params: {id: await value.id.toString()}}
    })
    const rArray = await Promise.all(pArray)

    return rArray
}

export const getStaticProps = async (context) => {

    const {id} = await context.params
    const data = await fetch(server)
    const array = await data.json()
    const result = await fetchCall(array, id)

    return {
        props: {
            product: await result
        }
    }
}

export const getStaticPaths = async () => {

    const res = await fetch(server)
    const data = await res.json()
    const result = await generatePaths(data)

    return {
        paths: result,
        fallback: false
    }
}

const Product = ({product}) => {

    // * Client side fetching of product details
    //  const products = []
    //  if(!product)
    // try {
    //     fetch(server)
    //         .then(res => res.json())
    //         .then(res => res.find(item => item.id === parseInt(id)))
    //         .then(res => console.log(res))
    //         .then(res => res.forEach((item) => products.push(item)))
    // }
    // catch (err) {
    //     console.log(err)
    // }

    // const fetchedProduct = products.find(item => item.id === parseInt(id))

    return (
        <div className='w-[80vw] mx-auto'>
            <ProductDetails product={product} />
        </div>
    )

}

export default Product