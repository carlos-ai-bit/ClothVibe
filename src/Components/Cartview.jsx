// import React from 'react'

const Cartview = () => {
  return (
    <div className="bg-white">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        referrerPolicy="no-referrer"
      />
      <div className="text-gray-800 text-xl text-center pt-4 font-bold">
        OUR PRODUCTS ARE AS FOLLOWS
      </div>
      <div className="flex mb-6 my-6 p-2 ml-40">
        <div className=" flex p-2 grid  gap-4 grid-cols-3 ">
          <div>
            <div className="w-96">
              <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                  <img
                    className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                    src="https://images.pexels.com/photos/8566066/pexels-photo-8566066.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                  />

                  <div className="flex justify-center">
                    <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white">
                  <a href="#" className="">
                    <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                      ISLAM WEAR
                    </h1>
                  </a>

                  <div className="flex">
                    <div className="">
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <p className="mr-2 text-xs text-gray-600 font-semibold ">
                      $4500.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex p-2 grid  gap-4 grid-cols-3">
          <div>
            <div className="w-96">
              <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                  <img
                    className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                    src="https://images.pexels.com/photos/2060241/pexels-photo-2060241.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                  />

                  <div className="flex justify-center">
                    <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white">
                  <a href="#" className="">
                    <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                      CRISHNA
                    </h1>
                  </a>

                  <div className="flex">
                    <div className="">
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <p className="mr-2 text-xs text-gray-600 font-semibold">
                      $3500.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-2 grid  gap-4 grid-cols-3">
          <div>
            <div className="w-96">
              <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                  <img
                    className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                    src="https://images.pexels.com/photos/2062324/pexels-photo-2062324.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                  />

                  <div className="flex justify-center">
                    <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white">
                  <a href="#" className="">
                    <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                      PLAIN
                    </h1>
                  </a>

                  <div className="flex">
                    <div className="">
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="far fa-star text-gray-400 text-xs"></i>
                      <i className="far fa-star text-gray-400 text-xs"></i>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <p className="mr-2 text-xs text-gray-600 font-semibold">
                      $500.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-6 my-6 p-2  ml-40 ">
        <div className=" flex p-2 grid  gap-4 grid-cols-3 ">
          <div>
            <div className="w-96">
              <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                  <img
                    className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                    src="https://images.pexels.com/photos/10459947/pexels-photo-10459947.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                  />

                  <div className="flex justify-center">
                    <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white">
                  <a href="#" className="">
                    <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                      LINGERIE
                    </h1>
                  </a>

                  <div className="flex">
                    <div className="">
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="far fa-star text-gray-400 text-xs"></i>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <p className="mr-2 text-xs text-gray-600 font-semibold">
                      $2000.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex p-2 grid  gap-4 grid-cols-3">
          <div>
            <div className="w-96">
              <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                  <img
                    className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                    src="https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                  />

                  <div className="flex justify-center">
                    <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white">
                  <a href="#" className="">
                    <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                      T-SHIRT
                    </h1>
                  </a>

                  <div className="flex">
                    <div className="">
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="far fa-star text-gray-400 text-xs"></i>
                      <i className="far fa-star text-gray-400 text-xs"></i>
                      <i className="far fa-star text-gray-400 text-xs"></i>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <p className="mr-2 text-xs text-gray-600 font-semibold">
                      $400.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-2 grid  gap-4 grid-cols-3">
          <div>
            <div className="w-96">
              <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                  <img
                    className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                    src="https://images.pexels.com/photos/12877333/pexels-photo-12877333.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                  />

                  <div className="flex justify-center">
                    <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white">
                  <a href="#" className="">
                    <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                      SLIC
                    </h1>
                  </a>

                  <div className="flex">
                    <div className="">
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="far fa-star text-gray-400 text-xs"></i>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <p className="mr-2 text-xs text-gray-600 font-semibold">
                      $1000.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-6 my-6 p-2  ml-40">
        <div className=" flex p-2 grid  gap-4 grid-cols-3 ">
          <div>
            <div className="w-96">
              <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                  <img
                    className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                    src="https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                  />

                  <div className="flex justify-center">
                    <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white">
                  <a href="#" className="">
                    <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                      PUFF JACKET
                    </h1>
                  </a>

                  <div className="flex">
                    <div className="">
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <p className="mr-2 text-xs text-gray-600 font-semibold">
                      $2500.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex p-2 grid  gap-4 grid-cols-3">
          <div>
            <div className="w-96">
              <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                  <img
                    className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                    src="https://images.pexels.com/photos/6769357/pexels-photo-6769357.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                  />

                  <div className="flex justify-center">
                    <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white">
                  <a href="#" className="">
                    <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                      DENIM JACKET
                    </h1>
                  </a>

                  <div className="flex">
                    <div className="">
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="far fa-star text-gray-400 text-xs"></i>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <p className="mr-2 text-xs text-gray-600 font-semibold">
                      $750.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-2 grid  gap-4 grid-cols-3">
          <div>
            <div className="w-96">
              <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                  <img
                    className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                    src="https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                  />

                  <div className="flex justify-center">
                    <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
                      >
                        <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white">
                  <a href="#" className="">
                    <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                      JOGGER SUIT
                    </h1>
                  </a>

                  <div className="flex">
                    <div className="">
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="fas fa-star text-yellow-400 text-xs"></i>
                      <i className="far fa-star text-gray-400 text-xs"></i>
                      <i className="far fa-star text-gray-400 text-xs"></i>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <p className="mr-2 text-xs text-gray-600 font-semibold">
                      $900.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartview;
