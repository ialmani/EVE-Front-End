import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const DiscoverContainer = styled.div`
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

export const DiscoverWrap = styled.div`
    
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
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
    margin-bottom: 25px;
    margin-top: 80px;
    margin-right: 20px;
    padding: 0 40px;
    margin-left: 30px;  
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Subtitle = styled.h1`
    color : rgb(1,191,113);
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

`;

export const Heading = styled.h1`
    color: '#fff';
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 1.1;
    font-weight: 600;
    color: 'black';

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Ul = styled.ul`
    font-size: 15px;
`

export const BtnWrap = styled.div`
    align-content: center;
    margin-bottom: 20px;
    align-content: center;
    left: 40%;
    position: absolute; 

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
export const Span = styled(Link)`
    text-decoration: none;
    
    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
        cursor: pointer;

    }
`