import {
  MdDiversity1,
  MdGite,
  MdOutlineVolunteerActivism,
} from "react-icons/md";

function WeWorkFor() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-[url('https://i.postimg.cc/P5qXrXRY/topographic-large-grey.webp')]  bg-center bg-cover w-full h-[1200px] md:h-[900px] lg:h-[650px]">
        <div className="w-full flex-col justify-center flex md:pt-12 pt-8 lg:pt-20">
          <h3 className="text-orange-400 font-medium lg:text-2xl md:text-2xl text-xl pb-4  text-center">
            We Work For
          </h3>
          <h2 className="font-semibold dark:text-gray-700 lg:text-5xl md:text-4xl text-[26px] text-center ">
            What We Aim to Achieve
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-14 lg:mt-20 mt-8 md:mt-12">
          <div className="bg-white p-8 rounded-md dark:bg-gray-800">
            <div className="bg-[#059669] rounded-full w-fit p-4 mb-4 flex justify-center items-center">
              <MdGite size={30} color="white" />
            </div>
            <h3 className="lg:text-3xl md:text-3xl dark:text-gray-200 text-2xl font-semibold pb-4">
              Recude Illegal Settlements
            </h3>
            <p className="text-slate-500 pr-5 dark:text-gray-300">
              Advocate for actions that decrease the number of illegal
              settlements in the West Bank.
            </p>
          </div>
          <div className="bg-white p-8 rounded-md dark:bg-gray-800">
            <div className="bg-[#059669] rounded-full w-fit p-4 mb-4 flex justify-center items-center">
              <MdOutlineVolunteerActivism size={30} color="white" />
            </div>
            <h3 className="lg:text-3xl md:text-3xl dark:text-gray-200  text-2xl font-semibold pb-4">
              Harmony and Peace for All
            </h3>
            <p className="text-slate-500 pr-5 dark:text-gray-300">
              Support actions that promote peace, dialogue, and reconciliation
              between Israel and Palestine
            </p>
          </div>
          <div className="bg-white p-8 rounded-md dark:bg-gray-800">
            <div className="bg-[#059669] rounded-full w-fit p-4 mb-4 flex justify-center items-center">
              <MdDiversity1 size={30} color="white" />
            </div>
            <h3 className="lg:text-3xl md:text-3xl dark:text-gray-200  text-2xl font-semibold pb-4">
              No to the Israely Apartheid
            </h3>
            <p className="text-slate-500 pr-5 dark:text-gray-300">
              Promote a future without apartheid in Israel, advocating for
              equality and justice for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeWorkFor;
