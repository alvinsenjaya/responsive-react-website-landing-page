import React from 'react'
import { Button } from '../ButtonElements'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Headline,
  Description,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';

const InfoSection = ({data}) => {
  return (
    <>
      <InfoContainer id={data.id} lightBg={data.lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={data.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{data.topLine}</TopLine>
                <Headline lightText={data.lightText}>{data.headline}</Headline>
                <Description lightText={data.lightText}>{data.description}</Description>
                <BtnWrap>
                  <Button to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-70} primary={data.buttonPrimary} dark={data.buttonDark}>
                    {data.buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={data.imgSource} alt={data.imgAlt}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;
