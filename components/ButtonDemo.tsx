import { useState } from 'react';
import styled from "styled-components";

const ButttonDemo = () => {

    const [ count, setCount ] = useState(100);

    const Button = styled.button`
        height: ${count}px;
        width: 50px;
    `;


    return (
    <Button onClick={() => setCount( count + 20)}>{count ? `You clicked me ${count} times` : "Click Me"}</Button>
    )
}

export default ButttonDemo;