import { useState } from 'react';
import styled from "styled-components";


const ButttonDemo = () => {

    const [ clicked, setClicked ] = useState(false);

    const Button = styled.button`
        height: 100px;
        width: 50px;
    `;


    return (
    <Button onClick={() => setClicked(!clicked)}>{clicked ? "You clicked me" : "Click Me"}</Button>
    )
}

export default ButttonDemo;