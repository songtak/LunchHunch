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

  console.log("ddd", selectedPlayer.includes(1));

  console.log("selectedPlayer", selectedPlayer);
  console.log("winners", winners);

  return (
    <div>
      {!playersCount && (
        <div className="KoddiUDOnGothic-Regular mt_30 animate__animated animate__slideInUp">
          <div style={{ marginBottom: 40 }}>
            <label style={{ fontSize: 30 }}>참가 인원</label>
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
        </div>
      )}
      {!coffeeBuyersCount && playersCount && (
        <div>
          <div style={{ marginBottom: 40 }}>
            <div style={{ marginBottom: 40, fontSize: 24 }}>
              참가 인원 : {playersCount}
            </div>
            <label style={{ fontSize: 30 }}>당첨 인원</label>
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
        <div>
          <div style={{ marginBottom: 40, fontSize: 24 }}>
            <div style={{ marginBottom: 20 }}>참가 인원 : {playersCount}</div>

            <div>당첨 인원 : {coffeeBuyersCount}</div>
          </div>
          <button
            className="button-28 "
            role="button"
            onClick={() => {
              handleStartGame();
            }}
          >
            start
          </button>
        </div>
      )}
      {winners.length > 0 && (
        <div className="KoddiUDOnGothic-Regular mt_30 animate__animated animate__slideInUp">
          <div style={{ marginBottom: 40, fontSize: 32 }}>
            {Array.from({ length: playersCount }, (_, i) => i + 1).map(
              (player) => (
                <button
                  className={`button-29 ${
                    selectedPlayer.includes(player) && "disabled"
                  }`}
                  role="button"
                  onClick={() => {
                    console.log(
                      "selectedPlayer.includes(player)",
                      selectedPlayer.includes(player)
                    );

                    // window.location.reload();
                    // !selectedPlayer.includes(player) &&
                    handlePlayerButtonClick(player);
                  }}
                ></button>
                // <button
                //   key={player}
                //   onClick={() => handlePlayerButtonClick(player)}
                //   // disabled={winners.length > 0}
                // >
                //   {`Player ${player}`}
                // </button>
              )
            )}
            {/* 🎉 {winners.join(", ")} 🫵 */}
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
