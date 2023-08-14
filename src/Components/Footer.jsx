

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Subscribe
        </button>
      </div>
    </footer>
  );
};

export default Footer;
