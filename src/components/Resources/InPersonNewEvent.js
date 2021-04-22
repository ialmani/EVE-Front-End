import React, { useState } from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import {Form, Button} from 'react-bootstrap'
import zoompage from '../../assets/zoomLogo.png'
import TimePicker from 'react-bootstrap-time-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as Requests from '../../Requests'
import { useHistory } from 'react-router-dom'

const InPersonNewEvent = () => {

    const [newInPersonEvent, setnewInPersonEvent] = useState({
        title: null,
        start_time: new Date(),
        date: new Date(),
        location: null,
        description: null,
      });

      let history = useHistory();

      const createZoom = e => {
        e.preventDefault();
          Requests.createZoom(newInPersonEvent).then((response) => {
            console.log(response.id)
            history.push('/zoom/' + response.id);
          }).catch(status =>
            alert(status));
      }

    return (
        <div className = "zoompage-body">
            <div className = "zoom-heading">
                CREATE AN IN-PERSON EVENT
            </div>

            <Row>
                <Col>
                 <Form onSubmit={createZoom} style = {{width: "80%", marginLeft: "10%", marginTop: "15%"}}>
                    <Form.Group>
                         <Form.Label> Event Title </Form.Label>
                         <Form.Control onChange={e => setnewInPersonEvent({ ...newInPersonEvent, title: e.target.value })} placeholder = "Ex: Group meeting "/>
                    </Form.Group>

                    <Form.Group>
                         <Form.Label> Start Time </Form.Label> <br></br>
                         <DatePicker showTimeSelect showTimeSelectOnly selected={newInPersonEvent.start_time} dateFormat="h:mm aa" onChange={value => setnewInPersonEvent({ ...newInPersonEvent, start_time: value })} />
                    </Form.Group>

                    <Form.Group>
                         <Form.Label> Date </Form.Label> <br></br>
                         <DatePicker selected={newInPersonEvent.date} onChange={value => setnewInPersonEvent({ ...newInPersonEvent, date: value })} />
                    </Form.Group>

                    <Form.Group>
                         <Form.Label> Location </Form.Label>
                         <Form.Control onChange={e => setnewInPersonEvent({ ...newInPersonEvent, location: e.target.value })} placeholder = "Ex: 2445 Chesterfield North Building "/>
                    </Form.Group>

                    <Form.Group>
                         <Form.Label> Description </Form.Label>
                         <Form.Control onChange={e => setnewInPersonEvent({ ...newInPersonEvent, description: e.target.value })} placeholder = "Ex: About Technology improvement for elementary schools. "/>
                    </Form.Group>

                    <Button className = "btn zoom-btn" type = "submit"> Submit</Button>
                 </Form>

                </Col>
            </Row>

        </div>
    )
}

export default InPersonNewEvent
