import "./App.css";
import { useState, useEffect } from "react";

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
        <div className="blogTotalInfo">
          <div className="visited">TODAY: 0, TOTAL : 1000</div>
          <div className="blogInfo">
            <div className="profileImg">프로필 사진 </div>
            <div className="todayIs">TODAY IS ... 맑음</div>
            <div className="profileWelcome">인사말 ㅎㅇ ㅎㅇ</div>
            <div className="userMenu">
              <div className="userName">이름</div>
              <div className="userEmail">유저 아이디</div>
              <div className="friendsList">일촌 리스트</div>
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
              <div className="updatedNews">최신 소식</div>
              <div className="bgmList">BGM LIST</div>
              <div className="miniRoom">MINI ROOM 여기 어쩜?</div>
              <div className="guestbook">방명록</div>
            </div>
            <div className="contentMenu">메뉴바</div>
          </div>
        </div>
        <div className="sideBar">
          <div className="myStatus"></div>
          <div className="useItems"></div>
          <div className="setting">
            <div className="logout"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
