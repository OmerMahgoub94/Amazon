import Header from '../components/Header'
import Head from 'next/head'
import Banner from '../components/Banner'
import 'react-responsive-carousel/lib/styles/Carousel.css'
import ProductFeed from '../components/ProductFeed'
<link rel="stylesheet" href="carousel.css" />


export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto" >
        {/* Banner */}
        <Banner />


        {/* Product Feed */}
        <ProductFeed products={products} />

      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json());

  console.log(products)


  return {
    props: {
      products,
    }
  }
}
