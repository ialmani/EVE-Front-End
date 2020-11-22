import React from 'react'
import { Button, 
    FormContent, 
    FormH1, 
    FormLabel, 
    FormWrap, 
    Icon, 
    Container, 
    Form, 
    FormInput} from './MemberSignUpElements'

const MemberSignUp = () => {
    return (
            <Container>
                <FormWrap>
                    <Icon to= '/'>logo</Icon>
                    <FormContent>
                        <Form action = '#'>
                            <FormH1> Member Sign Up </FormH1>
                                <FormLabel htmlFor = 'for'>Name</FormLabel>
                                <FormInput type= 'text' required/>
                                <FormLabel htmlFor = 'for'>Email</FormLabel>
                                <FormInput type= 'email' required/>
                                <FormLabel htmlFor = 'for'>Password</FormLabel>
                                <FormInput type = 'password' required/>
                                <FormLabel htmlFor = 'for'>Confirm Password</FormLabel>
                                <FormInput type = 'password' required/>
                                <FormLabel htmlFor = 'for'>Phone Number</FormLabel>
                                <FormInput type= 'number' required/>
                                <Button type = 'submit'>Continue</Button>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
    )
}

export default MemberSignUp;