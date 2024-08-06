import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
      <div className="container max-w-3xl">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="w-28 h-2 bg-red-300" />
            <div className="w-24 h-2 bg-blue-300" />
            <div className="w-2 h-2 bg-yellow-300 rounded-full" />
          </div>
          <div className="flex gap-2">
            <div className="w-72 h-2 bg-purple-400" />
          </div>
          <div className="flex gap-2">
            <div className="w-16 h-2 bg-blue-300" />
            <div className="w-2 h-2 bg-yellow-300 rounded-full" />
            <div className="w-32 h-2 bg-green-300" />
            <div className="w-24 h-2 bg-blue-300" />
          </div>
          <div className="flex gap-2">
            <span className="w-6" />
            <div className="w-28 h-2 bg-red-300" />
            <div className="w-2 h-2 bg-yellow-300 rounded-full" />
            <div className="w-32 h-2 bg-green-300" />
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-2 bg-pink-300" />
            <div className="w-32 h-2 bg-green-300" />
            <div className="w-2 h-2 bg-yellow-300 rounded-full" />
            <div className="w-32 h-2 bg-blue-300" />
          </div>
          <div className="py-3 px-6">
            <h1 className="text-4xl font-regular text-zinc-200">Eddie Kuo</h1>
            <p className="text-zinc-500">Software Engineer</p>
          </div>
          <div className="flex gap-2">
            <div className="w-48 h-2 bg-red-300" />
            <div className="w-2 h-2 bg-yellow-300 rounded-full" />
          </div>
          <div className="flex gap-2">
            <div className="w-16 h-2 bg-orange-300" />
            <div className="w-24 h-2 bg-green-300" />
            <div className="w-24 h-2 bg-blue-300" />
          </div>
          <div className="flex gap-2">
            <div className="w-28 h-2 bg-red-300" />
            <div className="w-2 h-2 bg-yellow-300 rounded-full" />
            <div className="w-32 h-2 bg-purple-300" />
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-2 bg-green-300" />
            <div className="w-32 h-2 bg-purple-300" />
            <div className="w-28 h-2 bg-orange-300" />
            <div className="w-2 h-2 bg-yellow-300 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
