import React, { useState } from "react";
import "./Step4.scss";

const Step4 = ({ data, setData, setActiveStep }) => {
  const [activeStage, setActiveStage] = useState(0);
  const groups = data.step3.map((grp) => grp.name);
  const [inputData, setInputData] = useState({
    proposal: theList(),
    voting: theList(),
  });
  const className = "DAO__Step4";

  {
    /**Mind blowing */
  }
  function theList() {
    const list = groups.reduce((acc, group) => {
      const flag = group == "Council" ? true : false;

      acc[group] = {
        ChangeDAOConfig: flag,
        ChangeDAOPolicy: flag,
        Bounty: flag,
        BountyDone: flag,
        Transfer: flag,
        Polls: flag,
        AddMembers: flag,
        FunctionCalls: flag,
        UpgradeSelf: flag,
        UpgradeRemote: flag,
        setVoteToken: flag,
      };
      return acc;
    }, {});

    return list;
  }

  const permissionList = [
    "ChangeDAOConfig",
    "ChangeDAOPolicy",
    "Bounty",
    "BountyDone",
    "Transfer",
    "Polls",
    "AddMembers",
    "FunctionCalls",
    "UpgradeSelf",
    "UpgradeRemote",
    "setVoteToken",
  ];

  function handleSaveAndNext() {
    setData((prev) => ({
      ...prev,
      step4: inputData,
    }));

    setActiveStep(4);
  }

  function toggleCheckbox(step, groupName, permissionName) {
    const updatedInputData = {
      ...inputData,
      [step]: {
        ...inputData[step],
        [groupName]: {
          ...inputData[step][groupName],
          [permissionName]: !inputData[step][groupName][permissionName],
        },
      },
    };

    // Update the state
    setInputData(updatedInputData);
  }

  return (
    <React.Fragment>
      <div
        className={
          className +
          "__form w-full bg-[#F4F2EC] big_phone:p-10 small_phone:p-4 p-2 big_phone:mx-4 mx-0 rounded-lg flex flex-col gap-4"
        }
      >
        <ul
          className={
            className + "__steps flex flex-row mobile:gap-8 gap-6 px-4"
          }
        >
          <li
            className={`list-disc mobile:text-lg text-sm font-semibold ${
              activeStage == 0 ? "" : "opacity-50"
            }`}
          >
            Proposal Creation
          </li>
          <li
            className={`list-disc mobile:text-lg text-sm font-semibold ${
              activeStage == 1 ? "" : "opacity-50"
            }`}
          >
            Voting Permission
          </li>
        </ul>

        <section>
          <p className="font-semibold mobile:text-base text-sm">
            Select Rights
          </p>
          <p className="text-slate-500 mobile:text-base text-xs">
            Decide what permissions you want to give to DAO groups for creating
            things. You can adjust this later in settings.
          </p>
        </section>

        {activeStage === 0 && (
          <React.Fragment>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="font-semibold big_phone:w-2/5 big_phone:p-4 p-2 pb-4 flex justify-left mobile:text-base text-sm">
                    Actions
                  </th>
                  {Object.keys(inputData.proposal).map((groupName, index) => (
                    <th
                      key={index}
                      className="font-semibold big_phone:p-4 p-2 pb-4 big_phone:text-base text-sm"
                    >
                      {groupName}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {permissionList.map((permissionName, permissionIndex) => (
                  <tr
                    key={permissionIndex}
                    className="border-b border-slate-200"
                  >
                    <td className="big_phone:w-2/5 font-semibold list-disc big_phone:p-4 py-4 p-2 big_phone:text-base text-sm">
                      {permissionName}
                    </td>

                    {Object.keys(inputData.proposal).map(
                      (groupName, groupIndex) => (
                        <td>
                          <div className="flex justify-center">
                            <input
                              key={groupIndex}
                              type="checkbox"
                              className="cursor-pointer"
                              checked={
                                inputData["proposal"][groupName][permissionName]
                              }
                              onChange={() =>
                                toggleCheckbox(
                                  "proposal",
                                  groupName,
                                  permissionName
                                )
                              }
                            />
                          </div>
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            <section className="flex w-full justify-end items-center">
              <button
                type="submit"
                onClick={() => setActiveStage(1)}
                className="flex m-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white mobile:text-base text-sm"
              >
                Next
              </button>
            </section>
          </React.Fragment>
        )}

        {activeStage === 1 && (
          <React.Fragment>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="font-semibold big_phone:w-2/5 big_phone:p-4 py-4 px-2 flex justify-left mobile:text-base text-sm">
                    Actions
                  </th>
                  {Object.keys(inputData.voting).map((groupName, index) => (
                    <th
                      key={index}
                      className="font-semibold big_phone:p-4 py-4 px-2 big_phone:text-base text-sm"
                    >
                      {groupName}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {permissionList.map((permissionName, permissionIndex) => (
                  <tr
                    key={permissionIndex}
                    className="border-b border-slate-200"
                  >
                    <td className="big_phone:w-2/5 font-semibold list-disc big_phone:p-4 py-4 p-2 big_phone:text-base text-sm">
                      {permissionName}
                    </td>

                    {Object.keys(inputData.voting).map(
                      (groupName, groupIndex) => (
                        <td>
                          <div className="flex justify-center">
                            <input
                              key={groupIndex}
                              type="checkbox"
                              className="cursor-pointer"
                              checked={
                                inputData["voting"][groupName][permissionName]
                              }
                              onChange={() =>
                                toggleCheckbox(
                                  "voting",
                                  groupName,
                                  permissionName
                                )
                              }
                            />
                          </div>
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            <section className="flex w-full justify-end items-center">
              <button
                type="submit"
                onClick={() => setActiveStage(0)}
                className="flex m-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white mobile:text-base text-sm"
              >
                Back
              </button>
            </section>
          </React.Fragment>
        )}
      </div>

      <div
        className={
          className +
          "__submitButton w-full flex flex-row items-center justify-end"
        }
      >
        <button
          type="submit"
          onClick={handleSaveAndNext}
          className="flex mobile:m-4 my-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white mobile:text-base text-sm"
        >
          Propose Change
        </button>
      </div>
    </React.Fragment>
  );
};

export default Step4;
