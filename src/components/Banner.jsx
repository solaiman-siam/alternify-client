import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="max-w-7xl pb-24  mx-auto px-6">
      <div className=" flex  w-full  h-[200px] mt-20 ">
        <div className="flex w-full justify-center items-center flex-col">
          <h4 className="text-[#FF7F32] lg:text-2xl md:text-2xl text-xl  font-semibold">
            BOYCOTT FOR PEACE
          </h4>
          <h3 className="lg:text-4xl md:text-3xl dark:text-gray-200 text-2xl font-semibold py-4">
            A Path to Ending Suffering
          </h3>
          <p className="lg:w-6/12 md:w-10/12 dark:text-gray-300  text-center">
            Dive in, explore, and join the movement towards a world where every
            purchase carries the weight of positive impact. Your choice matters
            – let's make it count.
          </p>
          <Link
            to={"/queries"}
            className="flex gap-4 items-center mt-8 lg:px-6 md:px-5 px-4  font-semibold text-white rounded-md py-2 md:py-3 lg:py-3 bg-[#FF7F32]"
          >
            <button>SEE THE BOYCOTT LIST</button>
            <MdArrowRightAlt size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
