import React, { useState } from "react";
import "./DaoProfile.scss";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import BigCircleComponent from "../../Components/Ellipse-Animation/BigCircle/BigCircleComponent";
import SmallCircleComponent from "../../Components/Ellipse-Animation/SmallCircle/SmallCircleComponent";
import MediumCircleComponent from "../../Components/Ellipse-Animation/MediumCircle/MediumCircleComponent";
import BigCircleAnimation from "../../Components/Ellipse-Animation/BigCircle/BigCircleAnimation.json";
import SmallCircleAnimation from "../../Components/Ellipse-Animation/SmallCircle/SmallCircleAnimation.json";
import BigCircle from "../../../assets/BigCircle.png";
import MediumCircle from "../../../assets/MediumCircle.png";
import SmallestCircle from "../../../assets/SmallestCircle.png";
import MyProfileRectangle from "../../../assets/MyProfileRectangle.png";
import ProposalsContent from "../../Components/DaoProfile/ProposalsContent";
import FeedsContent from "../../Components/DaoProfile/FeedsContent";
import Members from "../../Components/DaoProfile/Members";
import FollowersContent from "../../Components/DaoProfile/FollowersContent";
import FundsContent from "../../Components/DaoProfile/FundsContent";
import DaoSettings from "../../Components/DaoSettings/DaoSettings";
import Container from "../../Components/Container/Container";

