import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import "../assets/styles/randomGame.css";

const RandomButtonPage = () => {
  const [playersCount, setPlayersCount] = useState<number>(0);
  const [coffeeBuyersCount, setCoffeeBuyersCount] = useState<number | null>(
    null
  );
  const [winners, setWinners] = useState<number[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<number[]>([]);

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

  const handleStartGame = () => {
    const numbers: number[] = [];
    while (numbers.length < coffeeBuyersCount!) {
      const randomNumber = Math.floor(Math.random() * playersCount!) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    setWinners(numbers);
  };

  const handlePlayerButtonClick = (player: number) => {
    setSelectedPlayer([...selectedPlayer, player]);
  };

  function intersect(arr1: number[], arr2: number[]) {
    // 결과를 담을 배열
    const result = [];

    // 각 배열의 요소를 반복하면서 겹치는 숫자를 찾음
    for (const num of arr1) {
      if (arr2.includes(num)) {
        result.push(num);
      }
    }

    return result;
  }

  const intersectingNumbers = intersect(selectedPlayer, winners);

  return (
    <div>
      <div
        className="futura font24"
        style={{ paddingTop: "60px", fontWeight: "bolder" }}
      >
        [ Random Button ]
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
              <div>2. 생성된 버튼을 클릭해 결과를 확인합니다.</div>
            </div>
          </div>
        </div>
      )}
      {!coffeeBuyersCount && playersCount ? (
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
      ) : (
        <></>
      )}
      {playersCount && coffeeBuyersCount && winners.length === 0 ? (
        <div className="mt_30">
          <div style={{ marginBottom: 40, fontSize: 22 }}>
            <div style={{ marginBottom: 20 }}>참가 인원 : {playersCount}</div>

            <div>당첨 인원 : {coffeeBuyersCount}</div>
          </div>
          <button
            className="button-28 futura"
            role="button"
            onClick={() => {
              handleStartGame();
            }}
          >
            결과 확인
          </button>
        </div>
      ) : (
        <></>
      )}
      {winners.length > 0 && (
        <div className="KoddiUDOnGothic-Regular mt_30 animate__animated animate__slideInUp">
          <div style={{ marginBottom: 40, fontSize: 24 }}>
            {Array.from({ length: playersCount }, (_, i) => i + 1).map(
              (player) => (
                <button
                  disabled={selectedPlayer.includes(player)}
                  className={`button-29 
                   ${intersectingNumbers.includes(player) && "winner_button"} `}
                  role="button"
                  style={{ fontSize: 16 }}
                  onClick={() => {
                    handlePlayerButtonClick(player);
                  }}
                >
                  {!selectedPlayer.includes(player) && <>{player}</>}
                  {selectedPlayer.includes(player) &&
                    intersectingNumbers.includes(player) && <>☠️</>}
                  {selectedPlayer.includes(player) &&
                    !intersectingNumbers.includes(player) && <>🎉</>}
                </button>
              )
            )}
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

export default RandomButtonPage;
