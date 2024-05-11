import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const {
    data: product = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product-details"],
    queryFn: () => getData(),
  });

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/product-details/${id}`
    );
    return data;
  };

  console.log(product);

  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 max-w-7xl mx-auto px-14">
        <div className="max-w-2xl px-12 overflow-hidden h-fit my-10 bg-white rounded-lg  dark:bg-gray-800">
          <img
            className="object-cover w-full h-64"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Article"
          />

          <div className="p-6">
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                Product
              </span>
              <a
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabIndex="0"
                role="link"
              >
                I Built A Successful Blog In One Year
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                aliquam mauris egestas quam volutpat viverra. In pretium nec
                senectus erat. Et malesuada lobortis.
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    Jone Doe
                  </a>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                  21 SEP 2015
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-fit rounded-md mt-6  relative m-2">
          <div className="flex items-start justify-between  p-5 pt-2   rounded-t">
            <h4 className="text-2xl font-medium border-b pb-5 w-full">
              Add Alternative Products
            </h4>
          </div>
          {/* form */}
          <div className="p-6 pt-0 space-y-6 h-fit">
            <form>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="product_name"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="product_name"
                    id="product_name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff813211] focus:border-[#ff81320f] block w-full p-2.5"
                    placeholder="Coca Cola"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="query_title"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Query Title
                  </label>
                  <input
                    type="text"
                    name="query_title"
                    id="query_title"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff81321d] focus:border-[#ff81321c] block w-full p-2.5"
                    placeholder="Food And Bevarage"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="brand"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff813210] focus:border-[#ff813214] block w-full p-2.5"
                    placeholder="Coca Cola"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="image_url"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Product Image URL
                  </label>
                  <input
                    type="text"
                    name="image_url"
                    id="image_url"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff813216] focus:border-[#ff81321c] block w-full p-2.5"
                    placeholder="Url"
                    required=""
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="boycotting_reasons_details"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Boycotting Reason Details
                  </label>
                  <textarea
                    id="boycotting_reasons_details"
                    rows="4"
                    name="details"
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
    </div>
  );
}

export default ProductDetails;
