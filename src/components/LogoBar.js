import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { bubble as Menu } from 'react-burger-menu'

import Img from 'gatsby-image'
import styled from 'styled-components'

const LogoBarContainer = styled.div`
    height: calc(100vh - 70vh - 130px);
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogoContainer = styled.div`
    width: 200px;
    margin: 0 20px;
`

const LogoBar = (props) => {

    const data = useStaticQuery(graphql`
    query {
      sub1: file(relativePath: { eq: "logo-ecom.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub2: file(relativePath: { eq: "History-Two.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub3: file(relativePath: { eq: "History-Three.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
        <LogoBarContainer>
            <h1 className="">Trusted by hundreds of companies</h1>
            <LogoContainer>
                <Img className="" fluid={data.sub1.childImageSharp.fluid} alt="" />
            </LogoContainer>
            <LogoContainer>
                <Img className="" fluid={data.sub1.childImageSharp.fluid} alt="" />
            </LogoContainer>
            <LogoContainer>
                <Img className="" fluid={data.sub1.childImageSharp.fluid} alt="" />
            </LogoContainer>
            <LogoContainer>
                <Img className="" fluid={data.sub1.childImageSharp.fluid} alt="" />
            </LogoContainer>
            <LogoContainer>
                <Img className="" fluid={data.sub1.childImageSharp.fluid} alt="" />
            </LogoContainer>
        </LogoBarContainer>
    </>
  ) 
}


export default LogoBar