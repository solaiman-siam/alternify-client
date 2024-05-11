import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

function AddQueries() {
  const { user } = useAuth();

  const handleAddQueries = (e) => {
    e.preventDefault();

    const form = e.target;
    const product_name = form.product_name.value;
    const query_title = form.query_title.value;
    const brand = form.brand.value;
    const image_url = form.image_url.value;
    const details = form.details.value;
    const current_data_time = new Date(Date.now()).toLocaleString();
    console.log(product_name, query_title, brand, image_url);

    const queriesData = {
      product_name,
      query_title,
      brand,
      image_url,
      current_data_time,
      user_name: user?.displayName,
      user_email: user?.email,
      user_image: user?.photoURL,
      recommendation_count: 0,
      details,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/add-queries`, queriesData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Queries Added Successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-white border-4 border-[#ff81323c] rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Add Your Queries</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleAddQueries}>
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
                  rows="6"
                  name="details"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff813214] focus:border-[#ff81321a] block w-full p-4"
                  placeholder="Details"
                ></textarea>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-[#FF7F32] hover:bg-[#ff8132c7] focus:ring-4 focus:ring-[#ff813248] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Add Queries
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddQueries;
