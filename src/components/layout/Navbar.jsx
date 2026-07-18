import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-6">
        <FaBell size={20} />
        <FaUserCircle size={32} />
      </div>

    </header>
  );
}

export default Navbar;