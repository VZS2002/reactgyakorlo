import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styled from 'styled-components'
import React, { useState } from 'react';

const Form = styled.form`
   margin:20px;
`
const Input = styled.input`
    padding:8px; 
    margin:10px;
`

const Uzenet = styled.p`
    margin:10px;

`

const Button = styled.button`
padding:8px;
margin:10px;
`
const Kapcsolat = () => {
    const [message, setMessage] = useState('');

   const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Köszönjuk!');
  }
    return (
      <>
      <Navbar></Navbar>
        <Form onSubmit={handleSubmit}>
            <Input type="email" placeholder="Az ön email címe" required/>
            <Input type="text" placeholder="Az ön üzenete" required/>
            <Button type="submit" required>Elküld</Button>
        </Form>
        {message && <Uzenet>{message}</Uzenet>}
        <Footer></Footer>
      </>
    )
  }
  
  export default Kapcsolat
  