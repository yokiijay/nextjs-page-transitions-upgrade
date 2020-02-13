import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { motion } from 'framer-motion'
import {
  routingVariants,
  indexCardVariants,
  staggerVariants,
  indexImgVariants
} from '../animation_config'
import useSWR from 'swr'
import fetcher from '../libs/fetcher'
import Layout from '../components/Layout'
import Loading from '../components/Loading'

const Index = props => {
  const { data, error } = useSWR(
    'http://my-json-server.typicode.com/wrongakram/demo/products/',
    fetcher
  )

  if (error) return <h1>ERROR</h1>
  if (!data)
    return (
      <Layout
        variants={routingVariants}
        initial='in'
        animate='center'
        exit='out'
      >
        <Loading />
      </Layout>
    )

  return (
    <motion.div
      variants={routingVariants}
      initial='in'
      animate='center'
      exit='out'
    >
      <div className='container center'>
        <div className='title'>
          <h1>Select a protein</h1>
        </div>
        <motion.div className='product-row' variants={staggerVariants}>
          {data.map(product => (
            <Link
              key={product.id}
              href='/products/[id]'
              as={`/products/${product.id}`}
            >
              <motion.div className='card' variants={indexCardVariants}>
                <span className='category'>Protein</span>
                <motion.img
                  variants={indexImgVariants}
                  transition={{ delay: 0.2 }}
                  key={product.image}
                  src={product.image}
                  width={250}
                />
                <div className='product-info'>
                  <h4>{product.name}</h4>
                  <span>{product.price}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

// Index.getInitialProps = async function() {
//   const res = await fetch(
//     'http://my-json-server.typicode.com/wrongakram/demo/products'
//   )
//   const data = await res.json()
//   return {
//     products: data
//   }
// }

export default Index
