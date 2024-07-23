import React from "react";
import nodata from "../../../assets/nodata.png";

const NoPostProfile = ({ setJoinedDAO  }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-2 bg-slate-100">
      <img src={nodata} alt="No Data" className="mb-1 " />
      <p className="text-center text-gray-700 text-[16px]">
      You have not created any posts yet!
      </p>
    </div>
  );
};
export default NoPostProfile;
