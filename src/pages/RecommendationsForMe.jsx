import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

function RecommendationsForMe() {
  const axiosSecure = useAxiosSecure();
  const email = localStorage.getItem("email");

  const { data: recommendationForMe = [], isLoading } = useQuery({
    queryKey: ["recommendation-for-me"],
    queryFn: () => getData(),
  });

  const getData = async () => {
    const { data } = await axiosSecure.get(
      `/recommendation-for-me?email=${email}`
    );
    return data;
  };

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

  return (
    <div className="dark:bg-gray-900">
      <div className="max-w-7xl mx-auto   px-8 pt-5 md:pb-14 pb-10 ">
        <section className="container px-4   mx-auto py-6">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Total Recommendation
            </h2>

            <span className="px-3 py-1 text-xs text-white font-bold bg-orange-400 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {recommendationForMe.length}
            </span>
          </div>

          <div className="flex flex-col  mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Recommended Product</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Brand Name</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Created Date</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Email address
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Actions
                        </th>

                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {recommendationForMe.map((recommend) => (
                        <tr key={recommend._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover w-10 h-10 rounded-full"
                                  src={recommend.recommendation_image}
                                  alt=""
                                />
                                <div>
                                  <h2 className="font-medium text-gray-800 dark:text-white ">
                                    {recommend.recommendation_name}
                                  </h2>
                                  <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                    {recommend.recommendation_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-12 py-4 dark:text-gray-300 text-sm font-medium text-gray-700 whitespace-nowrap">
                            {recommend.recommendation_brand}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {recommend.current_data_time?.split(",")[0]}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {recommend.recommender_email}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <Link
                              to={`/product-details/${recommend.queryId}`}
                              className="px-4 py-2 bg-orange-400 rounded-md text-white"
                            >
                              View Details
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {recommendationForMe < 1 ? (
          <>
            <div className="flex justify-center py-10">
              <h3 className="dark:text-gray-300">No Data Found!!</h3>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default RecommendationsForMe;
