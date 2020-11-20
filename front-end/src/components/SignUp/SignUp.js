import React from 'react'
import {SignUpContainer, SignUpWrap, Icon} from './SignUpElements'
import {Button} from '../../components/ButtonElements'

const ulStyle = {
  padding: "60px",
};

const SignUp = () => {
    return (
        <>
        <SignUpContainer >
            <SignUpWrap>
                <Icon to= '/' >EVE</Icon>
                <h2>Are you signing up as a member or a sponsor?</h2>
                <Button to = '/membersignup'>Member</Button>
                <ul style={ulStyle}>
                    <li> Access information from other businesses.</li>
                    <li> Share and comment on blog posts.</li>
                </ul>
                <Button to = '/sponsorsignup' >Sponsor</Button>
                <ul style={ulStyle}>
                    <li> Able to subscribe and upload videos and blog posts .</li>
                    <li> Able to upload advertisements of your business.</li>
                </ul>
            </SignUpWrap>

         </SignUpContainer>

        </>
    )
}

export default SignUp
