import Link from "next/link";
import { GiThreeLeaves } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div className="w-3/4 shadow-md px-3 py-3 bg-green-950 rounded-2xl mt-1 mx-auto max-w-[1100px]">
        {" "}
        {/* Ancho máximo y centrado */}
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex space-x-4 ml-4">
            <Link href="/" passHref>
              <span className="cursor-pointer text-orange-200 hover:opacity-75">
                Home
              </span>
            </Link>
            <Link href="/blog" passHref>
              <span className="cursor-pointer text-orange-200 hover:opacity-75">
                Blog
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="cursor-pointer text-orange-200 hover:opacity-75">
                About
              </span>
            </Link>
          </div>
          <div>
          <GiThreeLeaves className="w-10 h-10 rotate-on-hover"/>
          </div>
          <div className="flex space-x-4">
            <button className="text-orange-200 hover:opacity-80 text-sm font-bold py-2 px-2 rounded">
              Sign Up
            </button>
            <button className="text-orange-200 bg-red-400 hover:opacity-70 font-bold py-2 px-3 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
