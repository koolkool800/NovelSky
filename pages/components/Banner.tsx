import Image from 'next/image'
import React from 'react'
import Thumbnail from '../images/Thumbnail.png'
import styled from 'styled-components'
import Chapter from '../images/Chapters.png'
import Viewer from '../images/Vector.png'
import { Containimg } from './Navbar.element'

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:black;
@media (max-width: 900px) {
    flex-direction:column;
    padding-left:0;
}

`
const Containspan = styled.div`
padding-bottom: 1.5rem;
`

const Containimg2 = styled.div`
width:100%;
padding-top:2rem;
padding-right:4rem;
display:flex;   
justify-content:flex-end;
align-items:center;
@media (max-width: 900px) {
    padding-right:0;
    max-width:100%;
    justify-content:center;
}
`
const ContainContent = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
color:#fff;
width:100%;
@media (max-width: 900px) {
    flex-direction:column;
    align-items:center;
    
}
`
const Heading = styled.h1`
font-size:2.5rem;
@media (max-width: 687px) {
   font-size:1.5rem;
    
}
`
const Span = styled.button`
padding:0.25rem 0.75rem; 
background:#34140D;
color:#D02810;
margin-right:1rem;
text-align:center;
border-radius:20px;
border:none;
`

const Containimg3 = styled(Containimg)`
display:flex;
height:1rem;
justify-content:center;
align-items:center;
`
const Para = styled.p`
padding-left:5px;
font-weight:500;
`
const Button = styled.button`
width:35%;
border-radius:20px;
border:none;
color:#fff;
background:#FA3109;
padding: 0.5rem 2rem;
font-size:1rem;
max-width:100%;
@media (max-width: 600px) {
    width:50%;
}
`

const ParaGraph = styled.p`
font-size:16px;
font-weight:350;
color:#FFFFFF;
line-height:1.25rem;
padding-top:0.25rem;
padding-bottom:0.5rem;
@media (max-width: 600px) {
    font-size:14px;
}
`
const Contain = styled.div`
padding-right:6rem;
@media (max-width: 1100px) {
padding-right:4rem;
    
}
@media (max-width: 1050px) {
padding-right:2rem;
    
}
@media (max-width: 900px) {
padding:0 4rem;
    
}
`

const ContainSpan = styled.div`
display:flex;

`

const Banner = () => {
    return (
        <>
        <div>

            <Container >
                <Containimg2>
                    <Image  src={Thumbnail} alt="banner-img"  />
                </Containimg2>
                <Contain>

                
                <ContainContent>
                    <Heading >Genius Mage in a Cultivation World</Heading>
                    <Containspan style={{display:'flex'}}>
                        <Containimg3>
                            <Image src={Chapter} alt="chapter"  />
                        <Para>12 chương</Para>

                        </Containimg3>
                        <Containimg3>
                            <Image src={Viewer} alt="watch"  />
                        <Para>1k views</Para>

                        </Containimg3>
                    </Containspan>
                    <ContainSpan>
                        <Span>Drama</Span>
                        <Span>Fanstastic</Span>
                        <Span>Romance</Span>
                    </ContainSpan>
                    <div>
                        <ParaGraph>
                        Layn's life was relatively simple. Married to a princess, working as the top archmage of the country... Everything would be great if he never learned that his wife was actually cheating on him!
                        </ParaGraph>
                        <ParaGraph>
                        Instead of getting his revenge, he put up with the humiliation. For three long years. Three long years he needed to prepare for what would go down in the annals of history as the greatest revenge ever!
                        </ParaGraph>
                    </div>
                   <Button>
                       Đọc ngay &#8594;
                   </Button>
                   
                </ContainContent>
                </Contain>
            </Container>
            <div>
   
            </div>
        </div>

        </>
    )
}

export default Banner
