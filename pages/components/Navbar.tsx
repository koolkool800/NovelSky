import React from 'react'
import Search from '../images/search.png'
import Image from 'next/image'
import {MainDiv,LeftMainDiv,Logo,LinkDiv,Link,RightMainDiv,Containimg,Buttonwhite,Button} from '../components/Navbar.element'

const Navbar = () => {
    return (
        <>
        
        <MainDiv>
            <LeftMainDiv>
                <Logo>NovelSky</Logo>
                <LinkDiv>
                    <div>
                        {/* dropdown  */}
                        Thể loại
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
