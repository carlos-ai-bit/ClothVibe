
import ProductsView from "./ProductsView";
// eslint-disable-next-line no-unused-vars
import {sweaterData} from "./SweaterData";
import {shoesData }from "./SweaterData";
import {topsData }from "./SweaterData";
import {bagsData }from "./SweaterData";
import {underwearData }from "./SweaterData";

function All() {
  return (
                  
      <div className="w-full h-full flex flex-wrap">
      
     
    
     
      {shoesData.map((shoe) => (
        <div className=" grid grid-col-3 shadow mx-8 mb-4 py-4 w-56 rounded-lg " key={shoe.id}>
          <img src={shoe.imageSrc} 
          alt={shoe.name} />
          {/* <p>{shoe.price}</p> */}
        </div>
        
      ))}

    
      
      {topsData.map((top) => (
        <div className="shadow mx-8 mb-4 py-4 w-56 grid grid-col-3 rounded-lg" key={top.id}>
          <img src={top.imageSrc}
           alt={top.name} />
          {/* <p>{top.price}</p> */}
        </div>
      ))}

     
      
      {bagsData.map((bag) => (
        <div className="shadow mx-8 mb-4 py-4 w-56  grid grid-col-3 rounded-lg" key={bag.id}>
          <img src={bag.imageSrc} 
          alt={bag.name} />
          {/* <p>{bag.price}</p> */}
        </div>
      ))}

     
   
      {underwearData.map((underwear) => (
        <div className="shadow mx-8 mb-4 py-4 w-56  grid grid-col-3 rounded-lg" key={underwear.id}>
          <img src={underwear.imageSrc} 
          alt={underwear.name} />
          {/* <p>{underwear.price}</p> */}
        </div>
      ))}

      <ProductsView />
    </div>
  );
}

export default All;
