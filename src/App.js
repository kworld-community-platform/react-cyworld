import "./App.css";
import { useState, useEffect } from "react";
import profileImg from "./assets/character.jpg";
import tempImg from "./assets/image.png";
function App() {
  const [bgImg, setBgImg] = useState(null);
  useEffect(() => {
    if (bgImg) return;
    fetch("https://picsum.photos/1920/1080")
      .then((res) => {
        setBgImg(res.url);
        document.querySelector(
          ".App"
        ).style.backgroundImage = `url(${res.url})`;
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <div className="App">
      <div className="cyworld">
        <div className="miniHome">
          <div className="blogTotalInfo">
            <div className="visited">TODAY: 0, TOTAL : 1000</div>
            <div className="blogInfo">
              <div className="profileImg">
                <img src={profileImg}></img>
              </div>
              <div className="todayIs">TODAY IS ... 맑음</div>
              <div className="profileWelcome">인사말 ㅎㅇ ㅎㅇ</div>
              <div className="userInfo">
                <div className="userName">이름</div>
                <div className="userEmail">유저 아이디</div>
                <div className="friendsList">일촌 리스트</div>
              </div>
              <div className="waveHome">
                <button className="wave_random">전체 파도타기</button>
                <button className="wave_ilchone">일촌 파도타기</button>
              </div>
            </div>
          </div>
          <div className="pageContent">
            <div className="homeTitle">
              <div className="title">홈페이지 타이틀</div>
              <div className="titleInfo">홈페이지 주소</div>
            </div>
            <div className="homeContent">
              <div className="content">
                {/* <div className="updatedNews">최신 소식</div>
                <div className="bgmList">BGM LIST</div> */}
                <div className="miniRoom">
                  <img src={tempImg}></img>
                </div>
                <div className="ilchonePyung">
                  일촌평
                  <form>
                    <input type="text" placeholder="별명"></input>
                    <input
                      type="text"
                      placeholder="일촌평을 남겨주세요"
                    ></input>
                    <button>등록</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="contentMenu">
            <div className="menu_home">홈</div>
            <div className="menu_diary">다이어리</div>
            <div className="menu_photo">사진첩</div>
            <div className="menu_board">게시판</div>
            <div className="menu_guestbook">방명록</div>
            <div className="menu_ilchone">일촌관리</div>
          </div>
        </div>
        <div className="sideBar">
          <div className="myStatus">내 스펙</div>
          <div className="useItems">사용중인 아이템</div>
          <div className="setting">
            <div className="logout">로그아웃</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
