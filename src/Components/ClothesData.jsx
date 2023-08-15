// // import React from 'react';
// import { useState } from "react";
// import { clothesData } from "./DataImage";

// const images = [
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbR8M2NGY5mBAZCVsFL7oNk7Se1I38DsIZQ&usqp=CAU",
//   "https://via.placeholder.com/200",
//   "https://via.placeholder.com/300",
// ];

// const ImageList = () => {
//   function searchForm(e) {
//     e.preventDefault();
//     console.log(search);
//   }

//   const [search, setSearch] = useState("");
//   console.log(clothesData);
//   return (
//     <div>
//       {images.map((image, clothing_type) => (
//         <img
//           key={clothing_type}
//           src={image}
//           alt={`Image ${clothing_type + 1}`}
//         />
//       ))}
//       <input
//         onSubmit={searchForm}
//         onChange={(e) => setSearch(e.target.value)}
//         className="bg-blue-900"
//         type="text"
//         placeholder="search it"
//       />
//     </div>
//   );
// };

// export default ImageList;
