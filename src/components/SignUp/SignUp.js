import React, { useState} from 'react'
import './SignUp.css'
import '../Button.css'
import MemberSignUp from './MemberSignUp'
import SponsorSignUp from './SponsorSignUp'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const SignUp = () =>{

    const[tab, setTab] = useState("member");

    return (
        <div className = "signup-body">
        <main className="form-signup">
            <Tabs  className="nav-fill" id="controlled-tab-example"
                   defaultActiveKey="member"
                   activeKey={tab}
                   onSelect={(k) => setTab(k)}>
                <Tab eventKey="member" title="Register as Member">
                    <MemberSignUp/>
                </Tab>
                <Tab eventKey="sponsor" title="Register as Sponsor">
                    <SponsorSignUp/>
                </Tab>
            </Tabs>
        </main>
        </div>
    );
}

export default SignUp