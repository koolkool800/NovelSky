import React from 'react'
import First from '../images/1.png'
import Second from '../images/2.png'
import Third from '../images/3.png'
import Fourth from '../images/4.png'
import Fifth from '../images/5.png'
import Image from 'next/image'
import styled from 'styled-components'
const FlexBlockImg = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:#1C1C1C;

`
const SmallDiv = styled.div`
padding:2rem 0.5rem;
`
const Para = styled.p`
text-align:center;
color:#fff;
`

const Listmanga = () => {
    return (
        <>
        <FlexBlockImg>
            <SmallDiv>
                <Image src={First} alt="pic" />
                <Para>The Gamer's System TGS</Para>
            </SmallDiv>
            <SmallDiv>
                <Image src={Second} alt="pic" />
                <Para>The Gamer's System TGS</Para>
            </SmallDiv>
            <SmallDiv>
                <Image src={Third} alt="pic" />
                <Para>The Gamer's System TGS</Para>
            </SmallDiv>
            <SmallDiv>
                <Image src={Fourth} alt="pic" />
                <Para>The Gamer's System TGS</Para>
            </SmallDiv>
            <SmallDiv>
                <Image src={Fifth} alt="pic" />
                <Para>The Gamer's System TGS</Para>
            </SmallDiv>
           
        </FlexBlockImg>
        </>
    )
}

export default Listmanga
