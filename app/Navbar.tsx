"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
// import { FcWorkflow } from "react-icons/fc";

const Navbar = () => {

  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 justify-between border-b mb-4 px-5 h-16 items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Issues Logo" width={50} height={50} />
        {/* <FcWorkflow width={50} height={20} /> */}
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          // `${link.href === currentPath ? 'text-sky-400' : 'text-slate-300'} text-xl  hover:text-white transition-colors`
          <Link
            key={link.href}
            className={classNames ({
              'text-zinc-700' : link.href === currentPath,
              'text-zinc-400' : link.href !== currentPath,
              'hover:text-black transition-colors text-xl' : true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
