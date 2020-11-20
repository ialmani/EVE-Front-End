import React from 'react'
import {FormContent, FormH1, FormLabel, FormWrap, Icon, Container, Form, FormInput, Button, TextLink} from './ForgotPasswordElements'

const ForgotPassword = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to= '/'>logo</Icon>
                    <FormContent>
                        <Form action = '#'>
                            <FormH1>Forgot Password</FormH1>
                                <FormLabel htmlFor = 'for'>Email</FormLabel>
                                <FormInput type= 'email' required/>
                                <Button>Submit Reset</Button>
                                <TextLink to= 'signin'>Back to Sign In</TextLink>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>
    )
}

export default ForgotPassword
