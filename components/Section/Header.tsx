import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex absolute w-full justify-between h-[10vh] items-center px-20 mt-7">
      <div className="flex items-center gap-2">
        <Image
          src="/logo-15.svg"
          alt="brandlogo"
          width={36}
          height={36}
          priority
        ></Image>
        <p className="text-black font-custom text-4xl pt-1">XINLI</p>
      </div>
      <div className="absolute m-auto right-1/2 translate-x-1/2">
        <ul className="flex gap-10">
          <li>
            <Link href="#">Feature</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Docs</Link>
          </li>
          <li>
            <Link href="#">Showcase</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <button className="px-5 py-3 rounded">Sign in</button>
        <button className="font-bold px-7 py-4 rounded-xl border-r-[4px] border-b-[4px] border-black border bg-purple-700 text-white">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Header;
