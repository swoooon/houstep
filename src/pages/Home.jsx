import React from "react";
import styled from "@emotion/styled";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import Layout from "../components/Layout";

import { ReactComponent as MainImg } from "../assets/reportSumSafe.svg";

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <MainCopy>
          <div>이 집, 계약할 때</div>
          <div>
            <MainCopyStrong style={{ textEmphasis: "filled #ff5a56" }}>
              이 부분
            </MainCopyStrong>
            <MainCopyStrong> 주의해야 해요!</MainCopyStrong>
          </div>
        </MainCopy>

        <MainIntro>
          프롭스에서 무료로 받아보는
          <br />
          우리 집 맞춤형 분석 리포트
        </MainIntro>
        <MainImg />
        <PopUpWrapper>
          <FreeBetaWrapper>
            베타 서비스
            <FreeBetaStrong>무료!</FreeBetaStrong>
          </FreeBetaWrapper>
          <Link to="/main">
            <TriggerBtn>우리 집 안전도 분석 받기</TriggerBtn>
          </Link>
        </PopUpWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 20px 32px 163px 32px;
`;

const MainCopy = styled.div`
  font-weight: 900;
  font-size: 30px;
  line-height: 55px;
  color: #4c4c4c;
`;
const MainCopyStrong = styled.span`
  color: #ff5a56;
`;
const MainIntro = styled.p`
  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
  color: #636363;
  margin: 45px 0 54px 0;
`;

const PopUpWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 322px;
  height: 91px;
  position: fixed;
  top: 77vh;
`;
const FreeBetaWrapper = styled.div`
  background: rgba(0, 0, 0, 0.61);
  width: 201px;
  height: 35px;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 13.4px;
  line-height: 20px;
`;
const FreeBetaStrong = styled.span`
  color: #ffde30;
  margin-left: 3.5px;
`;
const TriggerBtn = styled.button`
  text-decoration: none;
  background-color: #5087ff;
  border: none;
  border-radius: 13px;
  width: 322px;
  height: 48px;
  color: white;
  font-weight: 700;
  font-size: 17px;
  line-height: 35px;
`;
