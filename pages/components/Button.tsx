import React from 'react'
import styled from 'styled-components'
const Btn = styled.button`
background:#FA3109;
border-radius:20px;
width:15%;
border:none;
padding:0.5rem 0;
color:#fff;
font-weight:500;
margin-bottom: 2.5rem;
@media (max-width: 1300px) {
width:30%;    
}
@media (max-width: 600px) {
width:35%;    
}
@media (max-width: 550px) {
width:40%;    
}
@media (max-width: 450px) {
width:45%;    
}
@media (max-width: 400px) {
width:55%;    
}
`
const Div = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Button = () => {
    return (
        <Div>
        <Btn>Xem thêm</Btn>
            
        </Div>
    )
}

export default Button
