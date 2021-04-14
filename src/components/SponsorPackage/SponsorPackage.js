import React, { useState } from 'react'
import { GiCrystalBars, GiCutDiamond} from 'react-icons/gi'
import { FaHandshake } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './SponsorPackage.css'
import '../styles.css'
import '../Button.css'

function SponsorPackage() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className='sp-body font-roboto'>
      <div className='sp-banner-section'>
        <div className='sp-banner'>
          <h1 className='sp-banner-font font-roboto'>Sponsor Packages Overview</h1>
        </div>
      </div>

      <div className='sp-card-section'>
        <div className='sp-packagecard'>
          <div className='sp-card-icon'>
            <FaHandshake className='sp-icon-properties' />
          </div>
          <div className='sp-card-contents'>
            <p className='sp-card-packagename'>Starter Pack</p>
            <p className='sp-card-cost'>$10.99</p>
            <p className='sp-card-rate'>per month</p>
            <p className='sp-card-feature'>1 blog per week</p>
            <p className='sp-card-feature'>1 video per week</p>
            <p className='sp-card-feature'> Unlimited comments </p>
          </div>
        </div>
        <div className='sp-packagecard'>
          <div className='sp-card-icon'>
            <GiCrystalBars className='sp-icon-properties' />
          </div>
          <div className='sp-card-contents'>
            <p className='sp-card-packagename '>Gold Rush</p>
            <p className='sp-card-cost'>$40.99</p>
            <p className='sp-card-rate'>per month</p>
            <p className='sp-card-feature'>3 blogs per week</p>
            <p className='sp-card-feature'>3 videos per week</p>
            <p className='sp-card-feature'> Unlimited comments </p>
          </div>
        </div>
        <div className='sp-packagecard'>
          <div className='sp-card-icon'>
            <GiCutDiamond className='sp-icon-properties' />
          </div>
          <div className='sp-card-contents'>
            <p className='sp-card-packagename'>Diamond Kings</p>
            <p className='sp-card-cost'>$99.99</p>
            <p className='sp-card-rate'>per month</p>
            <p className='sp-card-feature'>Unlimited blog posts</p>
            <p className='sp-card-feature'>Unlimited video uploads</p>
            <p className='sp-card-feature'> Unlimited comments </p>
          </div>
        </div>
      </div>

      <div className='sp-signup-section'>
        <Link to='/signup' className='sponsorpackage-signupbtn'>
          Sign up as a Sponsor<span>&rarr;</span>
        </Link>
      </div>

    </div>
  );
}

export default SponsorPackage