import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function RecentQueries() {
  const { data: recentQueries = [], isLoading } = useQuery({
    queryKey: ["recent-queries"],
    queryFn: () => getData(),
  });

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/recent-queries`
    );
    return data;
  };

  console.log(recentQueries);

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <l-line-wobble
          size="80"
          stroke="5"
          bg-opacity="0.1"
          speed="1.75"
          color="orange"
        ></l-line-wobble>
      </div>
    );

  const sortRecentQueries = recentQueries.sort((a, b) =>
    b.current_data_time.localeCompare(a.current_data_time)
  );

  // const recentEight = sortRecentQueries.

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid lg:grid-cols-4 dark:bg-gray-900 md:grid-cols-2 grid-cols-1 gap-8 lg:px-14 px-6 md:px-10 py-20 bg-orange-50">
        {sortRecentQueries.slice(0, 8).map((query) => (
          <div
            key={query._id}
            className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <div className="w-full dark:bg-white flex  justify-center items-center">
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
                  {query?.details?.substring(0, 70)}...
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
                      className="mx-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentQueries;
