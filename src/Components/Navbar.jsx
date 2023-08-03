

function Navbar() {
  return (
    <div className=''>
      <header className="bg-white shadow mx-8 mb-2 mt-8 py-2 rounded-lg  flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between pointer-events-auto">
            <nav className="rounded-lg ">
                <ul className="flex space-x-8 mt items-center justify-between ml-60">
                    <li className="font-medium p-4 flex text-black">
                        All
                    </li>
                    <li className="text-blue-500 font-medium p-4 flex">
                      Sweaters
                    </li>
                    <li className="font-medium p-4 flex text-black hover:text-blue-500">
                      Shoes
                    </li>
                    <li className="font-medium p-4 flex text-black  hover:text-blue-500" >
                      Tops
                    </li>
                    <li className="font-medium p-4 flex text-black  hover:text-blue-500">
                      Under Wear
                    </li>
                    <li className="font-medium p-4 flex text-black  hover:text-blue-500" >
                    Bags
                    </li>
                </ul>
            </nav>
        </div>
        </header>  
    </div>
  )
}

export default Navbar