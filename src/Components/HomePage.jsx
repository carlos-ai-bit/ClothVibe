// import { RiSearchLine } from "react-icons/ri";
const HomePage = () => {
  return (
    <div className="">
      <section>
        <div className="mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
          <div className="flex mt-1 mb-2">
            {" "}
            <h1 className="mx-2">SAMORI.COM</h1>
            <h1 className="text-blue-400 mx-2">Home</h1>
            <h1>
              <select className="mr-1 rounded-full text-center" name="" id="">
                <option value="">Category</option>
                <option value="clothes">Clothes</option>
                <option value="shoes">Shoes</option>
                <option value="accesories">Accesories</option>
              </select>
            </h1>
            <h1>
              <select className="mx-1 rounded-full text-center" name="" id="">
                <option value=""> Our Products</option>
                <option value="all">All</option>
                <option value="sweaters">Sweaters</option>
                <option value="tops">Tops</option>
                <option value="tops">Under Wear</option>
                <option value="tops">Tops</option>
              </select>
            </h1>
            <a className="mx-1" href="http://">
              About Us
            </a>
            <a className="mx-1" href="http://">
              FAQ
            </a>
            <input
              className="mx-1 rounded-md text-center border-2"
              placeholder="Search"
            ></input>
            {/* <RiSearchLine className="search-icon" /> */}
            <button className="hover:bg-blue-100 dark:hover:bg-blue-500 bg-blue-400 rounded-full text-center py-2.5 px-5">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <div className="text-right">
        <button className="mr-2 hover:bg-blue-100 dark:hover:bg-blue-500 bg-blue-400 rounded-md text-center py-2.5 px-5">
          Login
        </button>
        <button className="ml-3 mr-5  dark:hover:bg-blue-500 bg-blue-400 rounded-md text-center py-2.5 px-5">
          Sign Up
        </button>
      </div>
      <h3 className="font-bold text-center">BEST TRENDY OUTFIT</h3>
      <div className="flex">
        {" "}
        <img
          src="https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg?size=626&ext=jpg&ga=GA1.1.1529487678.1686053509&semt=sph"
          alt=""
        />
        {/* className="h-auto ml-auto mb-4  flex flex-col max-w-lg mx-auto mt-9" */}{" "}
        <img
          src="https://img.freepik.com/free-photo/portrait-young-female-showing-rock-gesture-sticking-out-tongue-green-shirt-looking-happy-front-view_176474-66395.jpg?size=626&ext=jpg&ga=GA1.2.1529487678.1686053509&semt=sph"
          alt=""
        />{" "}
        <img
          // className="h-auto ml-auto mb-4  flex flex-col max-w-lg mx-auto mt-9"
          src="https://img.freepik.com/free-photo/african-american-man_1303-3987.jpg?size=626&ext=jpg&ga=GA1.2.1529487678.1686053509&semt=sph"
          alt=""
        />
      </div>
      <div className="flex">
        <img
          src="https://img.freepik.com/premium-photo/young-woman-portrait-green-high-fashion-clothing-pastel-colors-generative-ai_108146-4860.jpg"
          alt=""
        />

        <img
          src="https://img.freepik.com/free-photo/pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-22.jpg?size=626&ext=jpg&ga=GA1.1.1529487678.1686053509&semt=sph"
          alt=""
        />
        <img
          src="https://img.freepik.com/premium-photo/epitome-gorgeous-elegance-shot-beautiful-young-woman-modeling-fashionwear-studio_590464-35252.jpg?size=626&ext=jpg&ga=GA1.1.1529487678.1686053509&semt=sph"
          alt=""
        />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
