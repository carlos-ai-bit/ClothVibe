import ProductsView from "./ProductsView";
import {
  sweaterData,
  shoesData,
  topsData,
  bagsData,
  underwearData,
} from "./SweaterData";
function All() {
  const filterProductsByType = (productType) => {
    switch (productType) {
      case "sweater":
        return sweaterData;
      case "shoes":
        return shoesData;
      case "tops":
        return topsData;
      case "bags":
        return bagsData;
      case "underwear":
        return underwearData;
      default:
        return [];
    }
  };

  const renderProduct = (product) => (
    <div
      className="grid grid-cols-3 shadow mx-8 mb-4 py-4 w-56 rounded-lg"
      key={product.id}
    >
      <img src={product.imageSrc} alt={product.name} />
    </div>
  );

  return (
    <div className="w-full h-full flex flex-wrap">
      {filterProductsByType("sweater").map(renderProduct)}
      {filterProductsByType("shoes").map(renderProduct)}
      {filterProductsByType("tops").map(renderProduct)}
      {filterProductsByType("bags").map(renderProduct)}
      {filterProductsByType("underwear").map(renderProduct)}

      <ProductsView />
    </div>
  );
}

export default All;
//     <>
//       <div className="w-full h-full">
//         <img src="src/Assets/clothes asthetic.jpg" className="w-full h-full" />
//       </div>
//     </>
//   );
// }

// export default All;
