const Payment = () => {
  
  return (
    <div>
      <form action="">
        <h1 className=" font-medium my-6 mx-7">Select Payment Method </h1>
        <div className="">
          <button className="mt-1 dark:hover:bg-blue-500 bg-blue-400 rounded-full text-center py-1 px-5 mx-8">
            Debit Card
          </button>
          <button className="mt-1 dark:hover:bg-blue-500 bg-blue-400 rounded-full text-center py-1 px-5 mx-9">
            M-PESA
          </button>
        </div>
        <h1 className="my-6 mx-7 font-medium">Card Information</h1>
        <div className="my-6 mx-7">
          <h1>Card Holder Name</h1>
          <input
            className="text-center border-2 shadow"
            placeholder="Card Holder Name"
          ></input>
        </div>
        <div className="my-6 mx-7">
          <h1>Card Number</h1>
          <input
            className="text-center border-2 shadow"
            placeholder="Card Number"
          ></input>
        </div>

        <div className="flex">
          <h1 className="ml-7 mr-9">Expiry Date</h1>
          <h1 className="">CVC</h1>
        </div>
        <div className="my-6 mx-7 flex">
          <input
            className="text-center border-2 shadow p-2 mr-5"
            placeholder=""
          ></input>
          <input
            className="text-center border-2 shadow "
            placeholder=""
          ></input>
        </div>
        <div>
          {" "}
          <button className="my-6 mx-7 shadow rounded-md text-center py-2.5 px-5">
            Close
          </button>
          <button className="ml-3 mr-5 dark:hover:bg-blue-500 bg-blue-400 rounded-md text-center py-2.5 px-5">
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
