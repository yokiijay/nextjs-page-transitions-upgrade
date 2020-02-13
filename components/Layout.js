/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { motion } from 'framer-motion'

export default function Layout({ children, ...props }){
  return(
    <motion.div {...props}>
      <Global styles={css`
        html, body {
          margin: 0;
          background: whitesmoke;
        }
      `} />
      <div css={css`
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
      `}>
        {children}
      </div>
    </motion.div>
  )
}
