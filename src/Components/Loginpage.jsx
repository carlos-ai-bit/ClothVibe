import { useNavigate } from "react-router-dom";

function Loginpage() {
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/");
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-30 w-30"
          src="https://i.pinimg.com/236x/83/0e/f6/830ef61c793532145298d984f1c66131.jpg"
          alt="Logo"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome Back!
        </h2>
        <h2 className="mt-10 text-center text-2l font-medium leading-9 tracking-tight text-gray-900">
          Log back into your ClothVibe account.
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email or Mobile Number*"
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="mt-2">
              <input
                id="Password"
                name="Password"
                type="Password"
                placeholder="Password*"
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={navigateHome}
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Continue
            </button>
          </div>
        </form>
        <div>
          <h2 className="mt-10 text-center text-2l font-medium leading-9 tracking-tight text-gray-900">
            For further support you may visit the Help center or contact our
            customer service team.
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Loginpage;
