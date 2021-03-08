import React from 'react'

import styled from 'styled-components'

const PrimaryButton = styled.button `
font-size: 16px;
font-weight: 400;
text-transform: uppercase;
letter-spacing: .5px;
fill: #242F65;
color: #242F65;
background-color: #FFF;
border-style: solid;
border-width: 1px 1px 1px 1px;
border-color: #FFF;
border-radius: 20px 20px 20px 0;
padding: 16px 30px 16px 30px;
background-color: #fff;
transition: .4s;
margin: 20px;
&:hover {
    color: #FFF;
    background-color: #FFF0;
}
`

const Button = (props) => {

  return (
    <>
        <PrimaryButton className="">
            {props.btnText}
        </PrimaryButton>
    </>
  ) 
}


export default Button