import React from 'react'
import { Button, 
    FormContent, 
    FormH1, 
    FormLabel, 
    FormWrap, 
    Icon, 
    Container, 
    Form, 
    FormInput} from './SponsorSignUpElements'

const SponsorSignUp = () => {
    return (
            <Container>
                <FormWrap>
                    <Icon to= '/'>logo</Icon>
                    <FormContent>
                        <Form action = '#'>
                            <FormH1> Sponsor Sign Up </FormH1>
                                <FormLabel htmlFor = 'for'>Sponsor Name</FormLabel>
                                <FormInput type= 'text' required/>
                                <FormLabel htmlFor = 'for'>Email</FormLabel>
                                <FormInput type= 'email' required/>
                                <FormLabel htmlFor = 'for'>Password</FormLabel>
                                <FormInput type = 'password' required/>
                                <FormLabel htmlFor = 'for'>Confirm Password</FormLabel>
                                <FormInput type = 'password' required/>
                                <FormLabel htmlFor = 'for'>NAICS Number</FormLabel>
                                <FormInput type= 'integer' required/>
                                <FormLabel htmlFor = 'for'>Phone Number</FormLabel>
                                <FormInput type= 'integer' required/>
                                <FormLabel htmlFor = 'for'>Address</FormLabel>
                                <FormInput type= 'text' required/>
                                <Button>Continue</Button>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
    )
}

export default SponsorSignUp