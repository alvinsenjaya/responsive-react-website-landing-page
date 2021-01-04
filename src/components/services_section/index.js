import React from 'react'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

import Icon1 from '../../images/report.svg';
import Icon2 from '../../images/mobile_apps.svg';
import Icon3 from '../../images/car.svg';

const ServicesSection = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}></ServicesIcon>
            <ServicesH2>Fusce lectus neque</ServicesH2>
            <ServicesP>Aenean in arcu lobortis, consequat mi non, elementum enim.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2>Nullam ut lorem diam</ServicesH2>
            <ServicesP>Vivamus volutpat ultrices justo ut dignissim. In laoreet ligula venenatis vehicula cursus.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2>Aliquam erat volutpat</ServicesH2>
            <ServicesP>Duis bibendum consectetur tellus, nec interdum libero dictum eu.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default ServicesSection;
