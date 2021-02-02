import React, {useState} from 'react'
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { Button} from '../Button';
import {Link} from 'react-router-dom';
import './SponsorPackage.css';

function SponsorPackage() {
  const [hover, setHover] = useState (false)

    const onHover = ()=> {
    setHover(!hover)
  }

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <div className='pricing-section'>
      <h1 className= 'pricing-heading-top'>Sponsor Packages Overview</h1>
        <div className='pricing-wrapper'>
          <div className='pricing-container'>
            <div className='pricing-card'>
              <div className='pricing-card-info'>
                <div className='pricing-card-icon'>
                  <GiRock />
                </div>
                <h3 className='pricing-card-plan'>Starter Pack</h3>
                <h4 className='pricing-card-cost'>$10.99</h4>
                <p className='pricing-card-length'>per month</p>
                <ul className='pricing-card-features'>
                  <li className='pricing-card-feature'>1 blog per week</li>
                  <li className='pricing-card-feature'>1 video per week</li>
                  <li className='pricing-card-feature'> Unlimited comments </li>
                </ul>
              </div>
            </div>

            <div className='pricing-card'>
              <div className='pricing-card-info'>
                <div className='pricing-card-icon'>
                  <GiCrystalBars />
                </div>
                <h3 className='pricing-card-plan'>Gold Rush</h3>
                <h4 className='pricing-card-cost'>$40.99</h4>
                <p className='pricing-card-length'>per month</p>
                <ul className='pricing-card-features'>
                  <li className='pricing-card-feature'>3 blogs per week</li>
                  <li className='pricing-card-feature'>3 videos per week</li>
                  <li className='pricing-card-feature'> Unlimited comments </li>
                </ul>
              </div>
            </div>

            <div className='pricing-card'>
              <div className='pricing-card-info'>
                <div className='pricing-card-icon'>
                  <GiCutDiamond />
                </div>
                <h3 className='pricing-card-plan'>Diamond Kings</h3>
                <h4 className='pricing-card-cost'>$99.99</h4>
                <p className='pricing-card-length'>per month</p>
                <ul className='pricing-card-features'>
                  <li className='pricing-card-feature'>Unlimited blog posts</li>
                  <li className='pricing-card-feature'>Unlimited video uploads</li>
                  <li className='pricing-card-feature'> Unlimited comments </li>
                </ul>
              </div>
            </div>

          </div>
          <Button onMouseEnter={onHover} onMouseLeave ={onHover}>
            <Link to= '/signup'>
            Sign up as a Sponsor {hover ? <MdArrowForward className='forward' /> : <MdKeyboardArrowRight className='right' />}
            </Link>
          </Button>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default SponsorPackage