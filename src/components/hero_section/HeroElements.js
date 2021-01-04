import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -70px;
  padding: 0 30px;
  height: 670px;
  position: relative;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 50px 0;
`;

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.7;
`

export const HeroContent = styled.div`
  max-width: 1200px;
  margin-top: 70px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: #010606;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: 40px;
  }

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #010606;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px){
    font-size: 24px;
  }

  @media screen and (max-width: 480px){
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`