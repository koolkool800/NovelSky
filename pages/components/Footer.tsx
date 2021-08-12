import React from 'react'
import Image from 'next/image'
import NovelSkyWhite from '../images/NovelSkyWhite.png'
import styled from 'styled-components'
import Fb from '../images/fb.png'
import Twt from '../images/twt.png'
import Yt from '../images/yt.png'


const Contain =styled.div`
background:#0B0B0B;
height:100%;
`
const Link = styled.a`
color:#ABA5AB;
padding:0 1rem;
@media (max-width: 1000px) {
    padding:0.5rem 1rem;
}
@media (max-width: 700px) {
    padding:0.5rem 0.75rem;
}
@media (max-width: 500px) {
    padding:0.25rem 0.75rem;
}
`

const Logo = styled.div`
padding-right:2rem;
@media (max-width: 1370px) {
    padding:0;
}
`
const LinkDiv = styled.div`
padding:0 2rem;
display:flex;
justify-content: center;
align-items:center;
flex-wrap:wrap;
@media (max-width: 1370px) {
    padding:1rem 2rem;
}
@media (max-width: 500px) {
    padding:1rem 1rem;
}
`

const Flexdiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:2rem;
@media (max-width: 1370px) {
    flex-wrap:wrap;
    flex-direction:column;
}

`
const Copyright = styled.div`
background:#0B0B0B;
color:#ABA5AB;
text-align:center;
@media (max-width: 500px) {
    font-size:12px;
}
`
const Footer = () => {
    return (
        <Contain>
           <Flexdiv>
                <Logo>
                    <Image src={NovelSkyWhite} alt="logofooter" />
                </Logo>
                <LinkDiv>
                    <Link>Thể loại</Link>
                    <Link>Về chúng tôi </Link>
                    <Link>Điều khoản sử dụng</Link>
                    <Link>Chính sách bảo mật</Link>
                    <Link>Quyền lợi</Link>
                    <Link>Vấn đề bản quyền</Link>

                </LinkDiv>
                <LinkDiv>
                    <Link>
                        <Image src={Fb} alt="fb" />
                    </Link>
                    <Link>
                        <Image src={Twt} alt="twt" />
                    </Link>
                    <Link>
                        <Image src={Yt} alt="yt" />
                    </Link>
                </LinkDiv>
            </Flexdiv> 
            <Copyright>
                <p>
                © 2021 - Bản quyền thuộc về NovelSky - novelsky.com
                </p>
            </Copyright>
        </Contain>
    )
}

export default Footer
