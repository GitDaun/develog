import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="flex justify-between md:items-center mt-6 pb-4 border-b">
      <div className="flex items-center justify-between">
        <div className="hidden md:block">
          <Link href="/" className="text-xl font-bold pr-8">Devlog of Daun</Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
}