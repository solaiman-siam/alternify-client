import { BiDonateHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

function Donate() {
  return (
    <div className="max-w-7xl mx-auto lg:px-14 px-6 md:px-10 md:py-16 py-12 lg:py-28">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 md:gap-14 gap-10  lg:gap-20">
        <div className="bg-[url('https://i.postimg.cc/1XRghffT/jabalia.webp')] rounded-lg w-full lg:h-[450px] md:[400px] h-[350px] bg-cover bg-center"></div>
        <div className="flex justify-center flex-col">
          <h3 className="text-xl font-medium text-orange-400 pb-4">
            PALESTINIANS NEEDS YOU
          </h3>
          <h2 className="lg:text-4xl dark:text-gray-200 md:text-3xl text-3xl font-semibold pb-4">
            Emergency Relief for Gaza
          </h2>
          <p className="text-slate-500 dark:text-gray-300 pb-8">
            A complete siege has cut off all access to food, water, fuel, and
            electricity, affecting 2.3 million people. Gaza's only power plant
            has shut down, plunging the region into darkness. Hospital
            generators run on limited fuel, and medical staff have warned that
            it's running out. The situation is critical, with lives, especially
            those dependent on life-support equipment, hanging in the balance.
          </p>
          <Link
            to={"/donateUs"}
            className="px-5 w-fit flex text-lg justify-center gap-2 items-center text-white font-medium hover:opacity-70 transition-opacity py-2.5 bg-[#059669] rounded-md"
          >
            <span>Donate Us</span> <BiDonateHeart size={20} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Donate;
