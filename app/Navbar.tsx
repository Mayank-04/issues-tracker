import Image from "next/image";
import Link from "next/link";
// import { FcWorkflow } from "react-icons/fc";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 justify-between border-b mb-4 px-5 h-16 items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Issues Logo" width={50} height={20} />
        {/* <FcWorkflow width={50} height={20} /> */}
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-xl text-slate-300 hover:text-white transition-colors"
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
