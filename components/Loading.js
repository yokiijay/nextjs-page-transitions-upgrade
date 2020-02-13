import { motion } from 'framer-motion'
import styled from '@emotion/styled'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: .05
    }
  }
}

const childrenVariants = {
  animate: {
    y: [30, -30],
  }
}

const childrenTransition = {
  yoyo: Infinity,
  ease: 'easeOut',
  duration: .6
}

export default function Loading() {
  return (
    <motion.div
      css={css`
        display: flex;
      `}
      variants={containerVariants}
      animate='animate'
    >
      {[...Array(3)].map((item, i) => (
        <StyledDot
          key={i}
          variants={childrenVariants}
          transition={childrenTransition}
        />
      ))}
    </motion.div>
  )
}

const StyledDot = styled(motion.div)`
  padding: 20px;
  margin: 10px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
`
