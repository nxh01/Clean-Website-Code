import About from "@/components/pages/about/About";
import Captures from "@/components/pages/captures/Captures";
import Explore from "@/components/pages/explore/Explore";
import Hero from "@/components/pages/home/Hero";
import Journal from "@/components/pages/journal/Journal";
import Questions from "@/components/pages/questions/Questions";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Explore />
      <Journal />
      <Captures />
      <Questions />
    </main>
  );
}
