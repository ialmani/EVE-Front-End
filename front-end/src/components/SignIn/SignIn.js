import React from 'react'
import { FormButton, FormContent, FormH1, FormLabel, FormWrap, Text, Icon, Container, Form, FormInput } from './SignInElements'

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
                                <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default SignIn;