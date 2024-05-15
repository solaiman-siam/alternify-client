import { useState } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function UpdateModal({ query }) {
  // toggle modal
  const [openModal, setOpenModal] = useState(false);

  // query client
  const queryClient = useQueryClient();

  // query destructuring
  const {
    _id: id,
    product_name: name,
    query_title: title,
    brand: brands,
    details: product_details,
    image_url: photoURL,
  } = query;

  // update query
  const { mutateAsync } = useMutation({
    mutationFn: async (updateData) => {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-queries/${id}`,
        updateData
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-queries"] });
      // refetch;
      Swal.fire({
        title: "Updated Successful!",
        icon: "success",
      });
      setOpenModal(false);
    },
  });

  // update products info
  const handleUpdateQueries = (e) => {
    e.preventDefault();

    const form = e.target;

    const product_name = form.product_name.value;
    const query_title = form.query_title.value;
    const brand = form.brand.value;
    const image_url = form.image_url.value;
    const details = form.details.value;
    // const current_data_time = new Date(Date.now()).toLocaleString();

    const updateData = {
      product_name,
      query_title,
      brand,
      image_url,
      details,
    };
    mutateAsync(updateData);
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#FF8A4C] rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
      >
        Update
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div className="bg-white px-4 rounded-lg  relative ">
            <div className="flex items-start justify-between pb-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Update Your Queries</h3>
            </div>

            <div className="mt-4 ">
              <form onSubmit={handleUpdateQueries}>
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
                      defaultValue={name}
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
                      defaultValue={title}
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
                      defaultValue={brands}
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
                      defaultValue={photoURL}
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
                      defaultValue={product_details}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#ff813214] focus:border-[#ff81321a] block w-full px-4 py-3"
                      placeholder="Details"
                    ></textarea>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    // onClick={() => setOpenModal(false)}
                    type="submit"
                    className=" px-4 py-1.5 rounded-md text-white font-medium bg-[#FF8A4C]"
                  >
                    Update
                  </button>
                  <button
                    className="border px-4 py-1.5 rounded-md  font-medium"
                    onClick={() => setOpenModal(false)}
                  >
                    Decline
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
UpdateModal.propTypes = {
  query: PropTypes.object
};
export default UpdateModal;
