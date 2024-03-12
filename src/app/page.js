import Navbar from "@/components/Navbar";
import TodoLists from "@/components/TodoLists";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full space-y-3 flex min-h-screen flex-col items-center justify-start">
      <Navbar />
      <Link href={'/addtopic'} className="w-fit px-10 py-2 rounded-md font-semibold bg-blue-500 hover:bg-blue-600 text-black">Add Topic</Link>
      <TodoLists />
    </main>
  );
}
