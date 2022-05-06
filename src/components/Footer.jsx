import React from "react";
import styled from "@emotion/styled";

import Logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <Wrapper>
      <DiscriptWrapper>
        <Discription>
          해당 서비스는 등기부등본과 건축물대장 서류에 기재된 사실만을 명시하는 것으로, 법률자문에 해당하지 않으며 계약을 추천하는 것이 아닌 고객님의 판단에 도움을 드리는 서비스로 자사는 정보에 대한 어떠한 법적 책임도 지지 않습니다. 자문이나 권리분석이 필요한 경우 변호사나 해당 물건을 중개한 공인중개사에게 의견을 구하시길 추천드립니다.
        </Discription>
      </DiscriptWrapper>
      <ContactWrap>
        <ContactWrapper>
          <ContactComponent>이용약관 개인정보처리방침</ContactComponent>
        </ContactWrapper>
        <ContactWrapper>
          <ContactComponent>프롭스 | 민즈 | 대표자:성경민,한승민 </ContactComponent>
        </ContactWrapper>
        <ContactWrapper>
          <ContactComponent>통신판매업신고번호:2021-00000-222234</ContactComponent>
        </ContactWrapper>
        <ContactWrapper>
          <ContactComponent>사업자등록번호:102-05-56713 서울특별</ContactComponent>
          <ContactAddress>시 노원구 석계로 96</ContactAddress>
        </ContactWrapper>
      </ContactWrap>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.div`
  background-color: #F5F5F5;
  width: 375px;
  margin: auto;
`

const DiscriptWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 100%;
  background-color: white;
`

const Discription = styled.div`
  font-size: 0.5rem;
  color: lightgray;
  width: 80%;
  margin: auto;
  text-align: center;
`

const ContactWrap = styled.div`
  width: 80%;
  max-width: 1100px;
  height: 100%;
  padding: 2rem 0 2rem 0;
  margin: auto;
`

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0.5rem 0 0.5rem 0;
`
const ContactComponent = styled.div`
  font-size: 0.5rem;
  color: #676767;
  word-spacing: 0.5rem;
`

const ContactAddress = styled.div`
  font-size: 0.5rem;
  color: #676767;
`

const StrongLogo = styled.div`
  width: 1rem;
`
