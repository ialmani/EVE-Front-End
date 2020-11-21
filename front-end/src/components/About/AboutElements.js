import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const AboutContainer = styled.div`
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

export const AboutWrap = styled.div`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    color: 'black';

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

export const AboutSubtitle = styled.h1`
    color: #8861a7;
    margin-left: 80px;
    margin-top: 60px;
    font-size: 20px;
`;

export const AboutH1 = styled.h1`
    color: 'black';
    font-size: 14px;
    margin-left: 80px;
    text-decoration: none;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-weight: bold;
`;

export const AboutP1 = styled.p`
    color: 'black';
    font-size: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-left: 80px;
    text-decoration: none;
    margin-top: 40px;
`;

export const AboutH2 = styled.h1`
    color: 'black';
    font-size: 14px;
    margin-left: 80px;
    text-decoration: none;
    margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-weight: bold;
`;

export const AboutP2 = styled.p`
    color: 'black';
    font-size: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-left: 80px;
    text-decoration: none;
    margin-top: 40px;
`;

export const AboutUl = styled.ul`
    color: 'black';
    font-size: 14px;
    margin-left: 80px;
    text-decoration: none;
    margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-weight: bold;
`;

export const AboutLiA = styled.li`
    margin-left: 80px;
    font-size: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const AboutLiB = styled.li`
    margin-left: 80px;
    font-size: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const BtnWrap = styled.div`
    margin-top: 10px;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: 0fr;
    align-items: center;
    margin-left: 80px;
    border-radius: none;
    color: #8861a7;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;    
`;