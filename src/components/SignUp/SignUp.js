import React, { useState} from 'react'
import {Link } from 'react-router-dom'
import './SignUp.css'
import '../Button.css'
import MemberSignUp from './MemberSignUp'
import SponsorSignUp from './SponsorSignUp'

const SignUp = () =>{
  
    const[tab, setTab] = useState(0);

    return (
        <main className="form-signup">
            <div className = "top-tabs">
                <Link onClick={() => setTab(0)} className={`member-signup ${tab == 0 ? "active" : ""}`}>Members</Link>
                <Link onClick={() => setTab(1)} className={`sponsor-signup ${tab == 1 ? "active" : ""}`}>Sponsors</Link>
            </div>    

            <div className = "boxx">
                {tab ==0 && <MemberSignUp/>}
                {tab ==1 && <SponsorSignUp/>}
            </div>
        </main>
    );
}

export default SignUp