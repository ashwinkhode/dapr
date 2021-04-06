import Head from 'next/head'

const SEO = ({
    description = "Online Shopping Site for Fashion & Lifestyle in India. Buy Shoes, Clothing, Accessories and lifestyle products for women & men. Best Online Fashion Store * COD* Easy returns and exchanges*",
    pageTitle = "Dapr | Online Clothing Store",
    siteTitle = "Dapr - Online Clothing Store"
}) => {
    const title = `${pageTitle} - Shop for clothes, shoes, Bags, watches @ dapr.vercel.app`
    return (
        <Head>
            <title>{`${title} | ${siteTitle}`}</title>
            <link rel="icon" href="/favicon.png" />
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:url" content="https://dapr.vercel.app/" />
            <meta property="og:image" content="https://dapr.vercel.app/banner.png" />
            <meta name="keywords" content="shop online, online shopping, online shopping in india, online shopping india, shop online india, shop online in india mens clothing, womens apparel, kids"></meta>
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:creator" content="@ashwin4real" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </Head>
    )
}

export default SEO