import { Link} from "react-router-dom";
import { Tab, TabList, Tabs } from "react-tabs";


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

    </div>
  )
}

export default Navbar