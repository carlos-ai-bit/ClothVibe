import { RiArrowRightLine } from "react-icons/ri";

function Categories() {
  return (
    <form action="" className="">
      <div className="text-center text-blue-500">ALL</div>
      <div className="flex w-86 h-80 items-center  ">
        <div className="shadow mx-8 mb-4 rounded-lg ml-64">
          <img
          className="w-48 h-60" 
            src="https://media.istockphoto.com/id/1415539642/photo/vertical-shot-of-a-stack-of-folded-clothes.webp?b=1&s=170667a&w=0&k=20&c=Xsjae-AWRltveHYRLvHviypNpE8PQH6oBhr5kwEQDeY="
            alt="clothes"
          />
          <div className="ml-10 flex">
            <h4>Clothes</h4> <RiArrowRightLine className="arrow-icon ml-5 mt-1" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 rounded-lg">
          <img
          className="w-48 h-60"
            src="https://media.istockphoto.com/id/1249496770/photo/running-shoes.webp?b=1&s=170667a&w=0&k=20&c=xKzV4mPrvaeWWVMR8CCTMXTGCz431pydZvlMn0WxOyw="
            alt="shoes"
          />
           <div className="ml-10 flex">
            <h4>Shoes</h4> <RiArrowRightLine className="arrow-icon ml-5 mt-1" />
          </div>
        </div>
        <div className="shadow mx-8 mb-4 rounded-lg">
          <img
          className="w-48 h-60"
            src="https://media.istockphoto.com/id/1365118618/photo/blue-fashion-purse-handbag-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=VNszfC0cxenqZGhjlr3gqqvzHWREuhdY_H3CKF1B38g="
            alt=""
          />
           <div className=" flex">
            <h4 className="ml-10">Accessories</h4> <RiArrowRightLine className="arrow-icon ml-5 mt-1" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Categories;
