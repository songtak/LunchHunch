import React from "react";
import "animate.css";

const MainPage = () => {
  return (
    <div>
      <div>
        <div className="title">
          <div className="animate__animated animate__fadeInDown Hugest">
            Lunch Hunch
          </div>
        </div>
        <div className="title_sub animate__animated animate__fadeInUp Hugest">
          .demo
        </div>
      </div>
      <div>
        <div className="title_sub Chilgok">
          <div style={{ fontWeight: 700 }}>한남동 직장인 점심메뉴 추천</div>
          <div style={{ marginTop: "10px", fontSize: 14 }}>
            (* 한남동 맛집 아님, 단순 직장인 점심메뉴 모음, pc에서 보는걸 추천
            드립니다.)
          </div>
        </div>
      </div>
    </div>
    // <div className="App">
    //   <div className="title">Lunch Hunch.demo</div>
    //   <div className="title_sub">
    //     <div>한남동 직장인 점심메뉴 추천</div>
    //     <div style={{ marginTop: "10px", fontSize: 14 }}>
    //       (* 한남동 맛집 아님, 단순 직장인 점심메뉴 모음, pc에서 보는걸 추천
    //       드립니다.)
    //     </div>
    //   </div>
    //   <div style={{ marginTop: 30 }}>추가하고 싶은 점심 여기로 디엠주세요.</div>
    //   <a href="https://instagram.com/sn9tk?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
    //     👉🔮👈
    //   </a>
    //   <div style={{ marginTop: 10, fontSize: 10 }}>
    //     ( 추후 다양한 기능 업데이트 예정입니다. )
    //   </div>
    //   <div className="footer">
    //     <div>songtak@2023.10.24</div>
    //   </div>
    // </div>
  );
};

export default MainPage;
