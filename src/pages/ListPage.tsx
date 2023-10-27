import React from "react";
import useMenuList from "../libs/useMenuList";

const ListPage = ({ setSelectedPage }: any) => {
  const locations = useMenuList();

  console.log("locations", locations);

  const categories = [
    { category: "한식" },
    { category: "중식" },
    { category: "일식" },
    { category: "양식" },
    { category: "패스트푸드" },
    { category: "동남아" },
    { category: "중동/멕시칸" },
    { category: "분식" },
    { category: "기타" },
  ];

  const prices = [
    // {price: }
  ];

  return (
    <div>
      <div className="tap_menu_wrapper"></div>
      <div className="tap_menu_content_wrapper"></div>
    </div>
  );
};

export default ListPage;
