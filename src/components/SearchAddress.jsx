import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";

import styles from "../assets/Icon.module.scss";
import { BsSearch } from "react-icons/bs";
import { getCookie } from "../util/Cookie";

const SearchAddress = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [address, setAddress] = useState("");
  const [clickedBox, setClickedBox] = useState();
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [indexBool, setIndexBool] = useState(false);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const overlayMargin =
    window.innerHeight > 812 ? (window.innerHeight - 812) / 2 : "0px";

  // When modal closed, call function initialize()
  const initialize = () => {
    setModalIsOpen(false);
    setSearchClicked(false);
    setClickedIndex(-1);
    setIndexBool(false);
  };

  // When search button in modal content clicked, call function checkAddress(value)
  const checkAddress = (value) => {
    setSearchClicked(true);
    setAddress(value);
    // initialize state
    setClickedIndex(-1);
    setIndexBool(false);

    setLoading(true);
  };

  let searchData = [];

  const search = async (keyword) => {
    searchData = [];
    
    await axios
      .get(
        `${String(
          process.env.REACT_APP_API_URL
        )}/api/v1/address/search?keyword=` + keyword, {
          headers: {
            'Authorization' : `Bearer ${getCookie('access_token')}`
          }
        }
      )
      .then((res) => {
        const result = res.data.data;
        result.forEach((house) => {
          searchData.push(house);
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log("err: ", err);
        window.alert("주소를 다시 한 번 확인해주세요.");
        setSearchClicked(false);
        setClickedIndex(-1);
        setIndexBool(false);
        setLoading(false);
      });
    return searchData;
  };

  const checkClicked = (box, index) => {
    setClickedBox(box);
    setClickedIndex(index);
    setIndexBool(true);
  };

  const enterClick = (e) => {
    if (e.key === 'Enter') {
      checkAddress(document.getElementById('searchAddress').value)
    }
  }

  useEffect(() => {
    if (loading) {
      async function fetchData() {
        const result = await search(address);
        setData(result);
      }
      fetchData();
    } else {
      console.log(loading);
    }
  }, [loading]);

  return (
    <div>
      <button
        className={styles.searchBar}
        type="button"
        onClick={() => setModalIsOpen(true)}
      >
        주소를 입력해 주세요 <BsSearch className={styles.bsSearch} />{" "}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => initialize()}
        style={{
          overlay: {
            position: "fixed",
            width: "375px",
            height: "812px",
            margin: "0 auto",
            marginTop: overlayMargin,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            width: "375px",
            marginTop: "88px",
            marginLeft: "-40px",
            marginBottom: "-40px",
            //paddingTop: '42px',
            //textAlign: 'center',
            borderRadius: "40px 40px 0px 0px",
          },
        }}
      >
        <div className={styles.searchDiv}>
          {/** search bar in modal content */}
          <input
            className={styles.searchBar}
            id="searchAddress"
            style={{
              width: "100%",
              top: "-30px",
              paddingRight: "45px",
            }}
            type="text"
            placeholder="주소를 입력해 주세요"
            onKeyDown={enterClick}
          />
          <BsSearch
            style={{
              position: "absolute",
              top: "32px",
              right: "18px",
            }}
            // search button clicked, call function checkAddress(value)
            onClick={() =>
              checkAddress(document.getElementById("searchAddress").value)
            }
          />
        </div>

        {searchClicked &&
          !loading && ( // if search button status is clicked, show search details
            <>
              {!(data.length === 0) && (
                <>
                  <ul className={styles.searchBox}>
                    <div>
                      {data.map((e, i) => (
                        <div
                          className={
                            i === clickedIndex
                              ? styles.clicked
                              : styles.searchBlock
                          }
                          key={i}
                          onClick={() => checkClicked(e, i)}
                        >
                          <div>{e.complexType}</div>
                          <div>
                            {e.detailAddress} [{e.landCode}]
                          </div>
                        </div>
                      ))}
                    </div>
                  </ul>
                  {indexBool ? ( // if user select address,
                    <Link
                      to="/checkRentalFree"
                      state={{ address: data[clickedIndex] }} //checkRental
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        style={{
                          margin: "auto",
                          display: "block",
                          width: "110px",
                          fontWeight: "600",
                          border: "1px solid lightgray",
                          borderRadius: "20px",
                        }}
                      >
                        다음
                      </button>
                    </Link>
                  ) : (
                    // else (if user does not select address),
                    <Link to="/noAddress">
                      <div
                        className={styles.helpDiv}
                        style={{ marginTop: "40%" }}
                      >
                        주소가 안나와요!
                      </div>
                    </Link>
                  )}
                </>
              )}
              {data.length === 0 && (
                <>
                  <div
                    className={styles.subTitleText}
                    style={{ marginTop: "1.3em", textAlign: "center" }}
                  >
                    검색 결과가 없습니다.
                  </div>
                  <div
                    className={styles.box}
                    style={{
                      marginTop: "50px",
                      width: "95%",
                      height: "350px",
                      borderRadius: "7%",
                    }}
                  >
                    <ul style={{ color: "gray" }}>
                      <li
                        className={styles.commonText}
                        style={{ marginBottom: "1.3em" }}
                      >
                        {" "}
                        오타가 있는지 확인해보세요.{" "}
                      </li>
                      <li
                        className={styles.commonText}
                        style={{ marginBottom: "1.3em" }}
                      >
                        {" "}
                        도로명주소로 조회되지 않는 경우 지번주소를 입력해보세요.{" "}
                      </li>
                      <li
                        className={styles.commonText}
                        style={{ marginBottom: "0" }}
                      >
                        {" "}
                        빌라/주택의 경우 검색결과가 건물 통째로 나올 수 있어요!{" "}
                      </li>
                      <li
                        className={styles.commonText}
                        style={{ marginBottom: "1.3em", listStyle: "none" }}
                      >
                        {" "}
                        내가 계약할 호수가 없다고 당황하지 말고 건물 주소로
                        안전도 분석을 받아주세요.{" "}
                      </li>
                      <li
                        className={styles.commonText}
                        style={{ marginBottom: "1.3em" }}
                      >
                        {" "}
                        지은지 얼마 안된 빌라/아파트/오피스텔의 경우 아직
                        등기부등본이 없을 수 있어요.
                      </li>
                    </ul>
                    <Link
                      to="/attention"
                      style={{ color: "gray", textUnderlinePosition: "under" }}
                    >
                      <div
                        className={styles.commonText}
                        style={{
                          textAlign: "center",
                          marginLeft: "1em",
                          marginTop: "3em",
                          fontSize: "0.7em",
                          color: "gray",
                        }}
                      >
                        신축 빌라/아파트/오피스텔 거래 주의사항 보기
                      </div>
                    </Link>
                  </div>
                  <Link
                    to="/googleForm"
                    style={{ color: "black", textUnderlinePosition: "under" }}
                  >
                    <div
                      className={styles.commonText}
                      style={{
                        textAlign: "center",
                        marginTop: "5em",
                        fontSize: "0.7em",
                      }}
                    >
                      그래도 주소가 안나와요!
                    </div>
                  </Link>
                </>
              )}
            </>
          )}
        {!searchClicked && ( // if search button status is not clicked, show search tips
          <>
            <div className={styles.searchH2}>검색 Tip</div>
            <div className={styles.searchH3}>• 도로명 + 건물번호</div>
            <div className={styles.searchH3}>• 동/읍/면/리 + 번지</div>
            <div className={styles.searchH3}>• 건물명, 아파트명</div>

            <div className={styles.searchEx}>
              ex) 서울시 마포구 00아파트 제 00동 제 00호
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

Modal.setAppElement("#root");

export default SearchAddress;
