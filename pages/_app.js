// import React from "react"
// import App from "next/app"
// import "../styles.scss"

// class MyApp extends App {
//   render() {
//     const { Component, pageProps, router } = this.props

//     return <Component {...pageProps} key={router.route} />
//   }
// }

// export default MyApp

import "../styles.scss"
import { AnimatePresence } from "framer-motion"

export default function ({ Component, pageProps, router }){

  return(
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}