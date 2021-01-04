import React, {useState} from 'react'
import {Button} from '../ButtonElements'
import {
  HeroContainer, 
  HeroBackground, 
  ImageBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'

import Image from '../../images/city_life.svg'

const HeroSection = () => {
  const [isSignupHover, setIsSignupHover] = useState(false);

  const onSignupHover = () => {
    setIsSignupHover(!isSignupHover);
  }

  return (
    <>
      <HeroContainer id="home">
        <HeroBackground>
          <ImageBackground src={Image} alt="React Website"></ImageBackground>
          {/* <VideoBackground autoPlay loop muted src={Video} type='video/mp4'></VideoBackground> */}
        </HeroBackground>
        <HeroContent onDoubleClick={(e) => e.preventDefault()}>
          <HeroH1>Sed vitae condimentum nibh</HeroH1>
          <HeroP>Fusce lectus neque, lacinia eu neque a, auctor fermentum odio.</HeroP>
          <HeroBtnWrapper>
            <Button to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-70} primary="true" dark="true" onMouseEnter={onSignupHover} onMouseLeave={onSignupHover}>
              Get Started {isSignupHover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection;
