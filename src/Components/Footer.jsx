function Footer() {
  return (
    <div className="">
      {" "}
      <form action="" className="flex flex-row ml-64 items-center">
        
        <div className="items-center  ml-10">
          <img className="w-36 h-40" src="src/assets/7938113 (1).jpg" alt="" />
          <h4 className="text-black-200  ml-10 text-center">
            LEADING BEST <br />
            CLOTHING <br />
            BRANDS ACROSS <br /> THE GLOBE
          </h4>
        </div>
        <div className="p-20 ml-20">
          <h2 className="mb-6 text-sm text-black-200 ">FOLLOW US</h2>
          <div className="flex mt-20">
            <img className="w-8 h-8 " src="src/assets/download.png" alt="" />
            <img
              className="w-8 h-8 ml-2"
              src="src/assets/download (1).png"
              alt=""
            />
            <img
              className="w-8 h-8 ml-2"
              src="src/assets/download (2).png"
              alt=""
            />
          </div>
        </div>
        <div className="p-20 ml-10">
          <h3 className="mb-6 text-sm text-black-200">CONTACT US</h3>
          <div className="mt-20">
            <h3>0738203784</h3>
          </div>
        </div>
      </form>
      <div className="text-center text-black-200 ml-10">
        <h4>GET THE BEST CLOTHING BRAND WITH US</h4>
      </div>
      <div className="text-center m-3">
        <input
          type="text"
          className="bg--30 border border-gray-300 text-black-200 text-sm rounded-full  p-2 shadow  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className="inline-flex items-center py-2 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Subscribe
        </button>
      </div>
      <div>
        <hr className="mt-4 font-bold" />
      </div>
      <div className="ml-64  items-center">
      <div className="flex text-gray-600 p-3  ml-64">
        <h4 className="p-3">Website terms</h4>

        <h4 className="p-3 ">Privacy Policy</h4>
      </div>
      <span className="text-sm  ml-64  text-gray-500 sm:text-center p-4 dark:text-gray-400">@ 2023 <a href="https://flowbite.com/" className="hover:underline">Samori</a>. All Rights Reserved.
    </span>
    </div>
    </div>
  );
}

export default Footer;
