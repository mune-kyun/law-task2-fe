import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-5 bg-[#026AA7] text-white flex items-center justify-center gap-4">
      <p class="font-bold text-lg">
        <Link href="/">CHAT ONLINE</Link>
      </p>
    </div>
  );
};

export default Navbar;
