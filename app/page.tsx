import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] flex items-center justify-center">
      <Link href="/site/swap">
        <button className=" rounded-xl bg-red-400 text-white px-20 py-12">
          Launch App
        </button>
      </Link>
    </main>
  );
}
