import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";
function Queries() {
  const {
    data: allQueries = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["all-queries"],
    queryFn: () => getData(),
  });

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-queries`
    );
    return data;
  };

  if (isLoading) return "loading.....";

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <div className="bg-[url('https://i.postimg.cc/KzPP4tDC/topographic-large.webp')] w-full h-[250px]">
          <div className="flex justify-center items-center w-ful flex-col h-full">
            <h3 className="text-2xl text-[#FF8A4C] font-semibold  pb-4">
              Explore Ethical Alternatives
            </h3>
            <h2 className="text-6xl font-semibold">The Boycott List</h2>
          </div>
        </div>
        {/* breadcrupbs  */}
        <div className="bg-[#f3f4f68e] h-16 px-14 items-center flex justify-start">
          <Link to={"/"} className="text-gray-400 pr-4 hover:text-[#FF8A4C]">
            Home
          </Link>
          <IoIosArrowForward color="#7F8389" />
          <h4 className="text-gray-900 pl-4">Queries</h4>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 px-14 py-10 bg-gray-100">
        {allQueries.map((query) => (
          <div
            key={query._id}
            className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <div className="w-full flex  justify-center items-center">
              <img className="object-cover w-24  h-40" src={query.image_url} />
            </div>

            <div className="p-6 pt-4 bg-[#ff8b4c0c]">
              <div>
                <span className="text-xs font-medium text-[#FF8A4C] uppercase dark:text-blue-400">
                  {query.query_title}
                </span>
                <h4
                  className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 "
                  tabIndex="0"
                >
                  {query.product_name}
                </h4>
                <h5 className="text-xs text-gray-500">{query.brand}</h5>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {query.details.substring(0, 150)}...
                </p>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img
                      className="object-cover h-10 rounded-full"
                      src={query.user_image}
                    />
                    <a
                      href="#"
                      className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                      tabIndex="0"
                      role="link"
                    >
                      {query.user_name}
                    </a>
                  </div>
                  <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    {query.current_data_time.split(",")[0]}
                  </span>
                </div>
                <div className="   mt-8">
                  <Link
                    to={`/product-details/${query._id}`}
                    className="px-4 relative py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#FF8A4C] rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
                  >
                    Recommend
                    <span className="rounded-full bg-[#FF8A4C] border-2 border-white text-white font-medium  -right-4 -top-2 text-center p-0.5 w-6 h-6 bg-[] absolute z-10">
                      5
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Queries;
