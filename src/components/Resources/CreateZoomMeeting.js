import React, {useState} from 'react'
import './CreateZoomMeeting.css'
import {Row, Col, Image} from 'react-bootstrap'
import {Form, Button} from 'react-bootstrap'
import zoompage from '../../assets/zoomLogo.png'
import TimePicker from 'react-bootstrap-time-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as Requests from '../../Requests'
import { useHistory } from 'react-router-dom'

const CreateZoomMeeting = () => {

    const [newZoom, setNewZoom] = useState({
        title: null,
        start_time: null,
        date: null,
        description: null,
        zoom_url: null,
        zoom_id: null,
        password: null
      });

      let history = useHistory();

      const createZoom = e => {
        e.preventDefault();
          Requests.createZoom(newZoom).then((response) => {
            console.log(response.id)
            history.push('/zoom/' + response.id);
          }).catch(status =>
            alert(status));
      }

    return (
        <div className = "zoompage-body">
            <div className = "zoom-heading">
                CREATE A ZOOM SESSION
            </div>
            
            <Row>
                <Col> 
                 <Form onSubmit={createZoom} style = {{width: "80%", marginLeft: "10%", marginTop: "15%"}}>
                    <Form.Group>
                         <Form.Label> Zoom Title</Form.Label>
                         <Form.Control onChange={e => setNewZoom({ ...newZoom, title: e.target.value })} placeholder = "Ex: Group meeting "/>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Inviation Link</Form.Label>
                         <Form.Control type = "url" onChange={e => setNewZoom({ ...newZoom, zoom_url: e.target.value })} placeholder = "https://bsu.zoom.us/my/ialmani?pwd=bU1wN0MwdVZidVQ2SkNiaUtWeUdJUT09"/>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Zoom ID</Form.Label>
                         <Form.Control  onChange={e => setNewZoom({ ...newZoom, zoom_id: e.target.value })} placeholder = "468"/>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Start Time</Form.Label>
                         <TimePicker start="00:00" end="23:30" onChange={e => setNewZoom({ ...newZoom, start_time: e.target.value })} step={30} />
                    </Form.Group>
                    <Form.Group>
                         <Form.Label> Password</Form.Label>
                         <Form.Control  type = "password" placeholder = "optional" onChange={e => setNewZoom({ ...newZoom, password: e.target.value })}/>
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
