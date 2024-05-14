import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import UpdateModal from "../components/UpdateModal";
import Swal from "sweetalert2";

function MyQueries() {
  const queryClient = useQueryClient();
  const email = localStorage.getItem("email");

  const {
    data: queries = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-queries"],
    queryFn: () => getData(),
  });

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-queries?email=${email}`,
      { withCredentials: true }
    );
    return data;
  };

  // delete query
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-queries/${id}`
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-queries"] });

      console.log("deleted successfully");
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
  });

  const handleDeleteQueries = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id);
      }
    });
  };

  const sortMyQueries = queries.sort((a, b) =>
    b.current_data_time.localeCompare(a.current_data_time)
  );

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
      {/* add queries banner */}
      <div className="bg-[url('https://i.postimg.cc/KzPP4tDC/topographic-large.webp')] w-full h-[250px]">
        <div className="flex justify-center items-center w-ful px-6  flex-col h-full">
          <h3 className="lg:text-3xl dark:text-gray-700 md:text-3xl text-2xl text-center font-semibold  pb-6">
            Be the Voice of Change: Share Your Ethical Finds!
          </h3>
          <Link
            to="/add-queries"
            className="px-4 text-white fon-bold rounded-md py-2 bg-orange-400"
          >
            Add Queries
          </Link>
        </div>
      </div>

      {/* my queries  */}

      <div className="dark:bg-gray-900">
        <div className="bg-[#f3f4f68e] dark:bg-gray-700 h-16 px-14 items-center flex justify-start">
          <Link to={"/"} className="text-gray-400 pr-4 hover:text-[#FF8A4C]">
            Home
          </Link>
          <IoIosArrowForward color="#7F8389" />
          <h4 className="text-gray-900 pl-4 dark:text-gray-300">My Queries</h4>
        </div>
        <h1 className="lg:text-3xl  md:text-3xl text-2xl border-b lg:mx-14 mx-6 md:mx-10   lg:mt-12 md:mt-8 mt-6 dark:text-gray-200  font-semibold md:py-6 py-4 lg:py-8">
          My Products Collection
        </h1>
        {queries < 1 ? (
          <>
            <div className="flex justify-center font-bold dark:text-gray-300 py-20">
              No Data Found
            </div>
          </>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-14 px-14">
              {sortMyQueries.map((query) => (
                <div
                  key={query._id}
                  className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
                >
                  <div className="w-1/3 bg-cover dark:bg-white ">
                    <img src={query.image_url} alt="" />
                  </div>

                  <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                      {query.product_name}
                    </h1>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {query.details.substring(0, 50)}...
                    </p>

                    <div className="flex justify-between mt-3 item-center">
                      <UpdateModal
                        refetch={refetch}
                        query={query}
                      ></UpdateModal>
                      <button
                        onClick={() => handleDeleteQueries(query._id)}
                        className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#FF8A4C] rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
                      >
                        Delete
                      </button>
                      <Link
                        to={`/product-details/${query._id}`}
                        className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-[#FF8A4C]  rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MyQueries;
