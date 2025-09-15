import logoImgSrc from "../../assets/Navbar/logo.jpg";
import { MdMenuOpen } from "react-icons/md";

function Navbar() {
  return (
    <div className="h-15 flex items-center justify-between px-6">
      <div className="flex items-center gap-8">
        <img src={logoImgSrc} alt="icon" className="h-12" />
        <MdMenuOpen />
      </div>
      <div className="bg-red-400">right</div>
    </div>
  );
}

export default Navbar;
