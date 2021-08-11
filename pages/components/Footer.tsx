import React from 'react'
import Image from 'next/image'
import NovelSkyWhite from '../images/NovelSkyWhite.png'
import styled from 'styled-components'

const Contain =styled.div`
background:#0B0B0B;
height:100%;
`
const Footer = () => {
    return (
        <Contain>
           <div>
                <div>
                    <Image src={NovelSkyWhite} alt="logofooter" />
                </div>
                <div>

                </div>
                <div>
                    
                </div>
            </div> 
            <div>
                <p>
                © 2021 - Bản quyền thuộc về NovelSky - novelsky.com
                </p>
            </div>
        </Contain>
    )
}

export default Footer
