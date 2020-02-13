export const routingVariants = {
  in: {
    opacity: 0
  },
  center: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
}

export const staggerVariants = {
  center: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const indexCardVariants = {
  in: {
    y: 100
  },
  center: {
    y: 0
  }
}

export const indexImgVariants = {
  in: {
    x: 50,
    scale: .95,
    opacity: 0
  },
  center: {
    x: 0,
    scale: 1,
    opacity: 1
  }
}

export const textSlideinVariants = {
  in: {
    y: 30,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1,
  },
  transition: {
    type: 'tween',
    ease: 'easeInOut'
  }
}
