import * as React from "react"
import Header from '../components/Header'
import Hero from '../components/Hero'
import LogoBar from '../components/LogoBar'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header></Header>
      <Hero></Hero>
      <LogoBar />
    </main>
  )
}

export default IndexPage
