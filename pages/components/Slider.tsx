import React from 'react'
import First from '../images/1.png'
import Second from '../images/2.png'
import Third from '../images/3.png'
import Fourth from '../images/4.png'
import Fifth from '../images/5.png'
import Image from 'next/image'
import styled from 'styled-components'
import Arrleft from '../images/arrowleft.png'
import Arrright from '../images/arrright.png'
const FlexBlockImg = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:black;

`

const Noibat = styled(FlexBlockImg)`
color:#fff;
`

const SmallDiv = styled.div`
padding:2rem 0.5rem;
`
const Para = styled.p`
text-align:center;
color:#fff;
`
const Divarrowleft = styled.div`
padding-right:0.5rem;
`
const Divarrowright = styled.div`
padding-left:0.5rem;
`
const Div = styled.div`
background:black;
height:100%;
width:100%;
`


const Slider = () => {
    return (
        <>
            <Noibat>
            <p>Truyện nổi bật hàng tuần</p>
                
            </Noibat>
            <FlexBlockImg>
            <Divarrowleft>
                <Image src={Arrleft} alt="array" />
            </Divarrowleft>
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
            <Divarrowright>
                <Image src={Arrright} alt="array" />
            </Divarrowright>
           
        </FlexBlockImg>
        </>
    )
}

export default Slider
