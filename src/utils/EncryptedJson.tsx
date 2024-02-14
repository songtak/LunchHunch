import React from "react";
import CryptoJS from "crypto-js";
import { list1, list2, list3 } from "./dataList";

const EncryptedJson = () => {
  const secretKey = process.env.REACT_APP_ENCRYPTION_KEY;

  const jsonData = list3;
  // const jsonData = {
  //   name: "John",
  //   age: 30,
  //   city: "New York",
  // };

  // 암호화
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(jsonData),
    /** @ts-ignore */
    secretKey
  ).toString();

  console.log("Encrypted:", encryptedData);

  // 복호화
  /** @ts-ignore */
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  console.log("Decrypted:", decryptedData);

  return (
    <div>
      <div>{encryptedData}</div>
    </div>
  );
};

export default EncryptedJson;
