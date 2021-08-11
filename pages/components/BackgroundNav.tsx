import styled from 'styled-components'
import React from 'react'
import Image from 'next/image'
import Thumbnail from '../images/Thumbnail.png'
const ContainImg = styled.div`
  background-image: url("Thumbnail.png");
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  /* Full height */
  height: 100%; 
  /* Center and scale the image nicely */
  background-repeat: no-repeat;
  background-size: cover;
`

const BackgroundNav = () => {
    return (
        <ContainImg>
        </ContainImg>
    )
}

export default BackgroundNav
