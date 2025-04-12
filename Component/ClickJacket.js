import { Link } from "react-router-dom";
import img4 from "../images/jacket.jpg";

const ClickJacket =()=>{
    return(
        <>
         <div className="bg-red-400">
        <div className="border py-3 px-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              <span className="ml-2 font-semibold text-3x1">
              <Link
                to="/"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 mb-22 font-blod text 3x1 text-black"
              >
                Online Shopping.com
              </Link>
              </span>
            </div>

            <div className="ml-6 flex flex-1 gap-x-3">
              <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="text-sm font-medium">Categories</span>
              </div>

              <input
                type="search"
                name="q"
                class="py-2 pl-10 text-sm text-black bg-white border rounded-md focus:outline-none focus:border-primary-500"
                placeholder="Search..."
                autocomplete="off"
              />
            </div>

            <div className="ml-2 flex">
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fill-rule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Orders</span>
              </div>

              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Favorites</span>
              </div>

              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100 ">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    3
                  </span>
                </div>
                <span className="text-sm font-medium">Cart</span>
              </div>

              <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-blue-400">
                <Link
                  to="/Signup"
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-x-2 py-1 px-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Nawabshah</span>
            </div>

            <div className="flex gap-x-9">
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                <Link
                  to="/MoroShoes"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 mb-22 font-blod text 3x1 text-black"
                >
                  Shoes
                </Link>
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Pants
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Shirts
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Teshirts
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Jacket
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Swiper
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Cap
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Glasses
              </span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                Watch
              </span>
            </div>

            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              Now a order
            </span>
          </div>
        </div>
      </div>
        
      <div class="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                Jacket Details
              </p>

              <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                <div class="w-full md:w-40">
                  <img class="w-full hidden md:block" src={img4} alt="dress" />
                </div>
                <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                  <div class="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                      High Quaility Brand Jacket
                    </h3>
                    <div class="flex justify-start items-start flex-col space-y-2">
                      <p class="text-sm dark:text-white leading-none text-gray-800">
                        <span class="dark:text-gray-400 text-black">
                          Style:{" "}
                        </span>{" "}
                        Italic Jacket
                      </p>
                      <p class="text-sm dark:text-white leading-none text-gray-800">
                        <span class="dark:text-gray-400 text-black">
                          Size:{" "}
                        </span>{" "}
                        Large
                      </p>
                      <p class="text-sm dark:text-white leading-none text-gray-800">
                        <span class="dark:text-gray-400 text-black ">
                          Color:{" "}
                        </span>{" "}
                        dark Blue
                      </p>
                      {/* <span
                        className="h-12 px-6 font-semibold rounded-md bg-blue-500 text-white cursor-pointer  py-2"
                        onClick={() => {
                          
                        }}
                      >
                        Buy Now
                      </span> */}
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-80 ">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th>Unit Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="block">Rs. 4000</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              class="w-20 text-sm p-1 border rounded"
                            />
                          </td>
                          <td>
                            <span className="block">Rs. 4000</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                Shoes Details
              </p>

              <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                <div class="w-full md:w-40">
                  <img class="w-full hidden md:block" src={img} alt="dress" />
                </div>
                <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                  <div class="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                      High Quaility Brand Shoes
                    </h3>
                    <div class="flex justify-start items-start flex-col space-y-2">
                      <p class="text-sm dark:text-white leading-none text-gray-800">
                        <span class="dark:text-gray-400 text-black">
                          Style:{" "}
                        </span>{" "}
                        Italic Joker
                      </p>
                      <p class="text-sm dark:text-white leading-none text-gray-800">
                        <span class="dark:text-gray-400 text-black">
                          Size:{" "}
                        </span>{" "}
                        Small
                      </p>
                      <p class="text-sm dark:text-white leading-none text-gray-800">
                        <span class="dark:text-gray-400 text-black ">
                          Color:{" "}
                        </span>{" "}
                        Light Blue
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-80 ">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th>Unit Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="block">Rs. 1200</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              class="w-20 text-sm p-1 border rounded"
                            />
                          </td>
                          <td>
                            <span className="block">Rs. 1200</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Total Product
          </h3>
          <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div class="flex justify-between w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">
                Subtotal
              </p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600 w-34">
                Rs.4000
              </p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">
                Discount{" "}
                <span class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
                  New Buyers
                </span>
              </p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
                500 (20%)
              </p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">
                Devilary Charges
              </p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
                400
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center w-full">
            <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">
              Total
            </p>
            <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
              Rs.4400
            </p>
          </div>
        </div>
      </div>
      <span
        className="h-18 px-8 font-semibold rounded-md bg-blue-500 text-white cursor-pointer  py-4"
        onClick={() => {}}
      >
        Add To a place
      </span>
        </>
    );
}
export default ClickJacket;