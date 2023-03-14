import styled from 'styled-components'

const Wrapper = styled.div`
    text-align:center;
    font-size: 15x;
    background-color:white;
    height:25px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    font-weight:bold;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`

const Footer = () => {
    return (
      <>
        
        <Wrapper>Készítette: Varga Zsigmond</Wrapper>
      </>
    )
  }
  
  export default Footer
  