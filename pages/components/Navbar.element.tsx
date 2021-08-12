import styled from 'styled-components'
export const Logo = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap');
color:#fff;
font-size:1.25rem;
font-family: 'Merienda', cursive;
font-weight: 700;
`
export const MainDiv = styled.nav`
display:flex;
color:#fff;
justify-content:space-between;
background:black;
padding:1rem 6rem;
@media (max-width: 1085px) {
align-items:center;
justify-content:center;
}

`
export const LeftMainDiv = styled.div`
display:flex;
color:#fff;
justify-content:center;
align-items:center;



`
export const LinkDiv = styled.div`
display:flex;
color:#FFFFFF;
padding: 0 4rem;
@media (max-width: 1085px) {
    display:none;

}
`
export const Link = styled.a`
text-decoration:none;
color:#fff;
padding-left:1rem;
`

export const RightMainDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
@media (max-width: 1085px) {
display:none;
}
`

export const Containimg = styled.div`
margin-right:1rem;
`

export const Button = styled.button`
background:#D02810;
border-radius:20px;
color:#fff;
border:none;
margin:0 1rem;
font-weight:700;
padding:0.5rem 2rem;
`

export const Buttonwhite = styled(Button)`
background:black;
color:#fff;
border :2px solid white;

`