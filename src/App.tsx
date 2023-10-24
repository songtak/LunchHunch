import React, { useState } from "react";
import "./Web.css";
import "./Mobile.css";
import CryptoJS from "crypto-js";

import DatePicker from "@mui/lab/DatePicker";
import { TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import koLocale from "date-fns/locale/ko";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import _ from "lodash";

const App = () => {
  return (
    <div className="App">
      <div className="title">Lunch Hunch</div>
      <div className="title_sub">한남동 직장인 점심메뉴 추천</div>

      <div className="footer">songtak</div>
    </div>
  );
};

export default App;
