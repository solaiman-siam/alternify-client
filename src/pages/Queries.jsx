import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Queries() {
  const [column, setColumn] = useState("default");

  const [allQueries, setAllQueries] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [
    ...Array(numberOfPages)
      .keys()
      .map((element) => element + 1),
  ];

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/queries-count?search=${search}`
      );
      setCount(data.count);
    };
    getCount();
  }, [search]);

  // get pagination  data

  useEffect(() => {
    const getPagination = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/queries?page=${currentPage}&size=${itemsPerPage}&search=${search}`
      );
      setAllQueries(data);
    };
    getPagination();
  }, [currentPage, itemsPerPage, search]);

  // send page and size

  const handleCurrentPages = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  const sortAllQueries = allQueries.sort((a, b) =>
    b.current_data_time.localeCompare(a.current_data_time)
  );

  return (
    <div className="">
      <Helmet>
        <title>Alternify | Queries</title>
      </Helmet>
      <div className="bg-[#FFF8F1]">
        <div className="bg-[url('https://i.postimg.cc/KzPP4tDC/topographic-large.webp')] w-full h-[200px]  md:h-[220px] lg:h-[250px]">
          <div className="flex max-w-7xl mx-auto justify-center items-center w-ful flex-col h-full">
            <h3 className="text-2xl text-[#FF8A4C] font-semibold  pb-4">
              Explore Ethical Alternatives
            </h3>
            <h2 className="lg:text-6xl dark:text-gray-700 md:text-4xl text-3xl font-semibold">
              The Boycott List
            </h2>
          </div>
        </div>
        {/* breadcrupbs  */}
        <div className="bg-[#f3f3f3e0] ">
          <div className=" mx-auto max-w-7xl  h-16 dark:bg-gray-700 px-14 items-center flex justify-start">
            <Link
              to={"/"}
              className="text-gray-400 dark:text-gray-400 pr-4 hover:text-[#FF8A4C]"
            >
              Home
            </Link>
            <IoIosArrowForward color="#7F8389" />
            <h4 className="text-gray-900 dark:text-gray-200 pl-4">Queries</h4>
          </div>
        </div>
      </div>
      {/* search bar */}
      <div className="bg-[#FFF8F1]">
        <form
          onSubmit={handleSearch}
          className=" max-w-7xl mx-auto dark:bg-gray-900 py-8 "
        >
          <label
            className="mx-auto relative dark:bg-gray-900 bg-[#F3F4F6] min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
            htmlFor="search-bar"
          >
            <input
              id="search-bar"
              name="search"
              placeholder="your keyword here"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-[#FF7F32] border-[#FF7F32] text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
            >
              <div className="relative">
                {/* <!-- Loading animation change opacity to display --> */}
                <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                  <svg
                    className="opacity-0 animate-spin w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>

                <div className="flex items-center transition-all opacity-1 valid:">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Search
                  </span>
                </div>
              </div>
            </button>
          </label>
        </form>
        <div className="flex justify-center dark:bg-gray-900 max-w-7xl mx-auto pt-4 gap-2">
          <button
            onClick={() => setColumn("one")}
            className="px-4 relative py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#FF8A4C] rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          >
            Layout 1
          </button>
          <button
            onClick={() => setColumn("two")}
            className="px-4 relative py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#FF8A4C] rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          >
            Layout 2
          </button>
          <button
            onClick={() => setColumn("default")}
            className="px-4 relative py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#FF8A4C] rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          >
            Default
          </button>
        </div>
      </div>
      <div className="bg-[#FFF8F1]">
        <div
          className={
            column === "one"
              ? "grid lg:grid-cols-1 dark:bg-gray-900 justify-items-center  md:grid-cols-2 grid-cols-1 gap-8 px-14 py-20 max-w-7xl mx-auto "
              : column === "two"
              ? "grid lg:grid-cols-2  dark:bg-gray-900 max-w-7xl mx-auto   md:grid-cols-2 grid-cols-1 gap-8 px-14 py-20 "
              : "grid lg:grid-cols-3 dark:bg-gray-900  max-w-7xl mx-auto  md:grid-cols-2 grid-cols-1 gap-8 px-14 py-20 "
          }
        >
          {sortAllQueries.map((query) => (
            <div
              key={query._id}
              className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
              <div className="w-full flex dark:bg-white  justify-center items-center">
                <img
                  className="object-cover w-24  h-40"
                  src={query.image_url}
                />
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
                    {query.details.substring(0, 100)}...
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
                  <div className=" flex justify-start   mt-6">
                    <Link
                      to={`/product-details/${query._id}`}
                      className="px-4 relative py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#FF8A4C] rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
                    >
                      Recommend
                      <span className="rounded-full bg-[#FF8A4C] border-2 border-white text-white font-medium  -right-4 -top-2 text-center p-0.5 w-6 h-6 bg-[] absolute z-10">
                        {query.recommendation_count}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* pagination button */}

      <div className="flex bg-[#FFF8F1] dark:bg-gray-900 justify-center pb-20">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-orange-400 dark:hover:bg-orange-400 border-2 hover:text-white text-gray-900 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {pages.map((element, idx) => (
          <button
            onClick={() => handleCurrentPages(element)}
            key={idx}
            className={`hidden ${
              currentPage == element
                ? "bg-orange-400 text-white dark:text-black dark:bg-white"
                : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-orange-400 dark:hover:bg-orange-400 hover:text-white text-gray-900 dark:hover:text-gray-200`}
          >
            {element}
          </button>
        ))}

        <button
          onClick={handleNext}
          className="px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-orange-400 dark:hover:bg-orange-400 border-2 hover:text-white text-gray-900 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Queries;
