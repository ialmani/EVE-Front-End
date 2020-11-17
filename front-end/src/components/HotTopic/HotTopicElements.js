import styled from 'styled-components'

import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const BlogContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1500px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }

`;

export const BlogWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0px;
       
       
    }

`;
export const BlogCard = styled.div`

    background : #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba (0,0,0,0.2);
    transition: all 0.2 all ease-in-out;
    margin-top: 10px;
   

    &:hover {
        transform: scale (1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        
    }

   
`;

export const BlogIcon = styled.img `
    height : 160px;
    width: 160px;
    margin-bottom: 10px;

`;

export const BlogH1 = styled.h1 `
    font-size: 2rem;
    color: rgb(1,191,113);
    margin-bottom: 20px;
    margin-top: 150px;
    
    
    

`;

export const BlogH2 = styled.h2`

    font-size: 1 rem;
    margin-bottom: 10px;

`;
export const BlogP = styled.p`
    font-size: 1rem;
    text-align: center
`;

export const BtnWrap = styled.div`

    margin-top: 20px;
    margin-left: 25px;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: 0fr;
    align-items: center;
    position: relative;
   
    color: #8861a7;

`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
  

`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
     
`