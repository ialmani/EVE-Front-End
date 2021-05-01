import React, { useState } from 'react'
import './CreateZoomMeeting.css'
import {Row, Col, Image} from 'react-bootstrap'
import {Form, Button} from 'react-bootstrap'
import zoompage from '../../assets/zoomLogo.png'
import TimePicker from 'react-bootstrap-time-picker';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

import * as Requests from '../../Requests'
import { useHistory } from 'react-router-dom'

const CreateZoomMeeting = () => {

    const [newZoom, setNewZoom] = useState({
        title: null,
        start_date: new Date(),
        end_date: new Date(),
        description: "",
        zoom_url: null,
        zoom_id: null,
        password: ""
      });

    const [validated, setValidated] = useState(false);

    let history = useHistory();

    const createZoom = e => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            alert("Please fill out all required fields.")
        }
        else{
            Requests.createZoom(newZoom).then((response) => {

            }).catch(status =>
                alert(status));
        }
        setValidated(true);
    }

    return (
        <div className = "zoompage-body">
            <div className = "zoom-heading">
                CREATE A ZOOM SESSION
            </div>
            <Form.Text style={{color: "rgb(30, 29, 91)"}}>* Indicates required fields</Form.Text>


            <Row>
                <Col>
                 <Form noValidate validated={validated} onSubmit={createZoom} style = {{width: "80%", marginLeft: "10%", marginTop: "15%"}}>
                     <Form.Group>
                         <Form.Label> Zoom Title *</Form.Label>
                         <Form.Control required onChange={e => setNewZoom({ ...newZoom, title: e.target.value })} placeholder = "Ex: Group meeting "/>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Invitation Link *</Form.Label>
                         <Form.Control required type = "url" onChange={e => setNewZoom({ ...newZoom, zoom_url: e.target.value })} placeholder = "https://bsu.zoom.us/"/>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Zoom ID *</Form.Label>
                         <Form.Control required onChange={e => setNewZoom({ ...newZoom, zoom_id: e.target.value })} placeholder = "123 4567 8910"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Start Date *</Form.Label> <br></br>
                        <Form.Control required type="datetime-local" onChange={e => setNewZoom({ ...newZoom, start_date: e.target.value })}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> End Date *</Form.Label> <br></br>
                        <Form.Control required type="datetime-local" onChange={e => setNewZoom({ ...newZoom, end_date: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Description </Form.Label>
                         <Form.Control onChange={e => setNewZoom({ ...newZoom, description: e.target.value })} placeholder = "Ex: About Technology improvement for elementary schools. "/>
                    </Form.Group>
                     <Form.Group>
                        <Form.Label>Password (if required)</Form.Label>
                        <Form.Control onChange={e => setNewZoom({ ...newZoom, password: e.target.value })}/>
                     </Form.Group>



                    <Button className = "btn zoom-btn" type = "submit"> Submit</Button>
                 </Form>
                
                </Col>
                <Col> 
                    <Image className = "zoomImage"src = {zoompage} style = {{width: "100%",  marginTop: "10px"}}/>
                </Col>
            </Row>

        </div>

    )
}

export default CreateZoomMeeting
