const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="https://i.pinimg.com/236x/83/0e/f6/830ef61c793532145298d984f1c66131.jpg"
          alt="Logo"
          className="h-20 mb-8"
        />
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="mt-4">Contact us at: 0738203784</p>
        <div className="mt-4 flex space-x-2">
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="px-4 py-2 w-60 border rounded-l-lg focus:outline-none"
          />
          <button className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
