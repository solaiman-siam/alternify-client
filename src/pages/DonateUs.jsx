import { useState } from "react";
import { Helmet } from "react-helmet-async";

function DonateUs() {
  const [doller, setDoller] = useState("");

  console.log(doller);

  return (
    <div className="bg-[#ff81321c]  p-14">
      <Helmet>
        <title>Alternify | Donate Us</title>
      </Helmet>
      <div className=" bg-white p-16  mx-auto max-w-7xl">
        <h3 className="text-4xl font-bold pb-8">Donate</h3>
        <h4 className="font-medium text-lg">
          Your support is essential to keep this movement growing.{" "}
        </h4>
        <h4 className="font-thin text-lg pt-3 text-gray-600">
          PACBI, on behalf of the BDS movement.
        </h4>
        <div className="flex justify-center py-20">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <button
                onClick={() => setDoller("20")}
                className="px-4 py-2 text-lg cursor-pointer font-semibold text-white rounded-md bg-orange-400"
              >
                $20
              </button>
              <button
                onClick={() => setDoller("50")}
                className="px-4 py-2 text-lg cursor-pointer font-semibold text-white rounded-md bg-orange-400"
              >
                $50
              </button>
              <button
                onClick={() => setDoller("100")}
                className="px-4 py-2 text-lg cursor-pointer font-semibold text-white rounded-md bg-orange-400"
              >
                $100
              </button>
              <button
                onClick={() => setDoller("250")}
                className="px-4 py-2 text-lg cursor-pointer font-semibold text-white rounded-md bg-orange-400"
              >
                $250
              </button>
              <button
                onClick={() => setDoller("500")}
                className="px-4 py-2 text-lg cursor-pointer font-semibold text-white rounded-md bg-orange-400"
              >
                $500
              </button>
              <button
                onClick={() => setDoller("")}
                className="px-4 py-2 text-lg cursor-pointer font-semibold text-white rounded-md bg-orange-400"
              >
                Others
              </button>
            </div>
            <div className="flex justify-center items-center mt-6">
              <p className="px-4 py-2 font-thin text-gray-700 rounded-l-sm  bg-gray-200">
                USD $
              </p>
              <input
                className=" border border-orange-400 text-gray-600  rounded-r-sm "
                type="text"
                placeholder="Enter Amount"
                name="inputDoller"
                id=""
                defaultValue={doller}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-left px-52">
          <form action="text-left">
            <h3 className="text-3xl font-extralight text-gray-600">
              My Billing Information
            </h3>
            <div>
              <div className="bg-white flex flex-col gap-6 py-6 rounded-md w-full">
                <div className="relative bg-inherit">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="peer bg-transparent h-14 w-full rounded-sm text-gray-800 placeholder-transparent  border-black  focus:outline-none "
                    placeholder="Type inside me"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-800 bg-inherit mx-1 px-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative bg-inherit">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="peer bg-transparent h-14 w-full rounded-sm text-gray-6700 placeholder-transparent  border-black  focus:outline-none "
                    placeholder="Type inside me"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-600 bg-inherit mx-1 px-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Last Name
                  </label>
                </div>
                <div className="relative bg-inherit">
                  <select
                    id="countries"
                    className="peer bg-transparent h-14 w-full rounded-sm text-gray-600 placeholder-transparent  border-black  focus:outline-none "
                  >
                    <option selected value={"US"}>
                      United States
                    </option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="relative bg-inherit">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="peer bg-transparent h-14 w-full rounded-sm text-gray-800 placeholder-transparent  border-black  focus:outline-none "
                    placeholder="Type inside me"
                  />
                  <label
                    htmlFor="email"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-800 bg-inherit mx-1 px-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Email Address
                  </label>
                </div>
              </div>
              <div>
                <h3 className="text-3xl py-4 text-gray-700">Payment Options</h3>
                <div className="bg-orange-100 w-full rounded-sm p-1 flex justify-center">
                  <img src="https://i.ibb.co/xGk3DLX/creditcards.png" alt="" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonateUs;