const DaoProfile = () => {
  const className = "DaoProfile";
  const [activeLink, setActiveLink] = useState("proposals");
  const navigate = useNavigate();

  const handleClick = (linkName) => {
    setActiveLink(linkName);
    navigate(`/dao/profile/${linkName}`);
  };

  // Animation options for the big circle
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BigCircleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      id: "lottie-bigCircle",
    },
  };

  // Animation options for the small circle
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: SmallCircleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      id: "lottie-smallCircle",
    },
  };

  // Animation options for the medium circle
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: SmallCircleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      id: "lottie-mediumCircle",
    },
  };

  return (
    <div className={className + " bg-zinc-200 w-full relative"}>
      <div
        className={
          className +
          "__topComponent w-full lg:h-[25vh] h-[20vh] md:p-20 pt-6 pl-2 flex flex-col items-start md:justify-center relative"
        }
        style={{
          backgroundImage: `url("${MyProfileRectangle}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute z-22 top-0 left-0 w-full h-full overflow-x-hidden">
          {/* Big circle image */}
          <div className="absolute md:right-[3.7%] -right-[3.7%] top-1/2 -translate-y-1/2">
            <div className="relative tablet:w-[96px] tablet:h-[96px] md:w-[88.19px] md:h-[88.19px] w-[65px] h-[65px]">
              <BigCircleComponent imgSrc={BigCircle} />
            </div>

            {/* Big circle animation */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="tablet:w-[112px] tablet:h-[112px] md:w-[104px] md:h-[104px] w-[75px] h-[75px]">
                <Lottie
                  options={defaultOptions}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="absolute right-[25%] -translate-y-full top-[30%]">
            <div className="relative tablet:w-[43px] tablet:h-[43px] md:w-[33.3px] md:h-[33.3px] w-[21.19px] h-[21.19px]">
              {/* Smallest circle image */}

              <SmallCircleComponent imgSrc={SmallestCircle} />
            </div>

            {/* Small circle animation */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="tablet:w-[47px] tablet:h-[47px] md:w-[37.3px] md:h-[37.3px] w-[23.19px] h-[23.19px]">
                <Lottie
                  options={defaultOptions2}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* Medium circle image */}
          <div className="absolute right-[45%] -translate-y-full top-[95%]">
            <div className="relative tablet:w-[52px] tablet:h-[52px] md:w-[43.25px] md:h-[43.25px] w-[29.28px] h-[29.28px] ">
              <MediumCircleComponent imgSrc={MediumCircle} />
            </div>

            {/* Medium circle animation */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="tablet:w-[60px] tablet:h-[60px] md:w-[47.25px] md:h-[47.25px] w-[33.28px] h-[33.28px]">
                <Lottie
                  options={defaultOptions3}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg-[#c8ced3]"}>
        <Container classes={`${className} __mainComponent lg:py-8 lg:pb-20 py-6 big_phone:px-8 px-6 tablet:flex-row gap-2 flex-col w-full`}>
        <div className="flex md:justify-between w-full md:gap-2 gap-10 z-50 relative flex-wrap">
          <div className="flex items-center">
            <div
              className="w-[85px] h-[49px] lg:w-[207px] lg:h-[120px] bg-[#C2C2C2] md:w-[145px] md:h-[84px] rounded"
              style={{
                boxShadow:
                  "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
              }}
            ></div>
            <div className="lg:ml-10 ml-4">
              <h2 className="lg:text-[40px] md:text-[24px] text-[16px] tablet:font-normal font-medium text-left text-[#05212C]">
                Username.user
              </h2>
              <p className="text-[12px] tablet:text-[16px] font-normal text-left text-[#646464]">
                gmail@gmail.xyz
              </p>
              <div className="md:flex justify-between mt-2 hidden">
                <span className="tablet:mr-5 md:text-[24px] lg:text-[32px] font-normal text-[#05212C] user-acc-info">
                  6 <span className=" md:text-[16px] mx-1">Posts</span>
                </span>
                <span className="md:mx-5 md:text-[24px] lg:text-[32px] font-normal text-[#05212C] user-acc-info">
                  3<span className=" md:text-[16px] mx-1">Followers</span>
                </span>
                <span className="md:mx-5 md:text-[24px] lg:text-[32px] font-normal text-[#05212C] user-acc-info">
                  3<span className=" md:text-[16px] mx-1">Following</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-[-20px] md:hidden">
            <span className="flex flex-col items-center justify-center font-normal">
              <span className="text-[22px] text-[#05212C]">6</span>
              <span className=" text-[14px] mx-1">Posts</span>
            </span>
            <span className="flex flex-col items-center justify-center font-normal ml-8">
              <span className="text-[22px] text-[#05212C]">3</span>
              <span className=" text-[14px] mx-1">Followers</span>
            </span>
            <span className="flex flex-col items-center justify-center font-normal ml-8">
              <span className="text-[22px] text-[#05212C]">3</span>
              <span className=" text-[14px] mx-1">Following</span>
            </span>
          </div>

          <div className="flex md:justify-end gap-4 md:mt-4 tablet:mr-4">
            <button
              onClick={() => navigate("/follow")}
              className="bg-[#0E3746] text-[16px] text-white shadow-xl lg:py-4 lg:px-3 rounded-[27px] lg:w-[131px] lg:h-[40px] md:w-[112px] md:h-[38px] w-[98px] h-[35px] lg:flex items-center justify-center rounded-2xl"
              style={{
                boxShadow:
                  "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
              }}
            >
              Follow
            </button>

            <button
              onClick={() => navigate("/join-dao")}
              className="bg-white text-[16px] text-[#05212C] shadow-xl lg:py-4 lg:px-3 rounded-[27px] lg:w-[131px] lg:h-[40px] md:w-[112px] md:h-[38px] w-[98px] h-[35px] lg:flex items-center justify-center rounded-2xl"
              style={{
                boxShadow:
                  "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
              }}
            >
              Join DAO
            </button>
          </div>
        </div>
        <div
          className={
            className +
            "__navs w-full overflow-auto flex flex-row justify-between mt-8 md:w-[90%] lg:w-[70%] xl:w-[60%] gap-12 lg:text-[16px] text-[14px] pb-2"
          }
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick("proposals");
            }}
            className={`cursor-pointer text-nowrap ${
              activeLink === "proposals"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Proposals
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick("feeds");
            }}
            className={`cursor-pointer text-nowrap ${
              activeLink === "feeds"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Feeds
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick("funds");
            }}
            className={`cursor-pointer text-nowrap ${
              activeLink === "funds"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Funds
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick("member_policy");
            }}
            className={`cursor-pointer text-nowrap ${
              activeLink === "member_policy"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Member & Policy
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick("followers");
            }}
            className={`cursor-pointer text-nowrap ${
              activeLink === "followers"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Followers
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick("settings");
            }}
            className={`cursor-pointer text-nowrap ${
              activeLink === "settings"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Settings
          </button>
        </div>
        {activeLink === "proposals" && <ProposalsContent />}
        {activeLink === "feeds" && <FeedsContent />}
        {activeLink === "member_policy" && <Members />}
        {activeLink === "followers" && <FollowersContent />}
        {activeLink === "funds" && <FundsContent />}
        {activeLink === "settings" && <DaoSettings />}
        </Container>
      </div>
    </div>
  );
};

export default DaoProfile;
