import Image from 'next/image'
import React from 'react'
import Thumbnail from '../images/Thumbnail.png'
import styled from 'styled-components'
import Chapter from '../images/Chapters.png'
import Viewer from '../images/Vector.png'
import { Containimg } from './Navbar.element'
const Container = styled.div`
padding: 4rem 10rem;
display:flex;
justify-content: space-between;
background:grey;

`

const Containimg2 = styled.div`
width:100%;
padding-left:4rem;
padding-right:0;
`
const ContainContent = styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
padding-right:4rem;

`
const Heading = styled.h1`
font-size:2.5rem;
`
const Span = styled.button`
padding:0.25rem 0.75rem; 
background:#34140D;
color:#D02810;
margin-right:1rem;
text-align:center;
border-radius:10px;
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
`
const Banner = () => {
    return (
        <>
            <Container >
                <Containimg2>
                    <Image  src={Thumbnail} alt="banner-img"  />
                </Containimg2>
                <ContainContent>
                    <Heading >Genius Mage in a Cultivation World</Heading>
                    <div style={{display:'flex'}}>
                        <Containimg3>
                            <Image src={Chapter} alt="chapter"  />
                        <Para>12 chương</Para>

                        </Containimg3>
                        <Containimg3>
                            <Image src={Viewer} alt="watch"  />
                        <Para>1k views</Para>

                        </Containimg3>
                    </div>
                    <div>
                        <Span>Drama</Span>
                        <Span>Fanstastic</Span>
                        <Span>Romance</Span>
                    </div>
                    <div>
                        <p>
                        Layn's life was relatively simple. Married to a princess, working as the top archmage of the country... Everything would be great if he never learned that his wife was actually cheating on him!
                        </p>
                        <p>
                        Instead of getting his revenge, he put up with the humiliation. For three long years. Three long years he needed to prepare for what would go down in the annals of history as the greatest revenge ever!
                        </p>
                    </div>
                    <button >
                    Đọc ngay
                    </button>
                   
                </ContainContent>
            </Container>
            <div>
   
            </div>
        </>
    )
}

export default Banner
