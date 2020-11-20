import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SignUpContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #E6FFE5;
    position: relative;
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #0c0c0c;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }

`;

export const SignUpWrap = styled.div`

    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 0px;

    font-weight: bold;
    text-decoration: none;
    color: 'black';



    @media screen and (max-width: 400px){
        height: 80%;
    }
`;