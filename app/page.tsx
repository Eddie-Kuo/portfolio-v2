import { motion } from "framer-motion";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
      <div className="container max-w-5xl flex justify-between">
        <Hero />
      </div>
    </main>
  );
}
