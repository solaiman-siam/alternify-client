import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

function ProductDetails() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();

  // query client
  const queryClient = useQueryClient();

  // get recommendation collection
  const { data: allRecommendation = [] } = useQuery({
    queryKey: ["product-details"],
    queryFn: () => getRecommendedQueries(),
  });

  const getRecommendedQueries = async () => {
    const { data } = await axiosSecure.get(`/recommended-queries/${id}`);
    return data;
  };

  // product details
  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["product-details", { page: 1 }],
    queryFn: () => getData(),
  });

  const getData = async () => {
    const { data } = await axiosSecure.get(`/product-details/${id}`);
    return data;
  };

  // sumbit recommend form
  const { mutate, refetch } = useMutation({
    mutationFn: async (recommendationData) => {
      const { data } = await axiosSecure.post(
        `${import.meta.env.VITE_API_URL}/add-recommendation`,
        recommendationData
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product-details"],
      });
      refetch;
      Swal.fire({
        title: "Recommedation Added Successfully!",
        icon: "success",
      });
    },
  });

  //   submit recommendation handler
  const handleRecommendation = async (e) => {
    e.preventDefault();
    const form = e.target;
    const recommendation_name = form.product_name.value;
    const recommendation_details = form.details.value;
    const recommendation_title = form.query_title.value;
    const recommendation_image = form.image_url.value;
    const recommendation_brand = form.brand.value;
    const current_data_time = new Date(Date.now()).toLocaleString();

    const recommendationData = {
      recommendation_name,
      recommendation_title,
      recommendation_image,
      recommendation_details,
      recommendation_brand,
      queryId: id,
      recommender_email: user?.email,
      recommender_name: user?.displayName,
      user_name: product.user_name,
      user_email: product.user_email,
      current_data_time,
    };

    await mutate(recommendationData);
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
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Alternify | Details</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 dark:bg-gray-900 grid-cols-1 max-w-7xl mx-auto lg:px-14 px-6 md:px-10">
        <div className="max-w-2xl   overflow-hidden h-fit my-10 bg-white rounded-lg  dark:bg-gray-800">
          <div className="flex justify-center dark:bg-white relative">
            <span className="absolute right-4 top-4 font-bold w-5 h-5 flex justify-center items-center text-white rounded-full bg-orange-400">
              {product.recommendation_count}
            </span>
            <img className="object-cover w-40  h-40" src={product.image_url} />
          </div>

          <div className="lg:p-6 p-0 md:p-4 lg:px-14 md:px-10 px-6">
            <div>
              <span className="text-xs font-medium text-[#FF8A4C] uppercase dark:text-blue-400">
                {product.query_title}
              </span>
              <h4
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 "
                tabIndex="0"
              >
                {product.product_name}
              </h4>
              <h5 className="text-xs text-gray-500">{product.brand}</h5>
              <p className=" mt-4 text-sm text-gray-600 dark:text-gray-400">
                {product.details}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src={product.user_image}
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    {product.user_name}
                  </a>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                  {product?.current_data_time?.split(",")[0]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="bg-white h-fit rounded-md mt-6 dark:bg-gray-900 relative m-2">
          <div className="flex items-start justify-between md:p-4  lg:p-5 pt-2   rounded-t">
            <h4 className="text-2xl dark:text-gray-200 font-medium border-b pb-5 w-full">
              Add Alternative Products
            </h4>
          </div>
          <div className="lg:p-6 p-0 md:p-4 pt-0 space-y-6 h-fit">
            <form onSubmit={handleRecommendation}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="product_name"
                    className="text-sm dark:text-gray-200 font-medium text-gray-900 block mb-2"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="product_name"
                    id="product_name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff813211] focus:border-[#ff81320f] block w-full p-2.5"
                    placeholder="Pepsi"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="query_title"
                    className="text-sm font-medium dark:text-gray-200 text-gray-900 block mb-2"
                  >
                    Query Title
                  </label>
                  <input
                    type="text"
                    name="query_title"
                    id="query_title"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff81321d] focus:border-[#ff81321c] block w-full p-2.5"
                    placeholder="Food And Bevarage"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="brand"
                    className="text-sm font-medium dark:text-gray-200 text-gray-900 block mb-2"
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff813210] focus:border-[#ff813214] block w-full p-2.5"
                    placeholder="PepsiCo"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="image_url"
                    className="text-sm font-medium dark:text-gray-200 text-gray-900 block mb-2"
                  >
                    Product Image URL
                  </label>
                  <input
                    type="text"
                    name="image_url"
                    id="image_url"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff813216] focus:border-[#ff81321c] block w-full p-2.5"
                    placeholder="Url"
                    required
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="boycotting_reasons_details"
                    className="text-sm font-medium dark:text-gray-200 text-gray-900 block mb-2"
                  >
                    Recommendation Reason
                  </label>
                  <textarea
                    id="boycotting_reasons_details"
                    rows="4"
                    name="details"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff813214] focus:border-[#ff81321a] block w-full p-4"
                    placeholder="Details"
                  ></textarea>
                </div>
              </div>
              <div className="p-6 pl-0 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-[#FF7F32] hover:bg-[#ff8132c7] focus:ring-4 focus:ring-[#ff813248] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Add Recommendation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* comment or recommendations */}
      <div className="">
        <h3 className="lg:text-3xl dark:bg-gray-900  text-2xl md:text-3xl font-semibold px-6 md:px-10 lg:px-14 border-b dark:text-gray-200   pb-6">
          All Recommendation Here
        </h3>
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 dark:bg-gray-900 py-14 px-14">
            {allRecommendation < 1 ? (
              <>
                <div className="flex col-span-3 justify-center py-8">
                  <h1 className="text-center dark:text-gray-200 ">
                    No Data Found !!
                  </h1>
                </div>
              </>
            ) : (
              <>
                {allRecommendation.map((query) => (
                  <div
                    key={query._id}
                    className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
                  >
                    <div className="w-1/3 bg-cover dark:bg-white ">
                      <img src={query.recommendation_image} alt="" />
                    </div>

                    <div className="w-2/3 p-4 md:p-4">
                      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                        {query.recommendation_name}
                      </h1>
                      <h4>{query.recommendation_title}</h4>

                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {query?.recommendation_details?.substring(0, 50)}...
                      </p>

                      <div className="flex items-center mt-2">
                        <div className="flex items-center">
                          <a
                            href="#"
                            className=" mr-2 font-semibold text-gray-700 dark:text-gray-200"
                            tabIndex="0"
                            role="link"
                          >
                            {query.recommender_name}
                          </a>
                        </div>
                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                          {query.current_data_time.split(",")[0]}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {query.recommender_email}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
