import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import "../assets/styles/randomGame.css";

const RandomNumberPage = () => {
  const [playersCount, setPlayersCount] = useState<number | null>(null);
  const [coffeeBuyersCount, setCoffeeBuyersCount] = useState<number | null>(
    null
  );
  const [winners, setWinners] = useState<number[]>([]);

  const handlePlayersCountChange = (
    e: React.ChangeEvent<{ value: unknown }>
  ) => {
    setPlayersCount(e.target.value as number);
  };

  const handleCoffeeBuyersCountChange = (
    e: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCoffeeBuyersCount(e.target.value as number);
  };

  const generateRandomNumbers = () => {
    const numbers: number[] = [];
    while (numbers.length < coffeeBuyersCount!) {
      const randomNumber = Math.floor(Math.random() * playersCount!) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    setWinners(numbers);
  };

  return (
    <div>
      <div
        className="futura font24"
        style={{ paddingTop: "60px", fontWeight: "bolder" }}
      >
        [ Random Number ]
      </div>
      {!playersCount && (
        <div className="KoddiUDOnGothic-Regular mt_30 animate__animated animate__slideInUp">
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 24 }}>참가 인원</label>
          </div>
          <Select
            placeholder="인원"
            style={{ height: 30, width: 160 }}
            value={playersCount || ""}
            onChange={(e: any) => {
              handlePlayersCountChange(e);
            }}
          >
            {[...Array(11)].map((_, index) => (
              <MenuItem
                key={index + 2}
                value={index + 2}
                style={{ fontSize: 24 }}
              >
                {index + 2}
              </MenuItem>
            ))}
          </Select>

          <div style={{ marginBottom: "24px", marginTop: "64px" }}>
            <div
              style={{
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "bold",
                color: "gray",
              }}
            >
              게임 방법
            </div>
            <div style={{ color: "gray", fontSize: "12px" }}>
              <div style={{ marginBottom: "8px" }}>
                1. 참가 인원과 커피를 살 당첨 인원을 고릅니다.
              </div>
              <div>2. 숫자 1부터 참가 인원 수만큼</div>
              <div style={{ marginBottom: "8px" }}>
                중복되지 않게 각자 숫자를 선택합니다.
              </div>
              <div>3. 당첨 결과 확인</div>
            </div>
          </div>
        </div>
      )}
      {!coffeeBuyersCount && playersCount && (
        <div className="mt_30">
          <div style={{ marginBottom: 24 }}>
            <div style={{ marginBottom: 24, fontSize: 22 }}>
              참가 인원 : {playersCount}
            </div>
            <label style={{ fontSize: 24 }}>당첨 인원</label>
          </div>
          <Select
            style={{ height: 40, width: 160 }}
            value={coffeeBuyersCount || ""}
            onChange={(e: any) => {
              handleCoffeeBuyersCountChange(e);
            }}
          >
            {(playersCount ? [...Array(playersCount - 1)] : []).map(
              (_, index) => (
                <MenuItem
                  key={index + 1}
                  value={index + 1}
                  style={{ fontSize: 24 }}
                >
                  {index + 1}
                </MenuItem>
              )
            )}
          </Select>
        </div>
      )}
      {playersCount && coffeeBuyersCount && winners.length === 0 && (
        <div className="mt_30">
          <div style={{ marginBottom: 40, fontSize: 22 }}>
            <div style={{ marginBottom: 20 }}>참가 인원 : {playersCount}</div>

            <div>당첨 인원 : {coffeeBuyersCount}</div>
          </div>
          <button
            className="button-28 "
            role="button"
            onClick={() => {
              generateRandomNumbers();
            }}
          >
            결과 확인
          </button>
        </div>
      )}
      {winners.length > 0 && (
        <div className="KoddiUDOnGothic-Regular mt_30 animate__animated animate__slideInUp">
          <div style={{ marginBottom: 20, fontSize: 24 }}>당첨^^</div>
          <div className="winners" style={{ marginBottom: 40, fontSize: 32 }}>
            🎉 {winners.join(", ")} 🫵
          </div>

          <div>
            <button
              className="button-28 "
              role="button"
              onClick={() => {
                window.location.reload();
              }}
            >
              다시하기
            </button>
          </div>
          <div className="mt_30">
            <button
              className="button-28 "
              role="button"
              onClick={() => {
                window.location.href = "/#/games";
              }}
            >
              목록으로
            </button>
          </div>
          <div className="KoddiUDOnGothic-Regular mt_30">
            <button
              className="button-27 FuturaBoldItalic"
              role="button"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Lunch Hunch
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomNumberPage;
