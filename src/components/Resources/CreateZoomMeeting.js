import React from 'react'
import './CreateZoomMeeting.css'
import {Row, Col, Image} from 'react-bootstrap'
import {Form, Button} from 'react-bootstrap'
import zoompage from '../../assets/zoomLogo.png'
import TimePicker from 'react-bootstrap-time-picker';

const CreateZoomMeeting = () => {
    return (
        <div className = "zoompage-body">
            <div className = "zoom-heading">
                CREATE A ZOOM SESSION
            </div>
            
            <Row>
                <Col> 
                 <Form style = {{width: "80%", marginLeft: "10%", marginTop: "15%"}}>
                    <Form.Group>
                         <Form.Label> Zoom Title</Form.Label>
                         <Form.Control placeholder = "Ex: Group meeting "/>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Inviation Link</Form.Label>
                         <Form.Control type = "url" placeholder = "https://bsu.zoom.us/my/ialmani?pwd=bU1wN0MwdVZidVQ2SkNiaUtWeUdJUT09"/>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Zoom ID</Form.Label>
                         <Form.Control  placeholder = "468 287 1612"/>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Start Time</Form.Label>
                         <TimePicker start="00:00" end="23:30" step={30} />
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Password</Form.Label>
                         <Form.Control  type = "password" placeholder = "optional"/>
                    </Form.Group>

                    <Button className = "btn zoom-btn" type = "submit"> Submit</Button>
                 </Form>
                
                </Col>
                <Col> 
                    <Image className = "zoomImage"src = {zoompage} style = {{width: "100%",  marginTop: "20px"}}/>
                </Col>
            </Row>
            
        </div>
    )
}

export default CreateZoomMeeting
