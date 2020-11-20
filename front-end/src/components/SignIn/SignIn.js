import React from 'react'
import { FormButton, FormContent, FormH1, FormLabel, FormWrap, Icon, Container, Form, FormInput, TextLink, Text, SignUpLink} from './SignInElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to= '/'>EVE</Icon>
                    <FormContent>
                        <Form action = '#'>
                            <FormH1> Sign in to your account</FormH1>
                            <FormLabel htmlFor = 'for'>Email</FormLabel>
                                <FormInput type= 'email' required/>
                                <FormLabel htmlFor = 'for'>Password</FormLabel>
                                <FormInput type = 'password' required/>
                                <FormButton type = 'submit'>Continue</FormButton>
                                <TextLink to= '/'>Forgot Password?</TextLink>
                                <TextLink to= 'adminsignin'>Admin Sign in</TextLink>
                                <Text>Not a member?</Text>
                                <SignUpLink to= 'signup'>Sign Up</SignUpLink>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default SignIn;