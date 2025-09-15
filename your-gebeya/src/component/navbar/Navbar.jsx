import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth");
  }
  return (
    <nav className="flex items-center justify-between h-19 bg-white shadow-sm">
      <Link className="p-4 flex justify-center items-center" to="/">
        <h1
          className="text-4xl font-extrabold bg-clip-text text-transparent 
                 bg-gradient-to-r  from-green-500 via-yellow-400 to-red-500
                 drop-shadow-lg"
        >
          your ገበያ
        </h1>
      </Link>
      <div className="flex items-center justify-between flex-1 mx-8 max-w-120">
        <input
          className="flex-1 w-full focus:outline-none border px-4 py-1.5 rounded-full focus:ring focus:ring-blue-200 "
          placeholder="Search..."
        />

        <Link
          to="/orders"
          className="ml-4 font-medium bg-stone-200 px-8 py-1.5 text-black rounded-full hover:bg-stone-300 capitalize"
        >
          Orders
        </Link>
      </div>
      <div className=" flex items-center justify-between space-x-6 ">
        <div>
          <span className="text-gray-600 mr-4">Hello, {user?.name}</span>
          <Link to="/auth">
            <button
              onClick={() => {
                handleLogout();
              }}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </Link>
        </div>
        <Link className="mr-8" to="/cart">
          cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
