import img from "../images/shoes.jpg";
import img1 from "../Component/Pants.jpg";
import img2 from "../images/Shirts.jpg";
import img3 from "../images/Teshirt.jpg";
import img4 from "../images/jacket.jpg";
import img5 from "../images/Swiper.jpg";
import img6 from "../images/cap.jpg";
import img7 from "../images/Glasses.jpg";
import img8 from "../images/Watch.jpg";

import { Link } from "react-router-dom";
const MainPage = () => {
  return (
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
                Online Shopping.com
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

      {/* {-------------------1 row column 1-----------} */}

      <div className="grid grid-rows-3 grid-flow-col gap-4 mt-2">
        <div class="row-start-1 row-end-4">
          <div class="rounded-lg shadow-md overflow-hidden">
            <Link to="/ClickShoes">
              <img
                src={img}
                alt="Product Image"
                class="mt-4"
                width="250px"
                height="250px"
              />
            </Link>

            <div class="p-4">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Shoes
                </h1>

                <div className="w-full flex-none text-2x1 font-medium text-slate-700 mt-2 mb-2">
                  Averiable stock in 34
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">PKR 1,200</span>
                <span class="text-red-500 line-through">PKR 1,500</span>
                <span class="text-green-500">20% off</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2 text-gray-500">4.5 stars</span>
                <svg
                  class="w-4 h-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.928a2.928 2.928 0 0 1 2.606 0.877L16.078 6.184a1.927 1.927 0 0 0 1.414-.416L19.841 3.551a.964.964 0 0 0-.568-1.929L9.049 2.928zM9.049 7.072L15.716 10.316a1.179 1.179 0 0 0 .889.256l1.601-1.113a.964.964 0 0 0 .192-.544L9.049 7.072zM5.447 8.049L4.802 2.551a.964.964 0 0 1 .568-1.929L9.049 2.928L5.447 8.049zM9.049 14.928a2.928 2.928 0 0 1-2.606-.877L2.922 6.816a1.927 1.927 0 0 0-1.414.416L.159 9.449a.964.964 0 0 0 .568-1.929L9.049 14.928z" />
                </svg>
                <span class="ml-2 text-gray-500">(25 reviews)</span>
              </div>
              <div class="">
                <label
                  for="size1"
                  class="block text-gray-700 font-semibold mb-4"
                >
                  Size:
                </label>
                <select
                  id="size1"
                  class="block w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                </select>
              </div>

              <Link
                to="/MoroShoes"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 mt-4 font-blod text 3x1 text-green-600"
              >
                Show moro..
              </Link>
            </div>
          </div>
        </div>

        {/* {-------------------1 row column 2-----------} */}

        <div class="row-start-1 row-end-4">
          <div class="rounded-lg shadow-md overflow-hidden">
            <Link to="/ClickPants">
              <img
                src={img1}
                alt="Product Image"
                class="w-full h-64 object-cover"
                width="300px"
                height="250px"
              />
            </Link>
            <div class="p-4">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Pants
                </h1>

                <div className="w-full flex-none text-2x1 font-medium text-slate-700 mt-2 text-2x1 mt-2 mb-2">
                  Averiable stock in 122
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">PKR 1,600</span>
                <span class="text-red-500 line-through">PKR 2,000</span>
                <span class="text-green-500">20% off</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2 text-gray-500">4.5 stars</span>
                <svg
                  class="w-4 h-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.928a2.928 2.928 0 0 1 2.606 0.877L16.078 6.184a1.927 1.927 0 0 0 1.414-.416L19.841 3.551a.964.964 0 0 0-.568-1.929L9.049 2.928zM9.049 7.072L15.716 10.316a1.179 1.179 0 0 0 .889.256l1.601-1.113a.964.964 0 0 0 .192-.544L9.049 7.072zM5.447 8.049L4.802 2.551a.964.964 0 0 1 .568-1.929L9.049 2.928L5.447 8.049zM9.049 14.928a2.928 2.928 0 0 1-2.606-.877L2.922 6.816a1.927 1.927 0 0 0-1.414.416L.159 9.449a.964.964 0 0 0 .568-1.929L9.049 14.928z" />
                </svg>
                <span class="ml-2 text-gray-500">(275 reviews)</span>
              </div>
              <div class="mt-2">
                <label
                  for="size1"
                  class="block text-gray-700 font-semibold mb-1"
                >
                  Size:
                </label>
                <select
                  id="size1"
                  class="block w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="s">XL</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* {-------------------1 row column  3-----------} */}
        <div class="row-start-1 row-end-4">
          <div class="rounded-lg shadow-md overflow-hidden">
          <Link to="/Clickshirts">
              <img
                src={img2}
                alt="Product Image"
                class="w-full h-64 object-cover"
                width="300px"
                height="250px"
              />
            </Link>
            <div class="p-4">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Shirts
                </h1>

                <div className="w-full flex-none text-2x1 font-medium text-slate-700 mt-2 text-2x1 mt-2 mb-2">
                  Averiable stock in 362
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">PKR 800</span>
                <span class="text-red-500 line-through">PKR 1,000</span>
                <span class="text-green-500">20% off</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2 text-gray-500">4.5 stars</span>
                <svg
                  class="w-4 h-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.928a2.928 2.928 0 0 1 2.606 0.877L16.078 6.184a1.927 1.927 0 0 0 1.414-.416L19.841 3.551a.964.964 0 0 0-.568-1.929L9.049 2.928zM9.049 7.072L15.716 10.316a1.179 1.179 0 0 0 .889.256l1.601-1.113a.964.964 0 0 0 .192-.544L9.049 7.072zM5.447 8.049L4.802 2.551a.964.964 0 0 1 .568-1.929L9.049 2.928L5.447 8.049zM9.049 14.928a2.928 2.928 0 0 1-2.606-.877L2.922 6.816a1.927 1.927 0 0 0-1.414.416L.159 9.449a.964.964 0 0 0 .568-1.929L9.049 14.928z" />
                </svg>
                <span class="ml-2 text-gray-500">(95 reviews)</span>
              </div>
              <div class="mt-2">
                <label
                  for="size1"
                  class="block text-gray-700 font-semibold mb-1"
                >
                  Size:
                </label>
                <select
                  id="size1"
                  class="block w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="s">XL</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------1 row complete--------------------- */}

      {/* {-------------------2 row column 1-----------} */}

      <div className="grid grid-rows-3 grid-flow-col gap-4 mt-2">
        <div class="row-start-1 row-end-4">
          <div class="rounded-lg shadow-md overflow-hidden">
          <Link to="/ClickTeshirt">
              <img
                src={img3}
                alt="Product Image"
                class="w-full h-64 object-cover"
                width="300px"
                height="250px"
              />
            </Link>
            <div class="p-4">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Teshirt
                </h1>

                <div className="w-full flex-none text-2x1 font-medium text-slate-700 mt-2 mb-2">
                  Averiable stock in 34
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">PKR 2,000</span>
                <span class="text-red-500 line-through">PKR 2,500</span>
                <span class="text-green-500">20% off</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2 text-gray-500">4.5 stars</span>
                <svg
                  class="w-4 h-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.928a2.928 2.928 0 0 1 2.606 0.877L16.078 6.184a1.927 1.927 0 0 0 1.414-.416L19.841 3.551a.964.964 0 0 0-.568-1.929L9.049 2.928zM9.049 7.072L15.716 10.316a1.179 1.179 0 0 0 .889.256l1.601-1.113a.964.964 0 0 0 .192-.544L9.049 7.072zM5.447 8.049L4.802 2.551a.964.964 0 0 1 .568-1.929L9.049 2.928L5.447 8.049zM9.049 14.928a2.928 2.928 0 0 1-2.606-.877L2.922 6.816a1.927 1.927 0 0 0-1.414.416L.159 9.449a.964.964 0 0 0 .568-1.929L9.049 14.928z" />
                </svg>
                <span class="ml-2 text-gray-500">(34 reviews)</span>
              </div>
              <div class="mt-2">
                <label
                  for="size1"
                  class="block text-gray-700 font-semibold mb-1"
                >
                  Size:
                </label>
                <select
                  id="size1"
                  class="block w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="s">XS</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="l">XL</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* {-------------------2 row column 2-----------} */}

        <div class="row-start-1 row-end-4">
          <div class="rounded-lg shadow-md overflow-hidden">
          <Link to="/ClickJacket">
              <img
                src={img4}
                alt="Product Image"
                class="w-full h-64 object-cover"
                width="300px"
                height="250px"
              />
            </Link>
            <div class="p-4">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Jacket
                </h1>

                <div className="w-full flex-none text-2x1 font-medium text-slate-700 mt-2 text-2x1 mt-2 mb-2">
                  Averiable stock in 432
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">PKR 4,000</span>
                <span class="text-red-500 line-through">PKR 5,000</span>
                <span class="text-green-500">20% off</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2 text-gray-500">4.5 stars</span>
                <svg
                  class="w-4 h-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.928a2.928 2.928 0 0 1 2.606 0.877L16.078 6.184a1.927 1.927 0 0 0 1.414-.416L19.841 3.551a.964.964 0 0 0-.568-1.929L9.049 2.928zM9.049 7.072L15.716 10.316a1.179 1.179 0 0 0 .889.256l1.601-1.113a.964.964 0 0 0 .192-.544L9.049 7.072zM5.447 8.049L4.802 2.551a.964.964 0 0 1 .568-1.929L9.049 2.928L5.447 8.049zM9.049 14.928a2.928 2.928 0 0 1-2.606-.877L2.922 6.816a1.927 1.927 0 0 0-1.414.416L.159 9.449a.964.964 0 0 0 .568-1.929L9.049 14.928z" />
                </svg>
                <span class="ml-2 text-gray-500">(298 reviews)</span>
              </div>
              <div class="mt-2">
                <label
                  for="size1"
                  class="block text-gray-700 font-semibold mb-1"
                >
                  Size:
                </label>
                <select
                  id="size1"
                  class="block w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="s">XL</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* {-------------------row 2 column 3-----------} */}
        <div class="row-start-1 row-end-4">
          <div class="rounded-lg shadow-md overflow-hidden">
            <Link to="/ClickSwiper">
            <img
              src={img5}
              alt="Product Image"
              class=" w-80 h-64 object-cover "
              width="280px"
              height="300px"
            />
            </Link>
            <div class="p-4">
              <div className="flex flex-wrap">
                <h1 className=" text-lg font-semibold text-slate-900">
                  Swiper
                </h1>

                <div className="w-full flex-none text-2x1 font-medium text-slate-700 mt-2 text-2x1 mt-2 mb-2">
                  Averiable stock in 832
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">PKR 400</span>
                <span class="text-red-500 line-through">PKR 500</span>
                <span class="text-green-500">20% off</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2 text-gray-500">4.5 stars</span>
                <svg
                  class="w-4 h-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.928a2.928 2.928 0 0 1 2.606 0.877L16.078 6.184a1.927 1.927 0 0 0 1.414-.416L19.841 3.551a.964.964 0 0 0-.568-1.929L9.049 2.928zM9.049 7.072L15.716 10.316a1.179 1.179 0 0 0 .889.256l1.601-1.113a.964.964 0 0 0 .192-.544L9.049 7.072zM5.447 8.049L4.802 2.551a.964.964 0 0 1 .568-1.929L9.049 2.928L5.447 8.049zM9.049 14.928a2.928 2.928 0 0 1-2.606-.877L2.922 6.816a1.927 1.927 0 0 0-1.414.416L.159 9.449a.964.964 0 0 0 .568-1.929L9.049 14.928z" />
                </svg>
                <span class="ml-2 text-gray-500">(25 reviews)</span>
              </div>
              <div class="mt-2">
                <label
                  for="size1"
                  class="block text-gray-700 font-semibold mb-1"
                >
                  Size:
                </label>
                <select
                  id="size1"
                  class="block w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="s">XL</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------2 row complete-------------- */}

      {/* {-------------------3 row column 1-----------} */}

      <div className="grid grid-rows-3 grid-flow-col gap-4 mt-2">
        <div class="row-start-1 row-end-4">
          <div class="rounded-lg shadow-md overflow-hidden">
            <Link to="/Clickcap">
            <img
              src={img6}
              alt="Product Image"
              class="w-full h-64 object-cover "
              width="300px"
              height="250px"
            />
            </Link>
            <div class="p-4">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Cap
                </h1>

                <div className="w-full flex-none text-2x1 font-medium text-slate-700 mt-2 mb-2">
                  Averiable stock in 374
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">PKR 480</span>
                <span class="text-red-500 line-through">PKR 600</span>
                <span class="text-green-500">20% off</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2 text-gray-500">4.5 stars</span>
                <svg
                  class="w-4 h-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.928a2.928 2.928 0 0 1 2.606 0.877L16.078 6.184a1.927 1.927 0 0 0 1.414-.416L19.841 3.551a.964.964 0 0 0-.568-1.929L9.049 2.928zM9.049 7.072L15.716 10.316a1.179 1.179 0 0 0 .889.256l1.601-1.113a.964.964 0 0 0 .192-.544L9.049 7.072zM5.447 8.049L4.802 2.551a.964.964 0 0 1 .568-1.929L9.049 2.928L5.447 8.049zM9.049 14.928a2.928 2.928 0 0 1-2.606-.877L2.922 6.816a1.927 1.927 0 0 0-1.414.416L.159 9.449a.964.964 0 0 0 .568-1.929L9.049 14.928z" />
                </svg>
                <span class="ml-2 text-gray-500">(275 reviews)</span>
              </div>
              <div class="mt-2">
                <label
                  for="size1"
                  class="block text-gray-700 font-semibold mb-1"
                >
                  Size:
                </label>
                <select
                  id="size1"
                  class="block w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="s">S</option>
                  <option value="l">L</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* {-------------------3 row column 2-----------} */}

        <div class="row-start-1 row-end-4">
          <div class="rounded-lg shadow-md overflow-hidden">
            <Link to="/ClickGlasses">
            <img
              src={img7}
              alt="Product Image"
              class="w-full h-64 object-cover"
              width="250px"
              height="280px"
            />
            </Link>
            <div class="p-4">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Glasses
                </h1>

                <div className="w-full flex-none text-2x1 font-medium text-slate-700 mt-2 text-2x1 mt-2 mb-2">
                  Averiable stock in 123
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">PKR 320</span>
                <span class="text-red-500 line-through">PKR 400</span>
                <span class="text-green-500">20% off</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2 text-gray-500">4.5 stars</span>
                <svg
                  class="w-4 h-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.928a2.928 2.928 0 0 1 2.606 0.877L16.078 6.184a1.927 1.927 0 0 0 1.414-.416L19.841 3.551a.964.964 0 0 0-.568-1.929L9.049 2.928zM9.049 7.072L15.716 10.316a1.179 1.179 0 0 0 .889.256l1.601-1.113a.964.964 0 0 0 .192-.544L9.049 7.072zM5.447 8.049L4.802 2.551a.964.964 0 0 1 .568-1.929L9.049 2.928L5.447 8.049zM9.049 14.928a2.928 2.928 0 0 1-2.606-.877L2.922 6.816a1.927 1.927 0 0 0-1.414.416L.159 9.449a.964.964 0 0 0 .568-1.929L9.049 14.928z" />
                </svg>
                <span class="ml-2 text-gray-500">(5 reviews)</span>
              </div>
              <div class="mt-2">
                <label
                  for="size1"
                  class="block text-gray-700 font-semibold mb-1"
                >
                  Size:
                </label>
                <select
                  id="size1"
                  class="block w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="m">M</option>
                </select>
              </div>
              {/* <div className="flex-auto flex space-x-4 mt-4">
  <span
    className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white cursor-pointer hover:bg-yellow-400 py-2"
    onClick={() => { }}
  >
    Buy Now
  </span>
  <button
    className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white hover:bg-green-500"
    type="submit"
  >
    Add to Card
  </button>
</div> */}
            </div>
          </div>
        </div>

        {/* {-------------------3 row column  3-----------} */}
        <div class="row-start-1 row-end-4">
          <div class="rounded-lg shadow-md overflow-hidden">
            <Link to="/ClickWatch">
            <img
              src={img8}
              alt="Product Image"
              class="w-full h-64 object-cover"
            />
            </Link>
            <div class="p-4">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Watch
                </h1>

                <div className="w-full flex-none text-2x1 font-medium text-slate-700 mt-2 text-2x1 mt-2 mb-2">
                  Averiable stock in 32
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">PKR 1,120</span>
                <span class="text-red-500 line-through">PKR 1,400</span>
                <span class="text-green-500">20% off</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2 text-gray-500">4.5 stars</span>
                <svg
                  class="w-4 h-4 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.928a2.928 2.928 0 0 1 2.606 0.877L16.078 6.184a1.927 1.927 0 0 0 1.414-.416L19.841 3.551a.964.964 0 0 0-.568-1.929L9.049 2.928zM9.049 7.072L15.716 10.316a1.179 1.179 0 0 0 .889.256l1.601-1.113a.964.964 0 0 0 .192-.544L9.049 7.072zM5.447 8.049L4.802 2.551a.964.964 0 0 1 .568-1.929L9.049 2.928L5.447 8.049zM9.049 14.928a2.928 2.928 0 0 1-2.606-.877L2.922 6.816a1.927 1.927 0 0 0-1.414.416L.159 9.449a.964.964 0 0 0 .568-1.929L9.049 14.928z" />
                </svg>
                <span class="ml-2 text-gray-500">(95 reviews)</span>
              </div>
              <div class="mt-2">
                <label
                  for="size1"
                  class="block text-gray-700 font-semibold mb-1"
                >
                  Size:
                </label>
                <select
                  id="size1"
                  class="block w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="l">L</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------3 row complete--------------------- */}
    </>
  );
};
export default MainPage;

{
  /* 
<div class="flex flex-row overflow-hidden rounded-lg shadow-md">
  <img src={img} alt="Product Image" class="flex-shrink-0 w-48 h-48 object-cover"/>
  <div class="px-4 py-2 flex-grow">
    <h5 class="font-semibold text-gray-700 text-lg mb-2">Product Name</h5>
    <p class="text-gray-500 text-sm mb-2">Product Description</p>
    <div class="flex items-center mb-2">
      <span class="text-gray-700 mr-2">PKR 1,200</span>
      <span class="text-red-500 line-through mr-2">PKR 1,500</span>
      <span class="text-green-500">20% off</span>
    </div>
    <p class="text-gray-600 text-xs">4.5 star rating (25 reviews)</p>
    <div class="mt-2">
      <label for="size" class="text-gray-500 text-sm">Size:</label>
      <select id="size" class="block w-full rounded-md border border-gray-300 px-2 py-1 text-gray-700 shadow-sm">
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
      </select>
    </div>
    <button class="mt-4 text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded-md focus:outline-none">Add to Cart</button>
  </div>
</div> */
}
