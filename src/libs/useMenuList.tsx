import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import _ from "lodash";

const useMenuList = () => {
  const [locations, setLocations] = useState<any>([]);

  const secretKey = process.env.REACT_APP_ENCRYPTION_KEY;

  const REACT_APP_HANNAMDONG_LIST = [
    { env: process.env.REACT_APP_HANNAMDONG_LIST_1 },
    { env: process.env.REACT_APP_HANNAMDONG_LIST_2 },
    { env: process.env.REACT_APP_HANNAMDONG_LIST_3 },
  ];

  const decryptedJson = (encryptedData: string) => {
    /** @ts-ignore */
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    decryptedData.map((item: any) => {
      locations.push(item);
    });
    const cloneLocations = _.cloneDeep(locations);
    setLocations(cloneLocations);
  };

  useEffect(() => {
    REACT_APP_HANNAMDONG_LIST.map((item: any) => {
      !_.isUndefined(item.env) && decryptedJson(item.env);
    });
  }, []);

  return locations;
};

export default useMenuList;
