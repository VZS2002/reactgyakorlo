import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styled from 'styled-components'

const Tartalom = styled.div`
    margin:10px;
    font-size:18px;
    
`
const Fooldal = () => {
    return (
      <>
      <Navbar></Navbar>
      <Tartalom>  Üdvözöljük a Petrik Webhely-gyár oldalán!
        Válasszon a fenti menüpontok közül!</Tartalom>
      
      <Footer></Footer>
      </>
    )
  }
  
  export default Fooldal
  