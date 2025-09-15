import { Link, Outlet, useNavigate } from "react-router-dom";

export default function MerchantLayout() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth");
  }
  return (
    <div className="flex min-h-screen">
      <aside className="flex h-screen flex-col w-60 gap-3 bg-gray-800 text-white p-4 sticky top-0 z-50">
        <h2 className="text-2xl font-bold">Merchant Panel</h2>
        <nav className="flex flex-col gap-2 mt-4">
          <Link className="text-stone-300 hover:text-white" to="/dashboard">
            Dashboard
          </Link>
          <Link
            className="text-stone-300 hover:text-white"
            to="/dashboard/products"
          >
            Products
          </Link>
          <Link
            className="text-stone-300 hover:text-white"
            to="/dashboard/orders"
          >
            Orders
          </Link>
          <Link
            className="text-stone-300 hover:text-white"
            to="/dashboard/wallet"
          >
            Wallet
          </Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col ">
        <header className="bg-white p-4 flex justify-between sticky top-0 z-50 items-center shadow-md">
          <h1
            className="text-4xl font-extrabold bg-clip-text text-transparent 
                 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500
                 drop-shadow-lg"
          >
            your ገበያ
          </h1>

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
        </header>

        <main className="flex-1 p-6 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
