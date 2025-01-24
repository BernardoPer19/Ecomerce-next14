import Sidebar from "@/components/ui/server/Sidebar";
import BtnOpenSideBar from "../../cart/client/BtnOpenSideBar";

const Navbar = async () => {
  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">Mi Ecommerce</h1>

      <div className="relative">
        <BtnOpenSideBar />
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;
