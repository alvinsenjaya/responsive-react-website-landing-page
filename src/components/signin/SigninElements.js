import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 500px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1,147,86,1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px){
    height: 80%
  }
`

export const Icon = styled(Link)`
  margin-top: 32px;
  margin-bottom: 16px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 32px;
  text-align: center;

  @media screen and (max-width: 480px){
    margin-top: 16px;
  }
`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 480px){
    padding: 10px;
  }
`

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 32px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`