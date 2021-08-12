import React from 'react'
import Search from '../images/search.png'
import Image from 'next/image'
import {MainDiv,LeftMainDiv,Logo,LinkDiv,Link,RightMainDiv,Containimg,Buttonwhite,Button} from '../components/Navbar.element'
import Arrowdown from '../images/arrowdown.png'
import NS from '../images/NovelSky.png'

import styled from 'styled-components'
const Span = styled.span`
padding:0 0.5rem;

`
const Div = styled.div`

`
const Navbar = () => {
    return (
        <>
        
        <MainDiv>
            <LeftMainDiv>
                <div>
                <Image src={NS} alt="lgo" />

                </div>
                <LinkDiv>
                    <div>
                        <Link>Thể loại</Link>
                        <Span> 
                            <Image src={Arrowdown} alt="arrdown"  />
                        </Span>
                    </div>
                    <Link href="#">Sáng tác</Link>
                    <Link href="#">Thư viện</Link>

                </LinkDiv>
            </LeftMainDiv>
            <RightMainDiv>
                <Containimg>
                    <Image src={Search} alt="search" />
                </Containimg>
                <Buttonwhite>Đăng kí</Buttonwhite>
                <Button>Đăng nhập</Button>
            </RightMainDiv>
        </MainDiv>
        
        </>

    )
}

export default Navbar
