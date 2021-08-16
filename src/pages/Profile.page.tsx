import React, { FC, memo, useContext, useState } from "react";
import { meUpdate } from "../api/auth";
import Button from "../components/Button/Button";
import { User, UserUpdate } from "../modals/User";
import UserContext from "../UserContext";

interface Props {}

const Profile: FC<Props> = (props) => {
  const { user } = useContext(UserContext);

  const [data, setData] = useState<User>(user!);
  const [changedData, setChangedData] = useState<UserUpdate>();

  const onchange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData((data) => {
      return { ...data, [event.target.name]: event.target.value };
    });
    setChangedData((changedData) => {
      return { ...changedData, [event.target.name]: event.target.value };
    });
  };

  const getDaysInMonth = (month: number, year: number): number => {
    if (isNaN(month)) month = 1;
    if (isNaN(year)) year = 2021;

    return new Date(year, month, 0).getDate();
  };

  const days = Array.from(
    Array(
      getDaysInMonth(parseInt(data!.birth_month), parseInt(data!.birth_year))
    ).keys()
  );

  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = Array.from(Array(46).keys());

  return (
    <>
      <div className="border rounded-md bg-white p-5">
        <div className="">
          <h1 className="px-2 pt-4 pb-5 text-md font-bold">
            GENERAL INFORMATION
          </h1>
          <div className="pt-6 font-display text-primaryDark text-base lg:flex lg:items-center lg:pt-0">
            <div className="lg:px-5">
              <img
                src="data:image/png;base64,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"
                alt="Profile Pic"
                className="h-28 w-28 border-none rounded-lg"
              />
              <p className="text-primary pt-2 pb-3 lg:text-center">
                Upload Image
              </p>
            </div>
            <div className="lg:flex-grow lg:px-10">
              <div className="pt-4 sm:flex sm:justify-between md:space-x-2">
                <div className="flex flex-col font-display mb-4 md:flex-grow">
                  <label
                    htmlFor="first_name"
                    className="text-gray-400 text-base"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="border-gray-400 rounded-md border py-1 
                    text-black text-base outline-none pl-1"
                    value={data!.first_name}
                    onChange={(event) => onchange(event)}
                  />
                </div>
                <div className="flex flex-col font-display mb-4 md:flex-grow">
                  <label
                    htmlFor="middle_name"
                    className="text-gray-400 text-base"
                  >
                    Middle Name
                  </label>
                  <input
                    type="text"
                    name="middle_name"
                    className="border-gray-400 rounded-md border py-1 text-black text-base outline-none pl-1"
                    value={data?.middle_name ? data.middle_name : ""}
                    onChange={(event) => onchange(event)}
                  />
                </div>
                <div className="flex flex-col font-display mb-4 md:flex-grow">
                  <label
                    htmlFor="last_name"
                    className="text-gray-400 text-base"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="border-gray-400 rounded-md border py-1 text-black text-base outline-none pl-1"
                    value={data!.last_name}
                    onChange={(event) => onchange(event)}
                  />
                </div>
              </div>
              <div className="flex-col flex">
                <label
                  htmlFor="date_of_birth"
                  className="text-gray-400 text-base"
                >
                  Date of Birth
                </label>
                <div className="flex-col flex sm:flex-row sm:space-x-4">
                  <select
                    name="birth_date"
                    value={data?.birth_date ? data.birth_date : ""}
                    onChange={(event) => {
                      onchange(event);
                    }}
                    className="border-gray-400 rounded-md border py-2 text-black text-base outline-none pl-1 mb-4 flex-grow"
                  >
                    <option value="">Days</option>
                    {days.map((item, index) => {
                      return (
                        <option value={item + 1} key={index}>
                          {item + 1}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name="birth_month"
                    onChange={(event) => onchange(event)}
                    value={data?.birth_month ? data.birth_month : ""}
                    className="border-gray-400 rounded-md border py-2 text-black text-base
                     outline-none pl-1 mb-4 flex-grow"
                  >
                    <option value="">Month</option>
                    {monthName.map((item, index) => {
                      return (
                        <option value={index + 1} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name="birth_year"
                    onChange={(event) => onchange(event)}
                    value={data?.birth_year ? data.birth_year : ""}
                    className="border-gray-400 rounded-md border py-2 text-black text-base outline-none pl-1 mb-4 flex-grow"
                  >
                    <option value="">Year</option>
                    {year.map((item, index) => {
                      return (
                        <option value={item + 1981} key={index}>
                          {item + 1981}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone_number"
                  className="text-gray-400 text-base"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone_number"
                  className="border-gray-400 rounded-md border py-2 text-black text-base outline-none pl-1"
                  value={data!.phone_number}
                  onChange={(event) => onchange(event)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full bg-white p-5">
        <h3 className="px-2 pt-4 pb-5 text-md font-bold lg:text-lg">ABOUT</h3>
        <div className="mx-4 md:mx-10">
          <label
            htmlFor="bio"
            className="font-display text-sm text-gray-700 md:text-base"
          >
            Bio
          </label>
          <textarea
            name="bio"
            className="border h-52 w-full font-display text-gray-500 outline-none p-4"
            value={data!.bio}
            onChange={(event) => onchange(event)}
          />
        </div>
      </div>
      <div
        className="sticky h-14 rounded-tl-lg rounded-tr-lg border-black bottom-0 left-0 right-0 py-3 px-5"
        style={{ background: "#191e3a" }}
      >
        <div className="w-full flex justify-between px-8">
          <Button
            theme="primary"
            type="button"
            onClick={() => {
              setChangedData(undefined);
              setData(user!);
            }}
          >
            Reset All
          </Button>
          <Button
            theme="success"
            type="button"
            onClick={() => {
              meUpdate(changedData).then((user) => {
                window.location.href = "/profile";
              });
            }}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </>
  );
};

export default memo(Profile);
