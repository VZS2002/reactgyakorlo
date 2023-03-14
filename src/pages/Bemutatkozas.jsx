import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styled from 'styled-components'
const image = require("../images/profile.png")

const Kep = styled.img`
    width:100px;
    float:right;
`
const Tartalom = styled.div`
      margin:10px;
      font-size:18px;
    
`
const Cimsor = styled.h1`
    font-size:24px;
    text-decoration: underline;
`
const Bemutatkozas = () => {
    return (
      <>
         <Navbar></Navbar>
         <Tartalom>
         <Cimsor>Történet</Cimsor> 
          
                 A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.
                 <br />
                2022-ben multinacionális céggé nőtte ki magát a kezdetben önkéntesekből álló szervezet.

               <Cimsor>Jelenlegi tagjaink</Cimsor> 

                <Kep src={image} alt="Fotó a főnökről" />

                * Erdős Ildikó
                * Jónás Viola
                * Kató Anna
                * Pintér Koppány
                * Sas Gizi

             </Tartalom>
            
         <Footer></Footer>
      </>
    )
  }
  
  export default Bemutatkozas
  