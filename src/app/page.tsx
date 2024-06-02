import Image from "next/image";
import LetterSection from "./components/LetterSection";
import ScoreSection from "./components/Score section";
import ButtonSection from "./components/ButtonSection";

export default function Home() {
  
  return (
    <body className="bg-slate-900">
      <header>
        <h1 className="text-center text-4xl text-slate-50">The Hanged-man game</h1>
      </header>
      <main className="flex flex-col items-center justify-between p-24">
        <section className="flex w-full flex-col justify-around md:flex-row">
          <LetterSection/>
          <ScoreSection/>
        </section>
        <ButtonSection/>
      </main>
    </body>
  );
}
