import { Link } from "react-router-dom";
// import { Tab, TabList, Tabs } from "react-tabs";
function Navbar() {
  return (
    <div>
      <Tabs>
        <TabList className="bg-white shadow mx-8 mb-2 mt-8 py-2 rounded-lg flex items-center ">
          <Tab className="bg-blue-500 rounded-lg px-8 m-2">
            <Link to="/all">All</Link>
          </Tab>
          <Tab className="font-medium flex hover:bg-blue-500 rounded-lg px-4">
            <Link to="/sweaters">Sweaters</Link>
          </Tab>
          <Tab className="font-medium flex hover:bg-blue-500 rounded-lg px-8">
            <Link to="/shoes">Shoes</Link>
          </Tab>
          <Tab className="font-medium flex hover:bg-blue-500 rounded-lg px-8">
            <Link to="/tops">Tops</Link>
          </Tab>
          <Tab className="font-medium flex hover:bg-blue-500 rounded-lg px-8">
            <Link to="/underwear">UnderWear</Link>
          </Tab>
          <Tab className="font-medium flex hover:bg-blue-500 rounded-lg px-8">
            <Link to="/bags">Bags</Link>
          </Tab>
        </TabList>
      </Tabs>
      <div className="">
        <header className="bg-white shadow mx-8 mb-2 mt-8 py-2 rounded-lg  flex items-center justify-between">
          <div className="container mx-auto flex items-center justify-between pointer-events-auto">
            <nav className="rounded-lg ">
              <ul className="flex space-x-8 mt items-center justify-between ml-60">
                <li className="font-medium p-4 flex text-blue-500 ">
                  <Link to="/all">All</Link>
                </li>
                <li className="font-medium p-4 flex text-black hover:text-blue-500">
                  <Link to="/sweaters">Sweaters</Link>
                </li>
                <li className="font-medium p-4 flex text-black hover:text-blue-500">
                  <Link to="/shoes">Shoes</Link>
                </li>
                <li className="font-medium p-4 flex text-black  hover:text-blue-500">
                  <Link to="/tops">Tops</Link>
                </li>
                <li className="font-medium p-4 flex text-black  hover:text-blue-500">
                  <Link to="/underwear">Under Wear</Link>
                </li>
                <li className="font-medium p-4 flex text-black  hover:text-blue-500">
                  <Link to="/bags">Bags</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Navbar;
