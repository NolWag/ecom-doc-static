import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { bubble as Menu } from 'react-burger-menu'

import Img from 'gatsby-image'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  width: 120px;
  @media (min-width: 768px) {
    width: 200px;
  }
  @media (min-width: 1280px) {
    width: 240px;
  }
`

export const menuConfig = {
    bmBurgerButton: {
      position: 'fixed',
      width: '40px',
      height: '40px',
      left: '0px',
      top: '0px',
    },
    bmBurgerBars: {
      background: '#718096',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  }

const Header = () => {

  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "logo-ecom.png" }) {
      childImageSharp {
        fluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`)
  return (
    <>
          

      <div className=''>
        <Menu styles={menuConfig}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a className="menu-item--small" href="/">Settings</a>
        </Menu>
      </div>

        <div className="flex justify-between p-4 mx-48">
        <LogoWrapper>
          <Img fluid={data.file.childImageSharp.fluid} alt="A corgi smiling happily" />
        </LogoWrapper>
        <div className="self-center">
            <ul className="flex">
                <li className="mx-4">Home</li>
                <li className="mx-4">Home</li>
                <li className="mx-4">Home</li>
                <li className="mx-4">Home</li>
            </ul>
        </div>
      </div>
    </>
  ) 
}


export default Header