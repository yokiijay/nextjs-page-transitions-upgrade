import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import {
  routingVariants,
  indexImgVariants,
  textSlideinVariants,
  staggerVariants
} from '../../animation_config'
import { motion } from 'framer-motion'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import fetcher from '../../libs/fetcher'
import Layout from '../../components/Layout'
import Loading from '../../components/Loading'

const Product = props => {
  const router = useRouter()
  const URL = `http://my-json-server.typicode.com/wrongakram/demo/products/${router.query.id}/`
  const { data, error } = useSWR(URL, fetcher)

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
      <div className='fullscreen'>
        <div className='product'>
          <div className='img'>
            <motion.img
              variants={indexImgVariants}
              transition={{ delay: 0.2 }}
              key={data.image}
              src={data.image}
            />
          </div>
          <div className='product-details'>
            <motion.div variants={staggerVariants} className='inner'>
              <Link href='/'>
                <motion.div variants={textSlideinVariants}>
                  <a className='go-back'>Back to products</a>
                </motion.div>
              </Link>
              <motion.div variants={textSlideinVariants}>
                <span className='category'>Protein</span>
              </motion.div>
              <motion.h1 variants={textSlideinVariants}>{data.name}</motion.h1>
              <motion.p variants={textSlideinVariants}>{data.details}</motion.p>
              <motion.div variants={textSlideinVariants} className='additonals'>
                <span>Soy Free</span>
                <span>Gluten Free</span>
              </motion.div>
              <motion.div variants={textSlideinVariants} className='qty-price'>
                <div className='qty'>
                  <div className='minus'>-</div>
                  <div className='amount'>1</div>
                  <div className='add'>+</div>
                </div>
                <span className='price'>{data.price}</span>
              </motion.div>
              <motion.div variants={textSlideinVariants} className='btn-row'>
                <button className='add-to-cart'> Add to cart</button>
                <button className='subscribe'> Subscribe</button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Product.getInitialProps = async function(context) {
//   const { id } = context.query
//   const res = await fetch(
//     `http://my-json-server.typicode.com/wrongakram/demo/products/${id}`
//   )
//   const product = await res.json()
//   return { product }
// }

export default Product
