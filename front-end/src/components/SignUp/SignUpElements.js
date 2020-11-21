import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const SignUpContainer = styled.div`
    min-height: 100vh;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #E6FFE5;
    position: relative;
`;

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

export const InfoRow = styled.div`
    display: grid;
    align-items: top;
    grid-template-areas: 'col1 col2';
    
    @media screen and (max-width: 768px){
        grid-template-areas: 
        'col1' 'col2' ;
        
    }
`;

export const Column1 = styled.div`
    margin-left: 30px;
    margin-top: 20px;
    margin-right: 20px;
    padding: 0 40px;    
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-left: 30px;
    margin-top: 20px;
    margin-right: 20px;
    padding: 0 40px;    
    grid-area: col2;
`;

export const Subtitle = styled.h1`
    color : rgb(1,191,113);
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`;

export const BtnWrap = styled.div`
    align-content: left;
    margin-bottom: 5px;

    @media screen and (max-width: 768px){
        top: 85%;
        left: 15%;
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`