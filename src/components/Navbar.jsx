import styled from 'styled-components'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
const Wrapper = styled.div`
padding: 10px 20px; 
   display: flex;

   background-color: #a1cdff;
   color: #000000;
   height: 50px;
   border-bottom: 2px solid #000000;
   align-items: center;


   font-weight:bold;
`
const NavbarLink = styled(Link)`
justify-content: right;
font-size: 20px;
word-spacing: 20px;
cursor: pointer;
align-items: center;
display: flex;
margin: 15px;
text-decoration: none;

&:hover,
&:focus{
   
}

&:active{
    
}

&:visited {
  color: #000000;
}
`;
const Navbar = () => {
    return (
      <>
        <Wrapper>
          <NavbarLink to="/">FŐOLDAL </NavbarLink> <NavbarLink to="/bemutatkozas">BEMUTATKOZÁS </NavbarLink> <NavbarLink to="/kapcsolat"> KAPCSOLAT </NavbarLink>
        </Wrapper>
        
      </>
    )
  }
  
  export default Navbar
  