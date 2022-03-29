import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import axios from "axios";
import styled from "@emotion/styled";
import Layout from "../components/Layout";

import styles from "../assets/Icon.module.scss";
import { ReactComponent as Logo } from "../assets/logoWithCheck.svg";
import NaverLogoImg from "../assets/logoNaver.svg";
import KakaoLogoImg from "../assets/logoKakao.svg";

const Main = () => {
  const KAKAO_CLIENT_ID = String(process.env.REACT_APP_KAKAO_REST_API_KEY);
  const REDIRECT_URI = "http://localhost:3000/main";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  let KAKAO_CODE = new URL(window.location.href).searchParams.get("code");

  const NAVER_CLIENT_ID = String(process.env.REACT_APP_NAVER_CLIENT_ID);
  const NAVER_STATE = "samplestate123123";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_STATE}&redirect_uri=${REDIRECT_URI}`;
  let NAVER_CODE = new URL(window.location.href).searchParams.get("code");
  return (
    <Layout>
      <Wrapper>
        <div>
          <Logo className={styles.icon} />
          <div className={styles.intro}> 안전한 계약을 위한 첫걸음 </div>
        </div>
        <div>
          {/* {KAKAO_CODE && <div>{KAKAO_CODE}</div>} */}
          <LoginButtonContainer>
            <LoginBtn
              id="naverIdLogin"
              provider={"Naver"}
              onClick={() => {
                window.location.href = NAVER_AUTH_URL;
              }}
            >
              <NaverLogo src={NaverLogoImg} alt="naverLogin" />
              <div>네이버로 시작하기</div>
            </LoginBtn>

            <LoginBtn
              provider={"Kakao"}
              onClick={() => {
                window.location.href = KAKAO_AUTH_URL;
              }}
            >
              <KakaoLogo src={KakaoLogoImg} alt="kakaoLogin" />
              <div>카카오로 시작하기</div>
            </LoginBtn>
          </LoginButtonContainer>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Main;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 32px;
`;

const LoginButtonContainer = styled.div`
  height: 114px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.provider === "Kakao" ? "##191919" : "#ffffff")};
  line-height: 21px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${(props) =>
    props.provider === "Kakao" ? "#fee500" : "#03C75A"};
  text-decoration: none;
  border-radius: 25px;
  border: none;
  position: relative;
`;

const NaverLogo = styled.img`
  width: 15.5px;
  height: 15.4px;
  position: absolute;
  left: 17.6px;
`;
const KakaoLogo = styled.img`
  width: 19.5px;
  height: 17.9px;
  position: absolute;
  left: 15.6px;
`;
