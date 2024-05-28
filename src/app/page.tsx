import Image from "next/image";

export default function Home() {
  return (
    <>
    <header>
    <h1 className="text-center text-4xl">The Hanged-man game</h1>
    </header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <section className="flex w-full justify-around">
      <div className="bg-sky-300">
        <div className="tracking-wide">______</div>
      </div>
      <div className="bg-emerald-300">
        <div>10</div>
      </div>
    </section>
    </main>
    </>
  );
}
