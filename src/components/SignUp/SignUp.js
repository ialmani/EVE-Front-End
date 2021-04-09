import React, { useState} from 'react'
import {Link } from 'react-router-dom'
import './SignUp.css'
import '../Button.css'
import MemberSignUp from './MemberSignUp'
import SponsorSignUp from './SponsorSignUp'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const SignUp = () =>{

    const[tab, setTab] = useState("member");

    return (
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
            {/*<div className = "top-tabs">*/}
            {/*    <Link onClick={() => setTab(0)} className={`member-signup ${tab == 0 ? "active" : ""}`}>Members</Link>*/}
            {/*    <Link onClick={() => setTab(1)} className={`sponsor-signup ${tab == 1 ? "active" : ""}`}>Sponsors</Link>*/}
            {/*</div>    */}

        </main>
    );
}

export default SignUp