import React from 'react'
import { FormButton, 
    FormContent, 
    FormH1, 
    FormLabel, 
    FormWrap, 
    Text, 
    Icon, 
    Container, 
    Form, 
    FormInput } from './AdminSignInElements'

const AdminSignIn = () => {
    return (
            <Container>
                <FormWrap>
                    <Icon to= '/'>EVE</Icon>
                    <FormContent>
                        <Form action = '#'>
                            <FormH1> Sign in to your Admin account</FormH1>
                            <FormLabel htmlFor = 'for'>Email</FormLabel>
                                <FormInput type= 'email' required/>
                                <FormLabel htmlFor = 'for'>Password</FormLabel>
                                <FormInput type = 'password' required/>
                                <FormButton type = 'submit'>Continue</FormButton>
                                <Text to= "signin">Forgot Password?</Text>
                                <Text to= "signin">User Sign in</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
    )
}

export default AdminSignIn