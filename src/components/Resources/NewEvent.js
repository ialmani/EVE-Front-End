import React, { useState} from 'react'
import '../Button.css'
import CreateZoomMeeting from './CreateZoomMeeting'
import InPersonNewEvent from './InPersonNewEvent'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const NewEvent = () =>{

    const[tab, setTab] = useState("zoom");

    return (
        <div className = "signup-body">
        <main className="form-signup">
            <Tabs  className="nav-fill" id="controlled-tab-example"
                   defaultActiveKey="zoom"
                   activeKey={tab}
                   onSelect={(k) => setTab(k)}>
                <Tab eventKey="zoom" title="Create New Zoom Event">
                    <CreateZoomMeeting />
                </Tab>
                <Tab eventKey="inPerson" title="Create New In-Person Event">
                    <InPersonNewEvent />
                </Tab>
            </Tabs>
        </main>
        </div>
    );
}

export default NewEvent