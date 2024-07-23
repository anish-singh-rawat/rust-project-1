import React from "react";
import SearchProposals from "../Proposals/SearchProposals";
import userImage from "../../../assets/commentUser.jpg";
import { MdAddBox } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { useMediaQuery } from "@mui/material";

const followersList = [
  {
    userKey: 1,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 2,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 3,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 4,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 5,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 6,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 7,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 9,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 10,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 11,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 12,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 13,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
];

const FollowersContent = () => {
  const className = "Followers";

  const minWidth = useMediaQuery("(min-width: 800px)");
  const listTemplateColumns = `repeat(auto-fill, minmax(${
    minWidth ? 300 : 220
  }px, 1fr))`;
  const listContainerStyle = {
    display: "grid",
    gridTemplateColumns: listTemplateColumns,
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-[24px] md:text-[18px] text-[16px] font-bold">
          Followers
        </h1>
      </div>
      <div className="bg-[#F4F2EC] md:pt-3 pt-2 md:pb-8 pb-4 mt-4 md:mb-8 mb-4 rounded-[10px]">
        <div className="flex justify-between items-center px-6 md:mb-3 mb-2">
          <span className="lg:text-[20px] text-[#05212C] font-semibold">
            {followersList.length} Followers
          </span>
          <span className="flex">
            <div className="flex-grow md:flex justify-center px-6 mx-2 hidden md:h-12">
              <SearchProposals
                width="100%"
                bgColor="transparent"
                placeholder="Search by name"
                className="border-2 border-[#AAC8D6] w-full max-w-lg"
              />
            </div>
            <button className="bg-white text-[16px] text-[#05212C] gap-1 md:px-7 shadow-xl py-3 px-3 rounded-full shadow-md flex items-center space-x-4 rounded-2xl">
              <IoFilterSharp />
              <span className="hidden md:block">Filter</span>
            </button>
          </span>
        </div>
        <div className="w-full border-t  border-[#0000004D] md:my-4 mb-3"></div>
        <div className="flex-grow flex justify-center m-2  md:hidden relative">
          <input
            type="search"
            name="groups"
            className="big_phone:w-[400px] w-full rounded-[2rem] py-2 pl-10 bg-[#F4F2EC] border border-[#AAC8D6] "
            placeholder="Search by Name"
          />
          <LuSearch className="ml-4 absolute left-0 bottom-3 text-slate-400" />
        </div>
        <div
          className={
            className + "__body__group__members md:max-h-[400px] max-h-[300px] "
          }
          style={{ overflowY: "scroll" }}
        >
          <div
            className="flex md:flex-row flex-col  md:justify-center lg:justify-start gap-4 flex-wrap bg-white md:mx-7 md:mt-2 mx-2 rounded-[10px] scrollable-container md:p-8 lg:p-6 mobile:p-4 p-2"
            style={listContainerStyle}
          >
            {followersList.map((follower, index) => (
              <div
                key={index}
                className="flex w-full flex-row items-center justify-between border border-[#97C3D3] rounded-lg big_phone:p-4 p-2"
              >
                <section className="flex flex-row items-center gap-2">
                  <img
                    src={follower.userImage}
                    alt="Image"
                    className="big_phone:w-12 w-9 big_phone:h-12 h-9 rounded-[50%] object-cover"
                  />

                  <div className="flex flex-col items-start">
                    <p className="text-center font-semibold big_phone:text-1xl text-sm">
                      {follower.userName}
                    </p>
                    <p className="text-center text-xs">{follower.userEmail}</p>
                  </div>
                </section>

                <section>
                  <MdAddBox className="mx-1 text-[#97C3D3] big_phone:text-2xl text-lg" />
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowersContent;
