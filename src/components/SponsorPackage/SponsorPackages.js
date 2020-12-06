import React, {useState} from 'react'
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  ArrowForward,
  ArrowRight} from './SponsorPackagesElements';
import {Link} from "react-router-dom";

function SponsorPackages() {
  const [hover, setHover] = useState (false)

    const onHover = ()=> {
    setHover(!hover)
  }

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Packages</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$10.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1 blog per week</PricingCardFeature>
                  <PricingCardFeature>1 video per week</PricingCardFeature>
                  <PricingCardFeature> Unlimited comments </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>$40.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>3 blogs per week</PricingCardFeature>
                  <PricingCardFeature>3 videos per week </PricingCardFeature>
                  <PricingCardFeature>Unlimited comments</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited blog posts</PricingCardFeature>
                  <PricingCardFeature>Unlimited video uploads</PricingCardFeature>
                  <PricingCardFeature>Unlimited comments</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>

            <Link to= '/signup/sponsor' onMouseEnter={onHover} onMouseLeave = {onHover}>
            Sign up as a Sponsor{hover ? <ArrowForward/> : <ArrowRight/>}  
            </Link>

        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default SponsorPackages